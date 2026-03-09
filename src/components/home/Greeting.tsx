"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { spotifyService, SpotifyData } from "@/lib/api";

const Greeting: React.FC = () => {
  const [track, setTrack] = useState<SpotifyData | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await spotifyService.getNowPlaying();
        setTrack(data);
      } catch {
        // silent
      }
    };
    fetch();
    const interval = setInterval(fetch, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 lg:px-20 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-300 font-light">
              Hi, I'm{" "}
              <span className="block mt-2 text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Harsh
              </span>
            </h2>

            <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold font-Rampart bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
              I Code.
            </h1>
          </div>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Full-stack developer passionate about building exceptional digital
            experiences. I turn ideas into elegant, functional solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/about"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              View My Work
            </a>
            <a
              href="/calendar"
              className="px-8 py-4 bg-neutral-800/50 border border-neutral-700 text-neutral-200 font-semibold rounded-lg hover:bg-neutral-800 hover:border-amber-500/50 transition-all duration-300 inline-flex items-center justify-center"
            >
              Get In Touch
            </a>
          </div>

          {/* Currently listening */}
          {track && track.title && (
            <Link
              href="/spotify"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors duration-200 group"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                  track.isPlaying
                    ? "bg-green-500 animate-pulse"
                    : "bg-neutral-600"
                }`}
              />
              <span>
                {track.isPlaying ? "listening to" : "last played"}{" "}
                <span className="text-neutral-300 group-hover:text-white transition-colors">
                  {track.title}
                </span>{" "}
                · {track.artist}
              </span>
            </Link>
          )}
        </div>

        {/* Right image */}
        <div className="relative lg:order-last order-first">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Decorative glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 via-amber-400/20 to-yellow-500/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>

            {/* Image + badge overlay container */}
            <div className="relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Gemini-Generated-Image-from-Photoroom-1-1761154733626.png?width=8000&height=8000&resize=contain"
                alt="Harsh - Developer Portfolio"
                width={600}
                height={800}
                className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* About me badge — half on image, half outside */}
              <a
                href="/about"
                className="absolute bottom-0 left-6 translate-y-1/2 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 text-white font-medium text-sm hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
              >
                About me →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
