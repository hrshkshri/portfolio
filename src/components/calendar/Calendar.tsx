"use client";

import React from "react";
import Header from "./Header";
import EmailContactSection from "./EmailContactSection";
import CalendarEmbed from "./CalendarEmbed";

const Calendar: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        <EmailContactSection />
        <CalendarEmbed />
      </div>
    </div>
  );
};

export default Calendar;
