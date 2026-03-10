"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { spotifyService, SpotifyData } from "@/lib/api";

const SpotifyMiniWidget: React.FC = () => {
  const [data, setData] = useState<SpotifyData | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await spotifyService.getNowPlaying();
        setData(result);
      } catch {
        // silent — widget is non-critical
      }
    };

    fetch();
    const interval = setInterval(fetch, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  const isPlaying = data.isPlaying;

  return (
    <Link
      href="/spotify"
      className="group block rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 hover:border-green-500/30 hover:bg-neutral-800/60 transition-all duration-300"
    >
      <div className="flex items-center gap-2.5 min-w-0">
        {/* Album art */}
        {data.albumImageUrl ? (
          <img
            src={data.albumImageUrl}
            alt={data.album}
            className="w-9 h-9 rounded-md object-cover shrink-0 shadow-md"
          />
        ) : (
          <div className="w-9 h-9 rounded-md bg-neutral-800 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-500">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
        )}

        {/* Text */}
        <div className="min-w-0 flex-1">
          <p className="text-xs text-neutral-200 font-medium truncate leading-tight">
            {data.title}
          </p>
          <p className="text-[11px] text-neutral-500 truncate leading-tight mt-0.5">
            {data.artist}
          </p>
        </div>

        {/* Status dot */}
        <div className="shrink-0">
          {isPlaying ? (
            <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          ) : (
            <span className="block w-2 h-2 rounded-full bg-neutral-600" />
          )}
        </div>
      </div>
    </Link>
  );
};

export default SpotifyMiniWidget;
