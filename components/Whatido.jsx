import React from "react";
import WhatIDo from "./shared/WhatIDo";

const Whatido = () => {
  const items = [
    {
      logo: "logo1.png",
      heading: "Service 1",
      content: "Lorem ipsum dolor sit amet, consectetur ao eiusmod tempor incididunt ut labore et dolore magna aliquao eiusmod tempor incididunt ut labore et dolore magna aliquadipiscing elit.",
      btnName: "Learn More",
    },
    {
      logo: "logo2.png",
      heading: "Service 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliquao eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btnName: "Explore",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <h1 className="text-4xl text-neutral-900 font-bold font-Work p-5">
        What I Do.
      </h1>
      <div className="flex justify-between">
        {items.map((item, index) => (
          <WhatIDo
            key={index}
            logo={item.logo}
            heading={item.heading}
            content={item.content}
            btnName={item.btnName}
          />
        ))}
      </div>
    </div>
  );
};

export default Whatido;
