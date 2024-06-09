import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import NavLink from './NavLink';

const links = [
  { href: '/home', icon: AiOutlineHome, label: 'Home' },
  { href: '/about', icon: BsFillPersonVcardFill, label: 'About' },
];

const LeftSidebar = ({ activeRoute }) => {
  return (
    <div className="flex flex-col justify-between my-5">
      {links.map((link, index) => (
        <NavLink key={index} href={link.href} activeRoute={activeRoute} icon={link.icon} label={link.label} />
      ))}
    </div>
  );
};

export default LeftSidebar;