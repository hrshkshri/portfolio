import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import NavLink from './NavLink.jsx';

const links = [
  { href: '/home', icon: AiOutlineHome, label: 'Home' },
  { href: '/about', icon: BsFillPersonVcardFill, label: 'About' },
];

const MobNav = ({ activeRoute }) => {
  return (
    <div className="navbar p-2 justify-around text-neutral-400 border-t border-gray-700 hidden min-[320px]:max-sm:flex">
      {links.map((link, index) => (
        <NavLink key={index} href={link.href} activeRoute={activeRoute} icon={link.icon} label={link.label} />
      ))}
    </div>
  );
};

export default MobNav;