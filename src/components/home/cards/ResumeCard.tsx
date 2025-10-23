import React from "react";
import Link from "next/link";
import { BsFileEarmarkText } from "react-icons/bs";
import { resumeLink } from "@/components/shared/constant";

const ResumeCard: React.FC = () => {
    return (
        <Link
            href={resumeLink}
            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-2 group"
        >
            <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                <BsFileEarmarkText className="w-7 h-7 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>

            <div>
                <p className="font-bold text-2xl text-neutral-200 mb-2">Resume</p>
                <p className="text-neutral-500 text-sm">View my credentials</p>
            </div>
        </Link>
    );
};

export default ResumeCard;
