"use client";

import React, { useEffect, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { RiSparklingFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

const TwitterFeed: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    if (
      !document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <BsTwitter className="w-12 h-12 text-green-500 animate-pulse" />
              <RiSparklingFill className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-bounce" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Twitter Feed
              </h1>
              <a
                href="https://twitter.com/hrshkshri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 text-sm flex items-center gap-2 hover:text-green-400 transition-colors group"
              >
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="group-hover:underline">@hrshkshri</span>
                <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          <a
            href="https://twitter.com/hrshkshri"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-500/50 rounded-xl text-amber-400 hover:text-amber-300 font-medium transition-all flex items-center gap-2 group"
          >
            <span>View Profile</span>
            <FiExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Twitter Timeline */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 border border-neutral-700">
          <a
            className="twitter-timeline"
            data-theme="dark"
            data-chrome="noheader nofooter noborders transparent"
            data-tweet-limit="5"
            href="https://twitter.com/hrshkshri"
          >
            {scriptLoaded
              ? "Loading tweets..."
              : "Initializing Twitter widget..."}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwitterFeed;
