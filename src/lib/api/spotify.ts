import axiosInstance from './axios';

export interface SpotifyData {
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  isPlaying: boolean;
  progress: number;
  duration: number;
  wasRecentlyPlayed?: boolean;
}

class SpotifyService {
  /**
   * Fetch currently playing track or recently played
   */
  async getNowPlaying(): Promise<SpotifyData | null> {
    try {
      const response = await axiosInstance.get<SpotifyData>('/spotify/now-playing');
      return response.data;
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
      throw error;
    }
  }
}

export const spotifyService = new SpotifyService();
