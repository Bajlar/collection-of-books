import React from "react";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
  const { title, subtitle, isbn13, price, image } = book;

  return (
    <Link to={`/book/${isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded-md shadow-lg hover:shadow-2xl">
        <img src={image} alt="" />
        <div className="bg-black px-6 py-4 bg-opacity-70 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 rounded-md flex flex-col">
          <h2 className="font-bold text-lg">{title}</h2>
          <br />
          <p>{subtitle.slice(0, 45)}...</p>
          <br />
          <p className="mt-auto">Price: {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
