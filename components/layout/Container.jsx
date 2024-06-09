"use client";
import { usePathname } from 'next/navigation'
import Footer from "../shared/Footer";
import LeftSidebar from "./LeftSidebar";
import MobNav from "./MobNav";

const Container = ({ children }) => {
  const activeRoute = usePathname()

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-full flex overflow-hidden">
        <div className="bg-black text-neutral-400 hidden md:h-full md:w-1/6 md:flex md:flex-col md:items-center md:justify-between">
          <LeftSidebar activeRoute={activeRoute} />
        </div>
        <div className="w-full h-full flex flex-col overflow-y-auto scrollbar-none bg-neutral-950">
          {children}
          <Footer />
        </div>
      </div>
      <MobNav activeRoute={activeRoute} />
    </div>
  );
};

export default Container;
