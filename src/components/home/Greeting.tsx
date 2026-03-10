"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { spotifyService, SpotifyData } from "@/lib/api";
import { AiFillGithub } from "react-icons/ai";
import { BsCalendar3, BsFileEarmarkText } from "react-icons/bs";

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
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-end">

      {/* Full bleed photo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Gemini-Generated-Image-from-Photoroom-1-1761154733626.png?width=8000&height=8000&resize=contain"
          alt="Harsh Keshari"
          width={600}
          height={800}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      {/* Gradient overlay — transparent top, dark bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Bottom bar — two columns */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-12 grid grid-cols-2 items-end gap-8">

        {/* Left: main content */}
        <div className="space-y-5">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
              Harsh Keshari
            </p>
            <h1 className="font-Rampart text-6xl md:text-8xl text-white leading-none">
              I Build.
            </h1>
          </div>

          <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
            building{" "}
            <a
              href="https://www.crelyzor.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-200 hover:text-amber-400 transition-colors"
            >
              Crelyzor
            </a>{" "}
            — an AI-native workspace where your contacts, meetings, and tasks are all connected and actually talk to each other.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/about"
              className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="/calendar"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Get In Touch →
            </a>
          </div>

          {track && track.title && (
            <Link
              href="/spotify"
              className="inline-flex items-center gap-2 text-xs text-neutral-600 hover:text-neutral-400 transition-colors group"
            >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${track.isPlaying ? "bg-green-500 animate-pulse" : "bg-neutral-700"}`} />
              <span>
                {track.isPlaying ? "listening to" : "last played"}{" "}
                <span className="text-neutral-400 group-hover:text-neutral-200">{track.title}</span>
                {" "}· {track.artist}
              </span>
            </Link>
          )}
        </div>

        {/* Right: links + stack */}
        <div className="flex flex-col gap-8 items-end text-right">

          {/* Links */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-3">Links</p>
            <div className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "GitHub", href: "/github", icon: AiFillGithub },
                { label: "Schedule", href: "/calendar", icon: BsCalendar3 },
                { label: "Resume", href: "/resume.pdf", icon: BsFileEarmarkText },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-end gap-2 text-xl text-neutral-400 hover:text-neutral-100 transition-colors duration-200"
                >
                  {link.label}
                  {link.icon && <link.icon className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>


        </div>
      </div>

    </div>
  );
};

export default Greeting;
