import React from "react";
import Container from "./shared/Container";
import ParticleBackground from "./shared/Particle/ParticleBackground";
import { AiFillDatabase } from "react-icons/ai";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

const Whatido = () => {
  const items = [
    {
      logo: <BsGlobeCentralSouthAsia className="w-20 h-20 text-neutral-50" />,
      heading: "Web Development",
      content: "Lorem ipsum dolor sit amet, consectetur ao eiusmod tempor incididunt ut labore et dolore magna aliquao eiusmod tempor incididunt ut labore et dolore magna aliquadipiscing elit.",
      btnName: (
        <div className="flex space-x-2 justify-between">
          <p>See my Work</p> <MdKeyboardDoubleArrowRight className="w-8 h-8 hover:text-amber-500" />
        </div>
      ),
      link: ""
    },
    {
      logo: <AiFillDatabase className="w-20 h-20 text-neutral-50" />,
      heading: "Data Structure & Algorithm",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliquao eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btnName: (
        <div className="flex space-x-2 justify-between">
          <p>Explore</p> <MdKeyboardDoubleArrowRight className="w-8 h-8 hover:text-amber-500" />
        </div>
      ),
      link: ""
    },
  ];

  return (
    <Container activeRoute={"Whatido"}>
      {/* <ParticleBackground /> */}
      <div className="grid md:grid-cols-2 min-[320px]:max-md:grid-cols-1 gap-4 grid-flow-row auto-rows-max m-5 text-white">
        {items.map((item, index) => (
          <div className="flex flex-col space-y-3 bg-neutral-900 rounded-lg p-5" key={index}>
            {item.logo}
            <h2 className="text-3xl text-neutral-300 font-medium font-Work">{item.heading}</h2>
            <p className="font-sans text-lg font-semibold">{item.content}</p>
            <Link href={item.link}>{item.btnName}</Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Whatido;
