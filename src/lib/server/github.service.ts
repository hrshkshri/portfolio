const GITHUB_USERNAME = 'hrshkshri';
const GITHUB_API_BASE = 'https://api.github.com';

/** How long Next's data cache holds a GitHub response. */
const REVALIDATE_SECONDS = 3600;

export interface GitHubUser {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export interface GitHubData {
  user: GitHubUser;
  repos: GitHubRepo[];
}

export class GitHubRateLimitError extends Error {
  constructor(public readonly retryAfterSeconds: number | null) {
    super('GitHub API rate limit exceeded');
    this.name = 'GitHubRateLimitError';
  }
}

/** Non-2xx from GitHub. fetch resolves on error statuses, so this is what
 *  turns them into something throwable that still carries the headers. */
class GitHubHttpError extends Error {
  constructor(
    public readonly status: number,
    public readonly headers: Headers
  ) {
    super(`GitHub responded ${status}`);
    this.name = 'GitHubHttpError';
  }
}

/** Last successful payload, kept in module scope so a rate-limited window can
 *  serve stale data instead of failing the whole page. */
let lastGood: { data: GitHubData; at: number } | null = null;

/**
 * Returns seconds until reset when rate limited, or `false` when the error is
 * something else. GitHub signals exhaustion as 403 with x-ratelimit-remaining:0
 * as well as the more obvious 429, so both are matched.
 */
function isRateLimited(error: unknown): number | null | false {
  if (!(error instanceof GitHubHttpError)) return false;

  const remaining = error.headers.get('x-ratelimit-remaining');
  if (error.status === 429 || (error.status === 403 && remaining === '0')) {
    const reset = Number(error.headers.get('x-ratelimit-reset'));
    return Number.isFinite(reset)
      ? Math.max(0, reset - Math.floor(Date.now() / 1000))
      : null;
  }
  return false;
}

class GitHubServerService {
  private baseURL = GITHUB_API_BASE;
  private username = GITHUB_USERNAME;

  /** Unauthenticated GitHub allows 60 req/hr per IP — and on shared hosting
   *  that IP is shared with other tenants. With GITHUB_TOKEN it is 5,000/hr
   *  against your own account. */
  private get headers(): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    const token = process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;
    return headers;
  }

  private async request<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${path}`, {
      headers: this.headers,
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new GitHubHttpError(response.status, response.headers);
    }
    return response.json() as Promise<T>;
  }

  getUser(): Promise<GitHubUser> {
    return this.request<GitHubUser>(`/users/${this.username}`);
  }

  getRepos(limit = 6): Promise<GitHubRepo[]> {
    return this.request<GitHubRepo[]>(
      `/users/${this.username}/repos?sort=updated&per_page=${limit}`
    );
  }

  /**
   * Fetch user + repos in parallel. Events are deliberately not requested —
   * nothing renders them, and each call spends rate-limit budget.
   *
   * On failure, falls back to the last successful payload so a rate-limited
   * window degrades to slightly-stale data rather than an error page.
   */
  async getAllData(): Promise<{ data: GitHubData; stale: boolean }> {
    try {
      const [user, repos] = await Promise.all([this.getUser(), this.getRepos()]);
      const data: GitHubData = { user, repos };
      lastGood = { data, at: Date.now() };
      return { data, stale: false };
    } catch (error) {
      const retryAfter = isRateLimited(error);

      if (lastGood) {
        const ageMin = Math.round((Date.now() - lastGood.at) / 60000);
        console.warn(
          `GitHub fetch failed (${retryAfter !== false ? 'rate limited' : 'error'}); ` +
            `serving cached data from ${ageMin}m ago.`
        );
        return { data: lastGood.data, stale: true };
      }

      console.error('Error fetching GitHub data (no cache to fall back to):', error);
      if (retryAfter !== false) throw new GitHubRateLimitError(retryAfter);
      throw new Error('Failed to fetch GitHub data');
    }
  }
}

// Export singleton instance
export const githubServerService = new GitHubServerService();
