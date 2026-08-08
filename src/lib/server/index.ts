/**
 * Server-side services and utilities
 * These run only on the server and handle external API calls
 */

export { default as serverAxios } from './axios';
export { githubServerService } from './github.service';

// Re-export types
export type { GitHubData, GitHubUser, GitHubRepo } from './github.service';
