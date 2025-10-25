"use client";

import React, { useState, useEffect } from "react";
import { SiSpotify } from "react-icons/si";
import {
  Music2,
  Waves,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface SpotifyData {
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

const SpotifyVibes: React.FC = () => {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch currently playing track
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api/spotify/now-playing");
        const data = await response.json();
        setSpotifyData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
        setLoading(false);
      }
    };

    fetchNowPlaying();
    // Refresh every 5 seconds
    const interval = setInterval(fetchNowPlaying, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate progress percentage
  const progressPercentage =
    spotifyData?.progress && spotifyData?.duration
      ? (spotifyData.progress / spotifyData.duration) * 100
      : 0;

  // Format milliseconds to MM:SS
  const formatTime = (ms?: number): string => {
    if (!ms) return "0:00";
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8 flex items-center justify-center">
        <div className="text-center">
          <SiSpotify className="w-16 h-16 text-green-500 animate-pulse mx-auto mb-4" />
          <p className="text-neutral-400 text-lg">Loading your vibes...</p>
        </div>
      </div>
    );
  }

  const isPlaying = spotifyData?.isPlaying || false;
  const hasData =
    spotifyData && (spotifyData.title || spotifyData.wasRecentlyPlayed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with vibe */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <SiSpotify className="w-12 h-12 text-green-500 animate-pulse" />
              <Sparkles className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-bounce" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {isPlaying
                  ? "Vibing rn 🎧"
                  : spotifyData?.wasRecentlyPlayed
                  ? "Last played 🎵"
                  : "Waiting for vibes... 🎧"}
              </h1>
              <p className="text-neutral-400 text-sm flex items-center gap-2">
                <span
                  className={`inline-block w-2 h-2 ${
                    isPlaying ? "bg-green-500" : "bg-neutral-500"
                  } rounded-full ${isPlaying ? "animate-pulse" : ""}`}
                ></span>
                {isPlaying
                  ? "Live • Premium Active"
                  : spotifyData?.wasRecentlyPlayed
                  ? "Recently Played"
                  : "Offline"}
              </p>
            </div>
          </div>
        </div>

        {/* Main Player Card */}
        {hasData ? (
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 md:p-8 shadow-2xl border border-neutral-700 mb-6 relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-75"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8">
              {/* Album Art */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-amber-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img
                  src={
                    spotifyData.albumImageUrl ||
                    "https://via.placeholder.com/300?text=No+Image"
                  }
                  alt={spotifyData.album || "Album"}
                  className="relative w-full aspect-square object-cover rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform"
                />
                {isPlaying && (
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                    <Waves className="w-4 h-4 text-green-500 animate-pulse" />
                    <span className="text-white text-sm font-medium">
                      Playing
                    </span>
                  </div>
                )}
                {spotifyData.wasRecentlyPlayed && !isPlaying && (
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                    <Music2 className="w-4 h-4 text-neutral-400" />
                    <span className="text-white text-sm font-medium">
                      Last Played
                    </span>
                  </div>
                )}
              </div>

              {/* Song Info */}
              <div className="flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                      {spotifyData.title}
                    </h2>
                    <p className="text-xl text-neutral-400">
                      {spotifyData.artist}
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">
                      {spotifyData.album}
                    </p>
                  </div>

                  {/* Open in Spotify */}
                  <a
                    href={spotifyData.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-green-500/30 w-fit"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in Spotify
                  </a>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-amber-400 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-400">
                    <span>{formatTime(spotifyData.progress)}</span>
                    <span>{formatTime(spotifyData.duration)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-12 shadow-2xl border border-neutral-700 mb-6 text-center">
            <Music2 className="w-24 h-24 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              No music playing
            </h3>
            <p className="text-neutral-400 mb-6">
              Start playing something on Spotify to see it here!
            </p>
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-green-500/30"
            >
              <SiSpotify className="w-5 h-5" />
              Open Spotify
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpotifyVibes;
