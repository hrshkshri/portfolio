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

export interface GitHubEvent {
  id: string;
  type: string;
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload?: any;
}

export interface GitHubData {
  user: GitHubUser;
  repos: GitHubRepo[];
  events: GitHubEvent[];
}

class GitHubServerService {
  private baseURL: string;
  private username: string;

  constructor() {
    this.baseURL = GITHUB_API_BASE;
    this.username = GITHUB_USERNAME;
  }

  /**
   * Fetch GitHub user data
   */
  async getUser(): Promise<GitHubUser> {
    const response = await serverAxios.get<GitHubUser>(
      `${this.baseURL}/users/${this.username}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
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
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );
    return response.data;
  }

  /**
   * Fetch user's public events (activity)
   */
  async getEvents(limit: number = 10): Promise<GitHubEvent[]> {
    const response = await serverAxios.get<GitHubEvent[]>(
      `${this.baseURL}/users/${this.username}/events/public`,
      {
        params: {
          per_page: limit,
        },
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );
    return response.data;
  }

  /**
   * Fetch all GitHub data (user, repos, events) in parallel
   */
  async getAllData(): Promise<GitHubData> {
    try {
      const [user, repos, events] = await Promise.all([
        this.getUser(),
        this.getRepos(),
        this.getEvents(),
      ]);

      return {
        user,
        repos,
        events,
      };
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      throw new Error('Failed to fetch GitHub data');
    }
  }
}

// Export singleton instance
export const githubServerService = new GitHubServerService();
