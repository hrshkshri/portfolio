import React from "react";
import ProfileCard from "./cards/ProfileCard";
import ResumeCard from "./cards/ResumeCard";
import CalendarCard from "./cards/CalendarCard";
import GitHubActivityCard from "./cards/GitHubActivityCard";
import TwitterCard from "./cards/TwitterCard";

const CardsGrid: React.FC = () => {
  return (
    <div className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium">
            📫 Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl text-neutral-200 font-bold mt-6">
            Get to Know Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          <ProfileCard />
          <ResumeCard />
          <CalendarCard />
          <GitHubActivityCard />
          <TwitterCard />
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
