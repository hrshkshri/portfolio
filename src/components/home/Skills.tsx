import React from "react";
import { skillsData } from "../shared/constant";

const Skills: React.FC = () => {
  return (
    <div className="py-16 px-8 md:px-14 lg:px-16 border-t border-neutral-900">
      <div className="max-w-3xl">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-10">
          Stack
        </p>

        <div className="space-y-5">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="flex items-start gap-6 md:gap-12">
              <span className="text-xs text-neutral-600 w-32 md:w-40 shrink-0 pt-1 leading-relaxed">
                {skillCategory.category}
              </span>
              <div className="flex flex-wrap gap-4">
                {skillCategory.icons.map((iconData, iconIndex) => (
                  <iconData.icon
                    key={iconIndex}
                    className={`${iconData.size} text-neutral-500 hover:text-amber-400 transition-colors duration-200 cursor-default`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
