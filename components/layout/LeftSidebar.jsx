import React from 'react';
import NavLink from './NavLink';
import { navLinks } from '../shared/constant';

const LeftSidebar = ({ activeRoute }) => {
  return (
    <div className="flex flex-col justify-between my-5">
      {navLinks.map((link, index) => (
        <NavLink key={index} href={link.href} activeRoute={activeRoute} icon={link.icon} label={link.label} />
      ))}
    </div>
  );
};

export default LeftSidebar;