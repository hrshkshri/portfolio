import React from "react";
import Link from "next/link";
import { BsCalendar3 } from "react-icons/bs";

const CalendarCard: React.FC = () => {
  return (
    <Link
      href="/calendar"
      className="group border border-neutral-800 rounded-xl p-5 flex flex-col justify-between gap-8 hover:border-neutral-700 transition-colors duration-200 bg-neutral-950/40"
    >
      <BsCalendar3 className="w-6 h-6 text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200" />

      <div>
        <p className="font-semibold text-neutral-200 mb-1">Schedule</p>
        <p className="text-neutral-600 text-xs">Book a meeting</p>
      </div>
    </Link>
  );
};

export default CalendarCard;
