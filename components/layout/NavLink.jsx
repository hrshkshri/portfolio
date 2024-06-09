import Link from 'next/link';
import React from 'react';

const NavLink = ({ href, activeRoute, icon: Icon, label }) => {
  return (
    <Link
      href={href}
      className={`flex items-center hover:text-amber-100 ${activeRoute === href ? 'text-white' : ''} font-medium py-2 px-4 mx-2`}
      aria-label={label}
    >
      <Icon className="w-5 h-5 mx-2" />
      <span className="min-[320px]:max-lg:hidden">{label}</span>
    </Link>
  );
};

export default NavLink;