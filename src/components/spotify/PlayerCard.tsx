import React from "react";
import { Music2, Waves, ExternalLink } from "lucide-react";
import { SpotifyData } from "@/lib/api";

interface PlayerCardProps {
  spotifyData: SpotifyData;
  isPlaying: boolean;
  progressPercentage: number;
  formatTime: (ms?: number) => string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  spotifyData,
  isPlaying,
  progressPercentage,
  formatTime,
}) => {
  return (
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
              <span className="text-white text-sm font-medium">Playing</span>
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
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {spotifyData.title}
              </h2>
              <p className="text-2xl text-neutral-300 mb-2">
                {spotifyData.artist}
              </p>
              <p className="text-lg text-neutral-500">{spotifyData.album}</p>
            </div>

            {/* Progress Bar or Recently Played Message */}
            {isPlaying ? (
              <div className="space-y-3">
                <div className="w-full h-3 bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-neutral-400">
                  <span>{formatTime(spotifyData.progress)}</span>
                  <span>{formatTime(spotifyData.duration)}</span>
                </div>
              </div>
            ) : (
              <div className="text-neutral-400 text-base italic py-2">
                Last thing I was vibing to 🎵
              </div>
            )}

            {/* Open in Spotify */}
            <a
              href={spotifyData.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-green-500/30 w-fit text-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Open in Spotify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
