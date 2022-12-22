import React from "react";
import Searchbox from "./Search/Searchbox";
import classes from "./Header.module.css";

const Header = ({ searchChange }) => {
  return (
    <div className={classes.Header}>
      <header className={classes.h1}>
        <h1>Omowumi Library</h1>
        <h1>Online Public Access Catalogue</h1>
      </header>
      <Searchbox onsearchChange={searchChange} />
    </div>
  );
};

export default Header;
