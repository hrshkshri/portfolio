"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import EmailContactSection from "./EmailContactSection";
import CalendarPlatformCards from "./CalendarPlatformCards";
import CalendarEmbed from "./CalendarEmbed";

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

  const switchToCalendly = () => setShowCalendly(true);
  const switchToCalCom = () => setShowCalendly(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        <EmailContactSection />
        <CalendarPlatformCards
          showCalendly={showCalendly}
          switchToCalendly={switchToCalendly}
          switchToCalCom={switchToCalCom}
        />
        <CalendarEmbed showCalendly={showCalendly} />
      </div>
    </div>
  );
};

export default Calendar;
