import React from "react";
import Image from "next/image";
import Container from "./shared/Container";
import ParticleBackground from "./shared/Particle/ParticleBackground";

const Home = () => {
  return (
    <Container activeRoute={"home"}>
      {/* <ParticleBackground /> */}
      <div className="w-full h-full flex justify-between items-center p-10 text-white relative">
        <div className="flex flex-col justify-center space-y-2">
          <h2 className="text-xl text-neutral-400 font-medium mb-2 font-Work">
            Hi, I'm{" "}
            <span className="text-2xl font-semibold text-amber-100 drop-shadow-md">
              Harsh Keshari
            </span>
            .
          </h2>
          <h1 className="text-7xl text-amber-200 font-bold font-Rampart ">
            I Code.
          </h1>
          <p className="text-xl text-neutral-300 font-medium mt-2 font-Work">
            A full-stack developer from India.
          </p>
          <div className="relative mt-2">
            <button className="bg-[#ffb400] shadow-sm shadow-gray-50 rounded-full w-1/2 py-2 transition ease-in-out delay-150 hover:-translate-x-1 hover:-translate-y-1 duration-300">
              <p className="text-md text-neutral-900 font-semibold">
                Say Hello
              </p>
            </button>
            <div className="bg-gray-100 rounded-full w-1/2 absolute inset-0 z-[-1]"></div>
          </div>
        </div>
        <div className="">
          <Image
            className="rounded-medium"
            src="/Img/2.svg"
            alt="Logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
