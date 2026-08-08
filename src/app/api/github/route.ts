import { NextResponse } from 'next/server';
import { githubServerService } from '@/lib/server';
import { GitHubRateLimitError } from '@/lib/server/github.service';

/**
 * Dynamic, not ISR-prerendered. With `revalidate` this route was baked at build
 * time — so a deploy that happened to hit the GitHub rate limit would serve the
 * cached *error* for a full hour. Caching now happens at the CDN via
 * Cache-Control, which lets us cache successes and refuse to cache failures.
 */
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, stale } = await githubServerService.getAllData();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        // Stale payloads get a short TTL so we retry the real API sooner.
        'Cache-Control': stale
          ? 'public, s-maxage=60, stale-while-revalidate=300'
          : 'public, s-maxage=3600, stale-while-revalidate=86400',
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
          headers: {
            'Cache-Control': 'no-store',
            ...(error.retryAfterSeconds
              ? { 'Retry-After': String(error.retryAfterSeconds) }
              : {}),
          },
        }
      );
    }

    console.error('Error in GitHub API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
