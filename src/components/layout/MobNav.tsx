import React, { memo } from 'react';
import NavLink from './NavLink';
import { navLinks } from '../shared/constant';

interface MobNavProps {
  activeRoute: string;
}

const MobNav: React.FC<MobNavProps> = ({ activeRoute }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-900/95 backdrop-blur-md px-2 py-3 border-t border-neutral-800 flex justify-around md:hidden z-50 shadow-lg">
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          href={link.href}
          activeRoute={activeRoute}
          icon={link.icon}
          label={link.label}
        />
      ))}
    </nav>
  );
};

export default memo(MobNav);
