import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LeftHomePart = () => {
  return (
    <div className="md:w-1/2 mt-4 md:mt-0">
      <p className="badge">On Sale!</p>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        A reader lives a <br className="hidden md:block" /> thousand lives{" "}
        <span className="inline-block text-blue-400">before he dies</span>
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        Books are a uniquely portable magic. Books serve to show a man that
        those original thoughts of his aren’t very new after all. The man who
        does not read good books is no better than the man who can’t.
      </p>
      <div className="mt-4 flex gap-4">
        <Link to="/books" className="btn">
          <div className="inline-flex items-center justify-center w-full h-full">
            <p className="mr-3">Visit Store</p>
            <FaShoppingCart className="w-5 text-gray-100" />
          </div>
        </Link>
        <Link
          className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
          to="/about"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default LeftHomePart;