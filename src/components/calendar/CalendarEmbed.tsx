import React from "react";

interface CalendarEmbedProps {
  showCalendly: boolean;
}

const CalendarEmbed: React.FC<CalendarEmbedProps> = ({ showCalendly }) => {
  return (
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
  );
};

export default CalendarEmbed;
