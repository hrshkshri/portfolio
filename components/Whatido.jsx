import React from "react";
import Container from "./shared/Container";
import { AiFillDatabase } from "react-icons/ai";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

const Whatido = () => {
  const items = [
    {
      logo: <BsGlobeCentralSouthAsia className="w-20 h-20 text-amber-400" />,
      heading: "Web Development",
      content: "Constantly exploring new creative avenues, pushing the boundaries of what's possible within the realm of web development. I've got this knack for seamlessly bringing together front-end and back-end technologies.",
      btnName: (
        <div className="flex space-x-2 justify-between">
          <p>See my Work</p> <MdKeyboardDoubleArrowRight className="w-8 h-8 hover:text-amber-500" />
        </div>
      ),
      link: "/mywork"
    },
    {
      logo: <AiFillDatabase className="w-20 h-20 text-amber-400" />,
      heading: "Data Structure & Algorithm",
      content:
        "My secret weapons in the coding realm. I dive into the depths of DSA with an insatiable curiosity. From conquering complex challenges to optimizing code for maximum efficiency, I thrive on the thrill of unraveling puzzles and crafting elegant solutions.",
      btnName: (
        <div className="flex space-x-2 justify-between">
          <p>Explore</p> <MdKeyboardDoubleArrowRight className="w-8 h-8 hover:text-amber-500" />
        </div>
      ),
      link: "https://leetcode.com/hrshkshri/"
    },
  ];

  return (
    <Container activeRoute={"Whatido"}>
      <div className="grid md:grid-cols-2 min-[320px]:max-md:grid-cols-1 gap-5 grid-flow-row auto-rows-max m-5 text-white place-content-center min-h-screen">
        {items.map((item, index) => (
          <div className="flex flex-col space-y-3 bg-neutral-900 rounded-lg p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-300"
            key={index}>
            {item.logo}
            <h2 className="text-3xl text-amber-50 font-bold font-san">{item.heading}</h2>
            <p className="font-sans text-lg text-neutral-300 font-semibold">{item.content}</p>
            <Link href={item.link}>{item.btnName}</Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Whatido;
