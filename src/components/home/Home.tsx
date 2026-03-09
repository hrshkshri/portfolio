import React from "react";
import Greeting from "./Greeting";
import Skills from "./Skills";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Greeting />
      <Skills />
    </div>
  );
};

export default Home;
