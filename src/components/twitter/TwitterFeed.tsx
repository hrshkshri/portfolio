"use client";

import React, { useEffect } from "react";
import { BsTwitter } from "react-icons/bs";
import { RiSparklingFill } from "react-icons/ri";

const TwitterFeed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <BsTwitter className="w-12 h-12 text-green-500 animate-pulse" />
              <RiSparklingFill className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-bounce" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Twitter Feed
              </h1>
              <p className="text-neutral-400 text-sm flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                @hrshkshri
              </p>
            </div>
          </div>
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
            Loading tweets...
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwitterFeed;
