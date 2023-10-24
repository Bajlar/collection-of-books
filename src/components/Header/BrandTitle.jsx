import React from 'react';
import { HiBolt } from 'react-icons/hi2';
import { Link } from "react-router-dom";

const BrandTitle = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="text-blue-700 text-2xl">
        <HiBolt />
      </div>
      <h2 className="text-xl font-bold text-gray-800">
        nestPage
      </h2>
    </Link>
  );
};

export default BrandTitle;