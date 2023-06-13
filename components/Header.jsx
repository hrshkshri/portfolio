import React from "react";

const Header = () => {
  return (
    <div className="w-full h-full flex justify-between items-center mx-5 my-5 py-5 ">
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg text-neutral-800 font-medium">
          Hi, my name is Harsh Keshari.
        </h2>
        <h1 className="text-5xl text-neutral-900 font-bold">I Code.</h1>
        <p className="text-lg text-neutral-800 font-medium">
          I'm fullstack developer from India.
        </p>
        <button className="bg-amber-400 border border-slate-950 shadow-md shadow-black rounded-full w-1/2 py-2 transition ease-in-out delay-150 hover:-translate-x-1 hover:-translate-y-1 duration-300">
          Say Hello
        </button>
      </div>
      <div>photo</div>
    </div>
  );
};

export default Header;
