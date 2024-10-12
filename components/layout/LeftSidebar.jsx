import React, { memo } from 'react';
import NavLink from './NavLink';
import { navLinks } from '../shared/constant';
import PropTypes from 'prop-types';

const LeftSidebar = ({ activeRoute }) => {
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

LeftSidebar.propTypes = {
  activeRoute: PropTypes.string.isRequired,
};

export default memo(LeftSidebar);
