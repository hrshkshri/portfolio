import React from "react";
import Image from "next/image";
import Container from "./shared/Container";

const Home = () => {
  return (
    <Container activeRoute={"home"}>
      <div className="w-full h-full flex justify-between items-center mx-5 my-5 py-5">
        <div className="flex flex-col justify-center space-y-2">
          <h2 className="text-lg text-neutral-800 font-medium mb-2 font-Work">
            Hi, my name is <span className="font-semibold">Harsh Keshari</span>.
          </h2>
          <h1 className="text-5xl text-neutral-900 font-bold font-Rampart">
            I Code.
          </h1>
          <p className="text-lg text-neutral-600 font-medium mt-2 font-Work">
            I'm a full-stack developer from India.
          </p>
          <div className="relative">
            <button className="bg-amber-300 border border-slate-950 shadow-sm shadow-black rounded-full w-1/2 py-2 transition ease-in-out delay-150 hover:-translate-x-1 hover:-translate-y-1 duration-300">
              <p className="text-sm text-neutral-800 font-medium">Say Hello</p>
            </button>
            <div className="bg-black rounded-full w-1/2 absolute inset-0 z-[-1]"></div>
          </div>
        </div>
        <div className="">
          <Image src="/Img/hrshkshri.png" alt="Logo" width={500} height={500} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
