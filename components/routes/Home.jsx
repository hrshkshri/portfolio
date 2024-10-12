import React from "react";
import Greeting from "../home/Greeting";
import CardsGrid from "../home/CardGrid";
import Skills from "../home/Skills";

const Home = () => {
  return (
    <>
      <div className="grid place-content-center min-h-screen">
        <Greeting />
      </div>
      <CardsGrid />
      <Skills />
    </>
  );
};

export default Home;
