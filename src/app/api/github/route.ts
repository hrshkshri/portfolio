import { NextResponse } from 'next/server';
import { githubServerService } from '@/lib/server';
import { GitHubRateLimitError } from '@/lib/server/github.service';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const { data, stale } = await githubServerService.getAllData();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800',
        // Signals the payload came from the fallback cache, not a fresh fetch.
        'X-Data-Stale': String(stale),
      },
    });
  } catch (error) {
    if (error instanceof GitHubRateLimitError) {
      console.error('GitHub API rate limit exceeded and no cached data available.');
      return NextResponse.json(
        {
          error: 'GitHub rate limit exceeded',
          detail:
            'Unauthenticated GitHub requests are capped at 60/hour per IP. Set GITHUB_TOKEN to raise this to 5,000/hour.',
        },
        {
          status: 429,
          headers: error.retryAfterSeconds
            ? { 'Retry-After': String(error.retryAfterSeconds) }
            : undefined,
        }
      );
    }

    console.error('Error in GitHub API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}
