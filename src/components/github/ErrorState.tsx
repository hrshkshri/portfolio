"use client";

import React from "react";

const ErrorState: React.FC<{ onRetry?: () => void }> = ({ onRetry }) => {
  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center gap-5 px-6 text-center">
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
          GitHub
        </p>
        <h1 className="text-xl font-semibold text-neutral-100">
          Couldn&apos;t load activity right now.
        </h1>
        <p className="mt-2 text-sm text-neutral-400 max-w-sm">
          The GitHub API is unavailable or rate-limited. My repos are still on{" "}
          <a
            href="https://github.com/hrshkshri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-200 hover:text-amber-400 underline underline-offset-4 transition-colors"
          >
            github.com/hrshkshri
          </a>
          .
        </p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-150"
        >
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
