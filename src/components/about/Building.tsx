import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Building: React.FC = () => {
  return (
    <div className="mb-12 border border-neutral-800 rounded-2xl p-6 bg-neutral-900/40">
      <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-4">
        Currently Building
      </p>

      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <h2 className="text-xl font-semibold text-white">Crelyzor</h2>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-lg">
            An AI-native workspace where your contacts, meetings, and tasks are all connected — and actually talk to each other. Building from scratch as a solo founder.
          </p>
          <div className="flex items-center gap-2 flex-wrap pt-1">
            {["Next.js", "Node.js", "PostgreSQL", "AI"].map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-full border border-neutral-700 text-neutral-500"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <a
          href="https://www.crelyzor.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 transition-colors shrink-0"
        >
          crelyzor.app
          <FiExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default Building;
