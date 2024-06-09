import React from "react";
import { BsGit } from "react-icons/bs";
import { TbBrandCpp, TbBrandNextjs, TbSql } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiPostman, SiMongodb, SiFirebase, SiGo, SiAngular, SiPostgresql, SiMysql } from "react-icons/si";
import { FaReact, FaNodeJs, FaLinux } from "react-icons/fa";

const skillsData = [
    {
        category: "Languages",
        icons: [
            { icon: TbBrandCpp, size: "w-5 h-5" },
            { icon: SiJavascript, size: "w-5 h-5" },
            { icon: SiTypescript, size: "w-5 h-5" },
            { icon: SiGo, size: "w-8 h-8" },
            { icon: TbSql, size: "w-7 h-7" },
        ],
    },
    {
        category: "Libraries/Frameworks",
        icons: [
            { icon: SiTailwindcss, size: "w-5 h-5" },
            { icon: FaReact, size: "w-5 h-5" },
            { icon: SiAngular, size: "w-5 h-5" },
            { icon: TbBrandNextjs, size: "w-5 h-5" },
            { icon: FaNodeJs, size: "w-5 h-5" },
            { icon: SiExpress, size: "w-5 h-5" },
        ],
    },
    {
        category: "Databases",
        icons: [
            { icon: SiMongodb, size: "w-5 h-5" },
            { icon: SiPostgresql, size: "w-5 h-5" },
            { icon: SiMysql, size: "w-7 h-7" },
        ],
    },
    {
        category: "Tools/Technologies",
        icons: [
            { icon: SiPostman, size: "w-5 h-5" },
            { icon: SiFirebase, size: "w-5 h-5" },
            { icon: BsGit, size: "w-5 h-5" },
            { icon: FaLinux, size: "w-5 h-5" },
        ],
    },
];

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
