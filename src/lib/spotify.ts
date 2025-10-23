interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyArtist {
  name: string;
}

interface SpotifyAlbumImage {
  url: string;
  height: number;
  width: number;
}

interface SpotifyAlbum {
  name: string;
  images: SpotifyAlbumImage[];
}

interface SpotifyExternalUrls {
  spotify: string;
}

interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  external_urls: SpotifyExternalUrls;
  duration_ms: number;
}

interface SpotifyNowPlayingResponse {
  is_playing: boolean;
  item: SpotifyTrack;
  progress_ms: number;
}

interface SpotifyRecentlyPlayedItem {
  track: SpotifyTrack;
}

interface SpotifyRecentlyPlayedResponse {
  items: SpotifyRecentlyPlayedItem[];
}

export interface NowPlayingData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
  duration?: number;
  progress?: number;
  wasRecentlyPlayed?: boolean;
}

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async (): Promise<SpotifyTokenResponse> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token || '',
    }),
  });

  return response.json();
};

export const getNowPlaying = async (): Promise<NowPlayingData> => {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    // Nothing is playing or error, try to get recently played
    const recentResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (recentResponse.status === 200) {
      const data: SpotifyRecentlyPlayedResponse = await recentResponse.json();
      const track = data.items[0]?.track;

      if (!track) {
        return { isPlaying: false };
      }

      return {
        isPlaying: false,
        title: track.name,
        artist: track.artists.map(artist => artist.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url,
        songUrl: track.external_urls.spotify,
        duration: track.duration_ms,
        wasRecentlyPlayed: true,
      };
    }

    return { isPlaying: false };
  }

  const song: SpotifyNowPlayingResponse = await response.json();

  if (!song.item) {
    return { isPlaying: false };
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map(artist => artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0]?.url;
  const songUrl = song.item.external_urls.spotify;
  const duration = song.item.duration_ms;
  const progress = song.progress_ms;

  return {
    isPlaying,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
    duration,
    progress,
  };
};
