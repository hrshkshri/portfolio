import React from "react";
import Greeting from "../home/Greeting";
import CardsGrid from "../home/CardGrid";
import Skills from "../home/Skills";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <Greeting />
      <CardsGrid />
      <Skills />

      {/* Footer section */}
      <footer className="py-12 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-500">
            © 2024 Harsh. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
