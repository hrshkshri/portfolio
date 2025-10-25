import React from "react";
import { Calendar as CalendarIcon, ExternalLink } from "lucide-react";

interface CalendarPlatformCardsProps {
  showCalendly: boolean;
  switchToCalendly: () => void;
  switchToCalCom: () => void;
}

const CalendarPlatformCards: React.FC<CalendarPlatformCardsProps> = ({
  showCalendly,
  switchToCalendly,
  switchToCalCom,
}) => {
  return (
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
        onClick={switchToCalCom}
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
  );
};

export default CalendarPlatformCards;
