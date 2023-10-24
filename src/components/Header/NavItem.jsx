import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ navItem }) => {
  const { name , path} = navItem;

  return (
    <nav>
      <NavLink className={({ isActive }) => isActive ? 'active' : ''} to={path}>
        {name}
      </NavLink>
    </nav>
  );
};

export default NavItem;