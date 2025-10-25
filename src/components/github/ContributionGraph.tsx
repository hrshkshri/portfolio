import React from "react";
import { FiGitCommit } from "react-icons/fi";

const ContributionGraph: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 md:p-8 border border-neutral-700 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <FiGitCommit className="w-6 h-6 text-green-500" />
          1,850 contributions in the last year
        </h2>
      </div>
      <img
        src={`https://github-readme-activity-graph.vercel.app/graph?username=hrshkshri&theme=github-dark&hide_border=true&bg_color=000000&color=39d353&line=39d353&point=ffffff`}
        alt="GitHub Contribution Graph"
        className="w-full rounded-xl"
      />
    </div>
  );
};

export default ContributionGraph;
