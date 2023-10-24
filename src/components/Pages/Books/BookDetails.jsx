import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const details = useLoaderData();
  const { desc, title, authors, year, price, publisher, rating, image, url } =
    details;
  const [half, setHalf] = useState(true);

  return (
    <div className="container border-2 md:flex mt-10">
      <div className="md:w-1/2 flex justify-center items-center md:mt-0 mt-4">
        <img className="border-2" src={image} alt="" />
      </div>
      <div className="md:w-1/2 py-10 md:pr-20 px-4">
        <p className="badge">BRAND NEW</p>
        <h1 className="font-bold text-2xl mb-6">{title}</h1>
        <p className=" text-gray-900">Authors: {authors}</p>
        <p className=" text-gray-900">Publisher: {publisher}</p>
        <p className=" text-gray-900">Year: {year}</p>
        <p className="mb-5 text-gray-900">Rating: {rating}</p>
        {half ? (
          <>
            <p className="text-gray-500">{desc.slice(0, 100)}.....</p>
            <span
              className="cursor-pointer text-blue-600"
              onClick={() => setHalf(!half)}
            >
              Read More
            </span>
          </>
        ) : (
          <>
            <p className="text-gray-900">{desc}</p>
            <span
              className="cursor-pointer text-blue-600"
              onClick={() => setHalf(!half)}
            >
              Read Less
            </span>
          </>
        )}
        <br />
        <div className="inline-flex justify-center items-center gap-4 mt-4">
          <Link to={url}>
            <button className="btn">Buy Now</button>
          </Link>
          <p className="font-bold text-gray-700">Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;