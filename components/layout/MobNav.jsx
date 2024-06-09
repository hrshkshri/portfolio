import React from 'react';
import NavLink from './NavLink.jsx';
import { navLinks } from '../shared/constant';

const MobNav = ({ activeRoute }) => {
  return (
    <div className="navbar p-2 justify-around text-neutral-400 border-t border-gray-700 hidden min-[320px]:max-sm:flex">
      {navLinks.map((link, index) => (
        <NavLink key={index} href={link.href} activeRoute={activeRoute} icon={link.icon} label={link.label} />
      ))}
    </div>
  );
};

export default MobNav;