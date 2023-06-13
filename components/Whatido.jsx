import React from "react";
import WhatIDo from "./shared/WhatIDo";

const Whatido = () => {
  return (
    
    <div className="flex flex-col justify-center items-center space-y-2">
      <h1 className="text-4xl text-neutral-900 font-bold font-Work p-5">
        What I Do.
      </h1>
      <div className="flex justify-between">
        <WhatIDo />
        <WhatIDo />
      </div>
    </div>
  );
};

export default Whatido;
