import React from "react";
import Rating from "@mui/material/Rating";
import classes from "./Book.module.css";

const Book = ({ title, subtitle, authors, imgLink, rating }) => {
  return (
    <div className={classes.Book}>
      <span className={classes.Book_head}>
        <img
          className={classes.Book_head_img}
          src={imgLink.smallThumbnail}
          alt="image_link"
        />
        <h3>{title}</h3>
      </span>
      {subtitle && <h6>Subtitle: {subtitle}</h6>}
      <h4>Authors: {authors}</h4>
      <span className={classes.Book_ratings}>
        Rating: <Rating name="size-small" value={rating || null} size="small" />{" "}
      </span>
    </div>
  );
};

export default Book;
