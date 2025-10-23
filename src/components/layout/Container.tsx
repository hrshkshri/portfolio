"use client";
import { usePathname } from 'next/navigation';
import Footer from "../shared/Footer";
import LeftSidebar from "./LeftSidebar";
import MobNav from "./MobNav";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const activeRoute = usePathname();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for larger screens */}
        <aside className="hidden sm:flex sm:flex-col md:w-1/6 bg-black text-neutral-400">
          <LeftSidebar activeRoute={activeRoute} />
        </aside>

        {/* Main content area */}
        <main className="flex-1 flex flex-col h-full overflow-y-auto bg-neutral-950">
          {children}
          <Footer />
        </main>
      </div>

      {/* Mobile navigation */}
      <MobNav activeRoute={activeRoute} />
    </div>
  );
};

export default Container;
