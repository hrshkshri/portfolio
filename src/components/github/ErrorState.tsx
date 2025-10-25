import React from "react";

const ErrorState: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8 flex items-center justify-center">
      <div className="text-center">
        <p className="text-neutral-400 text-lg">Failed to load GitHub data</p>
      </div>
    </div>
  );
};

export default ErrorState;
