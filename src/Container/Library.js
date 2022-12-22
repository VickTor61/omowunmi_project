import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Books from "../Components/Books";
import axios from "axios";
import classes from "./Library.module.css";

const Library = () => {
  const baseURL = `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyBDqUtTEFk4EcDqNAAaW2kxWkpc_BuPVng`;
  const [books, setBooks] = useState("");

  useEffect(() => {
    const fetchData = async () => {
     await axios.get(baseURL).then((response) => {
        setBooks(response.data);
      });
    };
    fetchData().catch(console.error);
  }, [baseURL]);

  const [searchedBook, setSearchedBook] = useState("");

  const searchChange = (e) => {
    setSearchedBook(e.target.value);
  };

  const filteredBooks = books.items && books.items.filter((book) => {
    return book.volumeInfo.title.toLowerCase().includes(
        searchedBook.toLowerCase()
    )
  });
   

  return (
    <div className={classes.Library}>
      <Header searchChange={searchChange} />
      <Books books={filteredBooks} />
    </div>
  );
};

export default Library;
