import React from "react";
import { AiFillGithub } from "react-icons/ai";

const LoadingState: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8 flex items-center justify-center">
      <div className="text-center">
        <AiFillGithub className="w-16 h-16 text-green-500 animate-pulse mx-auto mb-4" />
        <p className="text-neutral-400 text-lg">Loading GitHub activity...</p>
      </div>
    </div>
  );
};

export default LoadingState;
