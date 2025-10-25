import React from "react";
import Greeting from "./Greeting";
import Skills from "./Skills";
import CardGrid from "./CardGrid";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Greeting />
      <CardGrid />
      <Skills />
    </div>
  );
};

export default Home;
