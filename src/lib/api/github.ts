import axiosInstance from './axios';

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
  repo: { name: string };
  created_at: string;
  payload: any;
}

export interface GitHubData {
  user: GitHubUser;
  repos: GitHubRepo[];
  events: GitHubEvent[];
}

class GitHubService {
  /**
   * Fetch GitHub user data, repositories, and events
   */
  async getGitHubData(): Promise<GitHubData> {
    try {
      const response = await axiosInstance.get<GitHubData>('/github');
      return response.data;
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      throw error;
    }
  }
}

export const githubService = new GitHubService();
