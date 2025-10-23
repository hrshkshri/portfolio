import React from "react";
import { skillsData } from "../shared/constant";

const Skills: React.FC = () => {
    return (
        <div className="py-20 px-6 lg:px-20 relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium">
                        🚀 Technical Expertise
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-neutral-200 font-bold mt-6 mb-4">
                        Skills I Possess
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Crafting exceptional experiences with modern technologies
                    </p>
                </div>

                <div className="grid gap-6">
                    {skillsData.map((skillCategory, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <div className="flex-shrink-0">
                                    <h3 className="text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                                        {skillCategory.category}
                                    </h3>
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-4">
                                        {skillCategory.icons.map((iconData, iconIndex) => (
                                            <div
                                                key={iconIndex}
                                                className="flex items-center justify-center w-14 h-14 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group/icon"
                                            >
                                                <iconData.icon
                                                    className={`${iconData.size} text-amber-300 group-hover/icon:text-amber-400 transition-colors`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
