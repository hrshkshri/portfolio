import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

interface SpotifyTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  error?: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 });
  }

  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirect_uri = process.env.NEXT_PUBLIC_BASE_URL + '/api/spotify/callback';

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
      }),
    });

    const data: SpotifyTokenResponse = await response.json();

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    // Return the tokens (especially the refresh_token which you'll need to save in .env)
    return NextResponse.json({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_in: data.expires_in,
      message: 'Save the refresh_token in your .env file as SPOTIFY_REFRESH_TOKEN',
    });
  } catch (error) {
    console.error('Error getting Spotify tokens:', error);
    return NextResponse.json({ error: 'Failed to get tokens' }, { status: 500 });
  }
}
