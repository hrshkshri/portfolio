import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ href, activeRoute, icon: Icon, label }) => {
  const isActive = activeRoute === href;

  return (
    <Link
      href={href}
      className={`flex items-center py-2 px-4 mx-2 font-medium transition-colors ${isActive ? 'text-white' : 'text-neutral-400 hover:text-amber-100'
        }`}
      aria-label={label}
    >
      <Icon className="w-5 h-5 mx-2" aria-hidden="true" />
      <span className="min-[320px]:max-lg:hidden">{label}</span>
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  activeRoute: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;
