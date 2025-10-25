import serverAxios from './axios';

// Spotify API Response Interfaces
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

// Our standardized response interface
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

class SpotifyServerService {
  private clientId: string;
  private clientSecret: string;
  private refreshToken: string;
  private tokenEndpoint = 'https://accounts.spotify.com/api/token';
  private nowPlayingEndpoint = 'https://api.spotify.com/v1/me/player/currently-playing';
  private recentlyPlayedEndpoint = 'https://api.spotify.com/v1/me/player/recently-played';

  constructor() {
    this.clientId = process.env.SPOTIFY_CLIENT_ID || '';
    this.clientSecret = process.env.SPOTIFY_CLIENT_SECRET || '';
    this.refreshToken = process.env.SPOTIFY_REFRESH_TOKEN || '';

    if (!this.clientId || !this.clientSecret || !this.refreshToken) {
      console.warn('Spotify credentials not configured');
    }
  }

  /**
   * Get Spotify access token using refresh token
   */
  private async getAccessToken(): Promise<string> {
    const basic = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');

    const response = await serverAxios.post<SpotifyTokenResponse>(
      this.tokenEndpoint,
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: this.refreshToken,
      }).toString(),
      {
        headers: {
          Authorization: `Basic ${basic}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  }

  /**
   * Format track data into standardized response
   */
  private formatTrackData(
    track: SpotifyTrack,
    isPlaying: boolean = false,
    progress?: number,
    wasRecentlyPlayed: boolean = false
  ): NowPlayingData {
    return {
      isPlaying,
      title: track.name,
      artist: track.artists.map((artist) => artist.name).join(', '),
      album: track.album.name,
      albumImageUrl: track.album.images[0]?.url,
      songUrl: track.external_urls.spotify,
      duration: track.duration_ms,
      progress,
      wasRecentlyPlayed,
    };
  }

  /**
   * Get recently played track
   */
  private async getRecentlyPlayed(accessToken: string): Promise<NowPlayingData> {
    try {
      const response = await serverAxios.get<SpotifyRecentlyPlayedResponse>(
        this.recentlyPlayedEndpoint,
        {
          params: { limit: 1 },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const track = response.data.items[0]?.track;
      if (!track) {
        return { isPlaying: false };
      }

      return this.formatTrackData(track, false, undefined, true);
    } catch (error) {
      console.error('Error fetching recently played:', error);
      return { isPlaying: false };
    }
  }

  /**
   * Get currently playing or recently played track
   */
  async getNowPlaying(): Promise<NowPlayingData> {
    try {
      const accessToken = await this.getAccessToken();

      // Try to get currently playing
      const response = await serverAxios.get<SpotifyNowPlayingResponse>(
        this.nowPlayingEndpoint,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          validateStatus: (status) => status < 500, // Don't throw on 204 or 4xx
        }
      );

      // No content (nothing playing) or error
      if (response.status === 204 || response.status >= 400) {
        return await this.getRecentlyPlayed(accessToken);
      }

      const song = response.data;
      if (!song.item) {
        return await this.getRecentlyPlayed(accessToken);
      }

      return this.formatTrackData(song.item, song.is_playing, song.progress_ms);
    } catch (error) {
      console.error('Error fetching Spotify now playing:', error);
      throw new Error('Failed to fetch Spotify data');
    }
  }
}

// Export singleton instance
export const spotifyServerService = new SpotifyServerService();
