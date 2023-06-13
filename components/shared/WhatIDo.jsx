import React from "react";

const WhatIDo = ({ logo, heading, content, btnName }) => {
  return (
    <div className="relative">
      <div className="flex flex-col space-y-4 m-5 p-5 bg-stone-50 border border-slate-950 shadow-sm shadow-black rounded-lg transition ease-in-out delay-150 hover:-translate-x-1 hover:-translate-y-1 duration-300">
        <div>{logo}</div>
        <div>
          <h3>{heading}</h3>
          <p>{content}</p>
        </div>
        <div>{btnName}</div>
      </div>
      <div className="bg-black m-5 p-5 rounded-lg absolute inset-0 z-[-1]"></div>
    </div>
  );
};

export default WhatIDo;
