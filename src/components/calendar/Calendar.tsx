"use client";

import React from "react";
import { FiMail, FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";

const Calendar: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-end bg-black">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      {/* Calendar embed — fills most of the screen */}
      <div className="absolute inset-0 top-0 bottom-[340px] z-0">
        <div className="w-full h-full overflow-hidden">
          <iframe
            src="https://cal.com/hrshkshri?embed=true&theme=dark"
            width="100%"
            height="100%"
            allow="camera; microphone; autoplay; display-capture; clipboard-write"
            style={{ border: "none", opacity: 0.85 }}
          />
        </div>
        {/* Fade bottom of iframe into the page */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Bottom content — mirrors home page */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-12 grid grid-cols-2 items-end gap-8">

        {/* Left */}
        <div className="space-y-5">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
              Get in touch
            </p>
            <h1 className="font-Rampart text-6xl md:text-8xl text-white leading-none">
              Meet.
            </h1>
          </div>

          <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
            Pick a time that works for you — or reach out directly at{" "}
            <a
              href="mailto:harshkeshari100@gmail.com"
              className="text-neutral-200 hover:text-amber-400 transition-colors"
            >
              harshkeshari100@gmail.com
            </a>
          </p>

          <div className="flex items-center gap-6">
            <a
              href="mailto:harshkeshari100@gmail.com"
              className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-200 flex items-center gap-2"
            >
              <FiMail className="w-4 h-4" />
              Send Email
            </a>
            <a
              href="/about"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              My Work →
            </a>
          </div>
        </div>

        {/* Right: contact links */}
        <div className="flex flex-col gap-8 items-end text-right">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-3">Contact</p>
            <div className="flex items-center gap-4">
              {[
                { href: "mailto:harshkeshari100@gmail.com", icon: FiMail },
                { href: "https://github.com/hrshkshri", icon: AiFillGithub },
                { href: "https://linkedin.com/in/hrshkshri", icon: BsLinkedin },
                { href: "https://twitter.com/hrshkshri", icon: BsTwitterX },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-200"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Calendar;
