"use client";

import React, { useEffect, useState } from "react";
import { BsCalendar3, BsClock } from "react-icons/bs";
import { Sparkles, Mail, Video, Calendar as CalendarIcon, ExternalLink } from "lucide-react";

const Calendar: React.FC = () => {
  const [showCalendly, setShowCalendly] = useState(true);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const switchToCalendly = () => {
    setShowCalendly(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <BsCalendar3 className="w-12 h-12 text-blue-500 animate-pulse" />
              <Sparkles className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-bounce" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Schedule a Meeting
              </h1>
              <p className="text-neutral-400 text-sm flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Available for meetings
              </p>
            </div>
          </div>
        </div>

        {/* Email Contact Section */}
        <div className="mb-8 bg-gradient-to-br from-amber-500/10 to-blue-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-amber-500/20 rounded-xl">
              <Mail className="w-8 h-8 text-amber-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg mb-2">
                Or drop me an email directly
              </h3>
              <p className="text-neutral-400 text-sm mb-3">
                If scheduling doesn't work for you, feel free to reach out via email. I typically respond within 24 hours! 📧
              </p>
              <a
                href="mailto:harshkeshari100@gmail.com"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors group"
              >
                <span>harshkeshari100@gmail.com</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Calendar Platform Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Calendly Card */}
          <div
            onClick={switchToCalendly}
            className={`cursor-pointer bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
              showCalendly
                ? "border-blue-500 shadow-lg shadow-blue-500/20"
                : "border-neutral-700 hover:border-blue-500/50"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                <CalendarIcon className="w-8 h-8 text-blue-400" />
              </div>
              {showCalendly && (
                <div className="px-3 py-1 bg-blue-500/20 rounded-full">
                  <span className="text-blue-400 text-xs font-semibold">
                    Active
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Calendly</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Simple and reliable scheduling trusted by millions worldwide
            </p>
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
              <span>Book via Calendly</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>

          {/* Cal.com Card */}
          <div
            onClick={() => setShowCalendly(false)}
            className={`cursor-pointer bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
              !showCalendly
                ? "border-amber-500 shadow-lg shadow-amber-500/20"
                : "border-neutral-700 hover:border-amber-500/50"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-4 bg-amber-500/10 rounded-2xl group-hover:bg-amber-500/20 transition-colors">
                <CalendarIcon className="w-8 h-8 text-amber-400" />
              </div>
              {!showCalendly && (
                <div className="px-3 py-1 bg-amber-500/20 rounded-full">
                  <span className="text-amber-400 text-xs font-semibold">
                    Active
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Cal.com</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Modern scheduling with powerful features and customization
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
              <span>Book via Cal.com</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Calendar Embed - Switches between Cal.com and Calendly */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl shadow-2xl border border-neutral-700 overflow-hidden relative">
          {/* Animated background effect */}
          <div
            className={`absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl animate-pulse ${
              showCalendly ? "bg-blue-500/5" : "bg-amber-500/5"
            }`}
          ></div>
          <div
            className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse delay-75 ${
              showCalendly ? "bg-blue-400/5" : "bg-amber-400/5"
            }`}
          ></div>

          <div className="relative">
            {!showCalendly ? (
              <iframe
                key="calcom"
                src="https://cal.com/hrshkshri?embed=true&theme=dark"
                width="100%"
                height="600px"
                allow="camera; microphone; autoplay; display-capture; clipboard-write"
                className="transition-opacity duration-300"
                style={{ border: "none" }}
              ></iframe>
            ) : (
              <iframe
                key="calendly"
                src="https://calendly.com/hrshkshri?background_color=000000&text_color=ffffff&primary_color=3b82f6&hide_landing_page_details=1&hide_gdpr_banner=1"
                width="100%"
                height="700px"
                frameBorder="0"
                className="transition-opacity duration-300"
                style={{ border: "none", background: "#000000" }}
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
