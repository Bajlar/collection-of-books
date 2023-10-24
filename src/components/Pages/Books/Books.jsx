import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingleBook from './SingleBook';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const Books = () => {
  const data = useLoaderData();
  const books = data.books;
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <div className="container grid md:grid-cols-4 gap-6 my-8">
      {books.map((book) => (
        <SingleBook key={book.isbn13} book={book}></SingleBook>
      ))}
    </div>
  );
};

export default Books;