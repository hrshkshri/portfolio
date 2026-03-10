import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface NavLinkProps {
  href: string;
  activeRoute: string;
  icon: IconType;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, activeRoute, icon: Icon, label }) => {
  const isActive = activeRoute === href;

  return (
    <Link
      href={href}
      className={`flex flex-col md:flex-row items-center justify-center md:justify-start py-3 px-4 mx-2 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? 'text-amber-400 bg-amber-400/10 border-b-2 md:border-b-0 border-l-0 md:border-l-2 border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.15)]'
          : 'text-neutral-500 hover:text-amber-400 hover:bg-neutral-800/50'
      }`}
      aria-label={label}
    >
      <Icon
        className={`w-6 h-6 md:w-5 md:h-5 md:mr-3 transition-all duration-300 ${isActive ? 'drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]' : ''}`}
        aria-hidden="true"
      />
      <span className="text-xs md:text-base mt-1 md:mt-0">{label}</span>
    </Link>
  );
};

export default NavLink;
