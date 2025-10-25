import React from "react";
import Greeting from "./Greeting";
import CardGrid from "./CardGrid";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Greeting />
      <CardGrid />
    </div>
  );
};

export default Home;
