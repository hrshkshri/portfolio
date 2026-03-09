import React from "react";
import ProfileCard from "./cards/ProfileCard";
import ResumeCard from "./cards/ResumeCard";
import CalendarCard from "./cards/CalendarCard";
import GitHubActivityCard from "./cards/GitHubActivityCard";

const CardsGrid: React.FC = () => {
  return (
    <div className="py-16 px-8 md:px-14 lg:px-16 border-t border-neutral-900">
      <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-10">
        Links
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ProfileCard />
        <GitHubActivityCard />
        <CalendarCard />
        <ResumeCard />
      </div>
    </div>
  );
};

export default CardsGrid;
