import React from "react";
import { BsCalendar3 } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="relative">
          <BsCalendar3 className="w-12 h-12 text-blue-500 animate-pulse" />
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
  );
};

export default Header;
