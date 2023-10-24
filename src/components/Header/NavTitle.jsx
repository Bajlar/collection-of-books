import React, { useState } from 'react';
import NavItem from './navItem';
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

const NavTitle = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden cursor-pointer"
      >
        <span className="text-2xl">
          {isOpen ? <HiBars3BottomRight /> : <HiXMark />}
        </span>
      </div>
      <div
        className={`md:flex gap-6 font-medium ${isOpen ? "hidden" : "block"}`}
      >
        {navItems.map((navItem) => (
          <NavItem key={navItem.id} navItem={navItem}></NavItem>
        ))}
      </div>
    </div>
  );
};

export default NavTitle;