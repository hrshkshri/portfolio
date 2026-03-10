import React from "react";
import { skillsData } from "../shared/constant";

const Skills: React.FC = () => {
  return (
    <div className="py-16 px-8 md:px-14 lg:px-16 border-t border-neutral-900">
      <div className="max-w-3xl">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-10">
          Stack
        </p>

        <div className="flex flex-wrap gap-5">
          {skillsData.flatMap((skillCategory) => skillCategory.icons).map((iconData, index) => (
            <iconData.icon
              key={index}
              className={`${iconData.size} text-neutral-500 hover:text-amber-400 transition-colors duration-200 cursor-default`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
