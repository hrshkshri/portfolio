import Image from "next/image";
import React from "react";
import Container from "./shared/Container";

const About = () => {
  return (<Container activeRoute={"about"}>
    <div className="grid m-3 place-content-center min-h-screen">
      <div className="flex justify-between space-x-3 text-neutral-200 rounded-md bg-neutral-900 hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
        <div className="p-5">
          <h1 className="text-2xl font-bold font-sans m-1">About Me</h1>
          <p className="font-sans text-neutral-300 text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto quis
            sed repellendus rem molestias, nam dignissimos dolore deleniti ipsa facilis rerum eaque
            blanditiis corrupti at ratione delectus ad dolorem.
          </p>
        </div>
        <div>
          <Image
            className='rounded-md'
            src="/Img/2.svg"
            alt="Logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  </Container>);
};

export default About;
