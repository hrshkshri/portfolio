import React from "react";
import ProfileCard from "./cards/ProfileCard";
import ResumeCard from "./cards/ResumeCard";
import GithubCard from "./cards/GithubCard";

const CardsGrid = () => {
    return (
        <div className="grid lg:grid-cols-4 min-[320px]:max-lg:grid-cols-2 gap-4 grid-flow-row auto-rows-max text-neutral-200 m-4">
            <ProfileCard />
            <ResumeCard />
            <GithubCard />
        </div>
    );
};

export default CardsGrid;
