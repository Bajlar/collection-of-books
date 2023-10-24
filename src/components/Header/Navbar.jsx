import React, { useEffect, useState } from 'react';
import BrandTitle from './BrandTitle';
import NavTitle from './NavTitle';


const Navbar = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetch("navItems.json")
      .then((res) => res.json())
      .then((data) => setNavItems(data));
  }, [])

  return (
    <div className="py-4 px-4 md:px-14 flex justify-between items-center bg-white md:bg-gray-100 border">
      <BrandTitle />
      <NavTitle navItems={navItems} />
    </div>
  );
};

export default Navbar;
