import React from 'react';
import classes from './SearchBar.module.css';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import search from "../Images/search.png";
// import { dataReset, searchResult } from "../../../redux/action/search";

function SearchBar() {
 
  // console.log(searchText);
  return (
    <form  className={classes.form}>
      <div className={classes.search}>
        <img className={classes.searchIcon} src={} alt="search" />
        <input
          
          className={classes.input}
          type="text"
        />
      </div>
    </form>
  );
}

export default SearchBar;
