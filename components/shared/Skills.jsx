import React from "react";
import { skillsData } from "./constant";

const Skills = () => {
    return (
        <div className="text-neutral-50">
            <h1 className="text-4xl text-neutral-300 font-medium font-Work p-5 m-5 items-center text-center">
                Skills I Possess
            </h1>
            <div className="bg-neutral-900 rounded-md px-5 py-5 flex flex-col m-5 space-y-4">
                {skillsData.map((skillCategory, index) => (
                    <div key={index} className="flex flex-wrap items-center space-x-3">
                        <div className="font-bold text-xl font-serif">{skillCategory.category}:</div>
                        {skillCategory.icons.map((iconData, iconIndex) => (
                            <iconData.icon key={iconIndex} className={`${iconData.size} text-amber-300`} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
