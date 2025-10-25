import React from "react";
import { Music2 } from "lucide-react";
import { SiSpotify } from "react-icons/si";

const EmptyState: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-12 shadow-2xl border border-neutral-700 mb-6 text-center">
      <Music2 className="w-24 h-24 text-neutral-600 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-white mb-3">
        Not listening to anything right now
      </h3>
      <p className="text-neutral-400 mb-6">
        Taking a break from music, but I'll be back soon! 🎧
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
  );
};

export default EmptyState;
