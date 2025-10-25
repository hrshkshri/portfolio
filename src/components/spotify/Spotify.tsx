"use client";

import React, { useState, useEffect } from "react";
import { spotifyService, SpotifyData } from "@/lib/api";
import LoadingState from "./LoadingState";
import Header from "./Header";
import PlayerCard from "./PlayerCard";
import EmptyState from "./EmptyState";

const Spotify: React.FC = () => {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch currently playing track
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

  if (loading) return <LoadingState />;

  const isPlaying = spotifyData?.isPlaying || false;
  const hasData =
    spotifyData && (spotifyData.title || spotifyData.wasRecentlyPlayed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Header
          isPlaying={isPlaying}
          wasRecentlyPlayed={spotifyData?.wasRecentlyPlayed}
        />
        {hasData && spotifyData ? (
          <PlayerCard
            spotifyData={spotifyData}
            isPlaying={isPlaying}
            progressPercentage={progressPercentage}
            formatTime={formatTime}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default Spotify;
