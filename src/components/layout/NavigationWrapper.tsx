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
    <div className="flex min-h-[100svh]">
      {/* Desktop Sidebar - hidden on mobile, reduced width */}
      <aside
        aria-label="Primary"
        className="hidden md:flex md:w-48 md:flex-col md:fixed md:inset-y-0 bg-neutral-900/50 backdrop-blur-sm border-r border-neutral-800"
      >
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <div className="flex-1 py-8">
            <LeftSidebar activeRoute={pathname} />
          </div>

          {/* Footer section in sidebar */}
          <div className="p-6 border-t border-neutral-800">
            <p className="text-xs text-neutral-400">© 2026 Harsh Keshari</p>
          </div>
        </div>
      </aside>

      {/* Main Content - with left margin on desktop to account for sidebar */}
      {/* min-w-0: a flex item defaults to min-width:auto, so any wide descendant
          makes <main> grow past the viewport instead of shrinking — which turns a
          local overflow into a page-wide horizontal scroll. */}
      {/* No bottom padding: the mobile bar floats *over* the content, so reserving
          a strip here would expose the body gradient under each full-bleed page.
          Pages add their own bottom clearance instead. */}
      <main id="main-content" className="flex-1 min-w-0 md:ml-48">
        {children}
      </main>

      {/* Mobile Bottom Navigation - hidden on desktop */}
      <MobNav activeRoute={pathname} />
    </div>
  );
}
