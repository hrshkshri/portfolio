import { NextResponse } from 'next/server';
import { githubServerService } from '@/lib/server';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const data = await githubServerService.getAllData();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800',
      },
    });
  } catch (error) {
    console.error('Error in GitHub API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}
