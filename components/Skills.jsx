import React from "react";
import { BsGit } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiPostman, SiMongodb, SiFirebase } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaNodeJs, FaLinux } from "react-icons/fa";
const Skills = () => {
    return (
        <div className="text-neutral-50" >
            <h1 className="text-4xl text-neutral-300 font-medium font-Work p-5 m-5 items-center text-center">Skills I Possess</h1>
            <div className="grid lg:grid-cols-5 sm:max-lg:grid-cols-3 min-[320px]:max-sm:grid-cols-2 gap-4 grid-flow-row auto-rows-max m-5">
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <TbBrandCpp className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <AiFillHtml5 className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <IoLogoCss3 className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <SiJavascript className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <SiTypescript className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <FaReact className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <TbBrandNextjs className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <SiTailwindcss className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <FaNodeJs className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <SiExpress className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <SiPostman className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <SiMongodb className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <SiFirebase className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <BsGit className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
                    <div className="p-5 bg-neutral-900 rounded-lg">
                        <FaLinux className="w-20 h-20 text-amber-300" />
                    </div>
                </div>
                {/* add more skills here */}
            </div>
        </div>
    )
}

export default Skills
