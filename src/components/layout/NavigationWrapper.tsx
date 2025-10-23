"use client";

import { usePathname } from "next/navigation";
import LeftSidebar from "./LeftSidebar";
import MobNav from "./MobNav";

interface NavigationWrapperProps {
  children: React.ReactNode;
}

export default function NavigationWrapper({ children }: NavigationWrapperProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar - hidden on mobile, reduced width */}
      <aside className="hidden md:flex md:w-48 md:flex-col md:fixed md:inset-y-0 bg-neutral-900/50 backdrop-blur-sm border-r border-neutral-800">
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <div className="flex-1 py-8">
            <LeftSidebar activeRoute={pathname} />
          </div>

          {/* Footer section in sidebar */}
          <div className="p-6 border-t border-neutral-800">
            <p className="text-xs text-neutral-500">© 2024 Harsh Keshari</p>
          </div>
        </div>
      </aside>

      {/* Main Content - with left margin on desktop to account for sidebar */}
      <main className="flex-1 md:ml-48 pb-20 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Navigation - hidden on desktop */}
      <MobNav activeRoute={pathname} />
    </div>
  );
}
