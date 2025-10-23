import React, { memo } from 'react';
import NavLink from './NavLink';
import { navLinks } from '../shared/constant';

interface LeftSidebarProps {
  activeRoute: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ activeRoute }) => {
  return (
    <nav className="flex flex-col justify-between my-5">
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

export default memo(LeftSidebar);
