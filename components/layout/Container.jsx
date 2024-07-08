"use client";
import { usePathname } from 'next/navigation'
import Footer from "../shared/Footer";
import LeftSidebar from "./LeftSidebar";
import MobNav from "./MobNav";

const Container = ({ children }) => {
  const activeRoute = usePathname();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-full overflow-hidden">
        <div className="hidden sm:flex sm:flex-col md:w-1/6 bg-black text-neutral-400">
          <LeftSidebar activeRoute={activeRoute} />
        </div>
        <div className="flex flex-col w-full h-full overflow-y-auto bg-neutral-950">
          {children}
          <Footer />
        </div>
      </div>
      <MobNav activeRoute={activeRoute} className="fixed bottom-0 w-full" />
    </div>
  );
};

export default Container;
