import serverAxios from './axios';

const GITHUB_USERNAME = 'hrshkshri';
const GITHUB_API_BASE = 'https://api.github.com';

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

/** Last successful payload, kept in module scope so a rate-limited window can
 *  serve stale data instead of failing the whole page. */
let lastGood: { data: GitHubData; at: number } | null = null;

function isRateLimited(error: unknown): number | null | false {
  const res = (error as { response?: { status?: number; headers?: Record<string, string> } })?.response;
  if (!res) return false;
  const remaining = res.headers?.["x-ratelimit-remaining"];
  if (res.status === 429 || (res.status === 403 && remaining === "0")) {
    const reset = Number(res.headers?.["x-ratelimit-reset"]);
    return Number.isFinite(reset) ? Math.max(0, reset - Math.floor(Date.now() / 1000)) : null;
  }
  return false;
}

class GitHubServerService {
  private baseURL: string;
  private username: string;

  constructor() {
    this.baseURL = GITHUB_API_BASE;
    this.username = GITHUB_USERNAME;
  }

  /** Unauthenticated GitHub allows 60 req/hr per IP — shared across every
   *  visitor. With GITHUB_TOKEN set that becomes 5,000/hr. */
  private get headers(): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };
    const token = process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;
    return headers;
  }

  /**
   * Fetch GitHub user data
   */
  async getUser(): Promise<GitHubUser> {
    const response = await serverAxios.get<GitHubUser>(
      `${this.baseURL}/users/${this.username}`,
      { headers: this.headers }
    );
    return response.data;
  }

  /**
   * Fetch user's repositories
   */
  async getRepos(limit: number = 6): Promise<GitHubRepo[]> {
    const response = await serverAxios.get<GitHubRepo[]>(
      `${this.baseURL}/users/${this.username}/repos`,
      {
        params: {
          sort: 'updated',
          per_page: limit,
        },
        headers: this.headers,
      }
    );
    return response.data;
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
