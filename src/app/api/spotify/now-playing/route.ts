import { NextResponse } from 'next/server';
import { spotifyServerService } from '@/lib/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await spotifyServerService.getNowPlaying();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
    });
  } catch (error) {
    console.error('Error in Spotify API route:', error);
    return NextResponse.json(
      { isPlaying: false, error: 'Failed to fetch Spotify data' },
      { status: 500 }
    );
  }
}
