import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { resumeLink } from "../shared/constant";

const Banner: React.FC = () => {
    return (
        <div className="flex items-center justify-between gap-4 flex-wrap px-5 py-4 rounded-xl border border-neutral-800 bg-neutral-900/40">
            <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <p className="text-sm text-neutral-300">
                    Open to full-time SWE roles
                </p>
            </div>
            <div className="flex items-center gap-3">
                <Link
                    href="mailto:harshkeshari100@gmail.com"
                    className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-amber-400 transition-colors duration-200"
                >
                    <AiOutlineMail className="w-4 h-4" />
                    harshkeshari100@gmail.com
                </Link>
                <Link
                    href={resumeLink}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-700 text-xs text-neutral-400 hover:text-amber-400 hover:border-amber-400/30 transition-all duration-200"
                >
                    Resume
                    <MdArrowOutward className="w-3.5 h-3.5" />
                </Link>
            </div>
        </div>
    );
};

export default Banner;
