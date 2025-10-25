import React from "react";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

const TwitterCard: React.FC = () => {
    return (
        <Link
            href="/twitter"
            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-2 group"
        >
            <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <BsTwitter className="w-7 h-7 text-green-400 group-hover:scale-110 transition-transform" />
            </div>

            <div>
                <p className="font-bold text-2xl text-neutral-200 mb-2">Twitter</p>
                <p className="text-neutral-500 text-sm">My latest tweets</p>
            </div>
        </Link>
    );
};

export default TwitterCard;
