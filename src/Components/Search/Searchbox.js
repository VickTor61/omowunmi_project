import React from 'react';
import classes from "./Searchbox.module.css"

const Searchbox = ({onsearchChange}) => {
    return (
        <div className={classes.Searchbox}>
            <input type="text" placeholder='Search for a book' className={classes.input} onChange={onsearchChange} />
        </div>
    );
};

export default Searchbox;