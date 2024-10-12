import React, { memo } from 'react';
import NavLink from './NavLink';
import { navLinks } from '../shared/constant';
import PropTypes from 'prop-types';

const MobNav = ({ activeRoute }) => {
  return (
    <nav className="fixed bottom-0 w-full bg-neutral-900 p-2 justify-around text-neutral-400 border-t border-gray-700 flex sm:hidden">
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

MobNav.propTypes = {
  activeRoute: PropTypes.string.isRequired,
};

export default memo(MobNav);
