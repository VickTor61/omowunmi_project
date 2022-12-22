import React from "react";
import Book from "./Book";
import classes from "./Books.module.css";

const Books = ({ books }) => {
  return (
    <div className={classes.Books}>
      {books &&
        books.map((book) => (
          <Book
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            rating={book.volumeInfo.averageRating}
            imgLink={book.volumeInfo.imageLinks}
            decription={book.volumeInfo.decription}
            subtitle={book.volumeInfo.subtitle}
          />
        ))}
    </div>
  );
};

export default Books;
