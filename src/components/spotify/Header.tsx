import React from "react";
import { SiSpotify } from "react-icons/si";
import { Sparkles } from "lucide-react";

interface HeaderProps {
  isPlaying: boolean;
  wasRecentlyPlayed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isPlaying, wasRecentlyPlayed }) => {
  return (
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
              : wasRecentlyPlayed
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
              : wasRecentlyPlayed
              ? "Recently Played"
              : "Offline"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
