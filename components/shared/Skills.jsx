import React from "react";
import { BsGit } from "react-icons/bs";
import { TbBrandCpp, TbBrandNextjs, TbSql } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiPostman, SiMongodb, SiFirebase, SiGo, SiAngular, SiPostgresql, SiMysql } from "react-icons/si";
import { FaReact, FaNodeJs, FaLinux } from "react-icons/fa";
const Skills = () => {
    return (
        <div className="text-neutral-50" >
            <h1 className="text-4xl text-neutral-300 font-medium font-Work p-5 m-5 items-center text-center">Skills I Possess</h1>

            <div className="bg-neutral-900 rounded-md px-5 py-5 flex flex-col">
                <div className="flex flex-wrap space-x-3 items-center">
                    <div className="font-bold text-xl font-serif">
                        Languages:
                    </div>
                    <TbBrandCpp className="w-5 h-5 text-amber-300" />
                    <SiJavascript className="w-5 h-5 text-amber-300" />
                    <SiTypescript className="w-5 h-5 text-amber-300" />
                    <SiGo className="w-8 h-8 text-amber-300" />
                    <TbSql className="w-7 h-7 text-amber-300" />
                </div>

                <div className="flex flex-wrap space-x-3 items-center">
                    <div className="font-bold text-xl font-serif">
                        Libraries/Frameworks:
                    </div>
                    <SiTailwindcss className="w-5 h-5 text-amber-300" />
                    <FaReact className="w-5 h-5 text-amber-300" />
                    <SiAngular className="w-5 h-5 text-amber-300" />
                    <TbBrandNextjs className="w-5 h-5 text-amber-300" />
                    <FaNodeJs className="w-5 h-5 text-amber-300" />
                    <SiExpress className="w-5 h-5 text-amber-300" />
                </div>

                <div className="flex flex-wrap space-x-3 items-center">
                    <div className="font-bold text-xl font-serif">
                        Databases:
                    </div>
                    <SiMongodb className="w-5 h-5 text-amber-300" />
                    <SiPostgresql className="w-5 h-5 text-amber-300" />
                    <SiMysql className="w-7 h-7 text-amber-300" />
                </div>

                <div className="flex flex-wrap space-x-3 items-center">
                    <div className="font-bold text-xl font-serif">
                        Tools/Technologies:
                    </div>
                    <SiPostman className="w-5 h-5 text-amber-300" />
                    <SiFirebase className="w-5 h-5 text-amber-300" />
                    <BsGit className="w-5 h-5 text-amber-300" />
                    <FaLinux className="w-5 h-5 text-amber-300" />
                </div>

            </div>
        </div>
    )
}

export default Skills
