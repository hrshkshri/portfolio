import React from "react";

const CalendarEmbed: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl shadow-2xl border border-neutral-700 overflow-hidden relative">
      {/* Animated background effect */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl animate-pulse bg-amber-500/5"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse delay-75 bg-amber-400/5"
      ></div>

      <div className="relative">
        <iframe
          key="calcom"
          src="https://cal.com/hrshkshri?embed=true&theme=dark"
          width="100%"
          height="600px"
          allow="camera; microphone; autoplay; display-capture; clipboard-write"
          className="transition-opacity duration-300"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default CalendarEmbed;
