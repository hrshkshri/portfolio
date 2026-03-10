"use client";

import React, { useState, useEffect } from "react";
import { spotifyService, SpotifyData } from "@/lib/api";
import { SiSpotify } from "react-icons/si";

const Spotify: React.FC = () => {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const data = await spotifyService.getNowPlaying();
        setSpotifyData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 5000);
    return () => clearInterval(interval);
  }, []);

  const progressPercentage =
    spotifyData?.progress && spotifyData?.duration
      ? (spotifyData.progress / spotifyData.duration) * 100
      : 0;

  const formatTime = (ms?: number): string => {
    if (!ms) return "0:00";
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const isPlaying = spotifyData?.isPlaying || false;
  const hasTrack = spotifyData && (spotifyData.title || spotifyData.wasRecentlyPlayed);

  // Loading
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black flex flex-col justify-end px-8 md:px-16 pb-12">
        <div className="absolute inset-0 bg-neutral-950 animate-pulse" />
        <div className="relative z-10 space-y-4">
          <div className="h-3 w-24 bg-neutral-800 rounded" />
          <div className="h-16 w-64 bg-neutral-800 rounded" />
        </div>
      </div>
    );
  }

  // Empty state — not listening, no recent track
  if (!hasTrack) {
    return (
      <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-end bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-neutral-950" />
        <div className="relative z-10 w-full px-8 md:px-16 pb-12 grid grid-cols-2 items-end gap-8">
          <div className="space-y-5">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
                Spotify
              </p>
              <h1 className="font-Rampart text-6xl md:text-8xl text-white leading-none">
                Quiet.
              </h1>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Nothing playing right now. Check back later.
            </p>
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-200 inline-flex items-center gap-2 w-fit"
            >
              <SiSpotify className="w-4 h-4" />
              Open Spotify
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-end">

      {/* Full-bleed album art — mirrors the profile photo on home */}
      <div className="absolute inset-0 flex items-center justify-center">
        {spotifyData?.albumImageUrl && (
          <img
            src={spotifyData.albumImageUrl}
            alt={spotifyData.album}
            className="h-full w-full object-cover scale-110 blur-sm"
          />
        )}
      </div>

      {/* Gradient overlay — transparent top, dark bottom (same as home) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      {/* Bottom content — two-column, mirrors home page */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-12 grid grid-cols-2 items-end gap-8">

        {/* Left */}
        <div className="space-y-5">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3 flex items-center gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isPlaying ? "bg-green-500 animate-pulse" : "bg-neutral-600"
                }`}
              />
              {isPlaying ? "listening now" : "last played"}
            </p>
            {/* Song title as the big Rampart headline */}
            <h1 className="font-Rampart text-5xl md:text-7xl text-white leading-none">
              {spotifyData?.title}
            </h1>
          </div>

          <div>
            <p className="text-lg text-neutral-300">{spotifyData?.artist}</p>
            <p className="text-sm text-neutral-500 mt-0.5">{spotifyData?.album}</p>
          </div>

          {/* Progress bar */}
          {isPlaying && (
            <div className="space-y-1.5 max-w-sm">
              <div className="w-full h-0.5 bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-neutral-600">
                <span>{formatTime(spotifyData?.progress)}</span>
                <span>{formatTime(spotifyData?.duration)}</span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-6">
            <a
              href={spotifyData?.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-200 flex items-center gap-2 w-fit"
            >
              <SiSpotify className="w-4 h-4" />
              Open in Spotify
            </a>
            <a
              href="/home"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              ← Back
            </a>
          </div>
        </div>

        {/* Right: album art (crisp) */}
        <div className="flex justify-end">
          <div className="relative">
            <img
              src={spotifyData?.albumImageUrl}
              alt={spotifyData?.album}
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-2xl"
            />
            {isPlaying && (
              <div className="absolute -top-2 -right-2 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-800">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-neutral-300">live</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Spotify;
