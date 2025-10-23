import { getNowPlaying } from '@/lib/spotify';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await getNowPlaying();

    if (!response || response.isPlaying === false) {
      return NextResponse.json(
        {
          isPlaying: false,
          title: response?.title || null,
          artist: response?.artist || null,
          album: response?.album || null,
          albumImageUrl: response?.albumImageUrl || null,
          songUrl: response?.songUrl || null,
          wasRecentlyPlayed: response?.wasRecentlyPlayed || false,
        },
        {
          status: 200,
          headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
          },
        }
      );
    }

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json(
      { isPlaying: false, error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
