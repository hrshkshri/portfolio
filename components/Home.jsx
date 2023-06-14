import React from "react";
import Image from "next/image";
import Container from "./shared/Container";
import ParticleBackground from "./shared/Particle/ParticleBackground";

const Home = () => {
  return (
    <Container activeRoute={"home"}>
      {/* <ParticleBackground /> */}
      <div className="grid place-content-center" >
        <div className="w-full h-full flex flex-col justify-center space-y-2 p-10 text-white relative">
          <h2 className="text-xl text-neutral-400 font-medium font-Work">
            Hi, I'm{" "}
            <span className="text-2xl font-semibold text-amber-100 drop-shadow-md">
              Harsh Keshari
            </span>
            .
          </h2>
          <div className="flex space-x-1 items-center">
            <h1 className="text-9xl text-amber-200 font-bold font-Rampart ">
              I Code.
            </h1>
            <Image
              className="rounded-medium"
              src="/Img/2.svg"
              alt="Logo"
              width={300}
              height={300}
            />
          </div>
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
      </div>
    </Container>
  );
};

export default Home;
