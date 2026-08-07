import React, { memo } from 'react';
import NavLink from './NavLink';
import { navLinks } from '../shared/constant';

interface MobNavProps {
  activeRoute: string;
}

const MobNav: React.FC<MobNavProps> = ({ activeRoute }) => {
  // pointer-events-none on the wrapper so the transparent gutter around the
  // floating bar doesn't swallow taps on content underneath it.
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none md:hidden">
      <div className="pointer-events-auto mx-auto flex max-w-sm items-center justify-between gap-1 rounded-full border border-neutral-700/50 bg-neutral-900/80 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            href={link.href}
            activeRoute={activeRoute}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
    </nav>
  );
};

export default memo(MobNav);
