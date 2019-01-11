import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div className="navbar">
      <p>Lambda Task Manager</p>
      <input
        className="search__input"
        name="searchInputText"
        type="text"
        placeholder="Search..."
        value={props.searchInputText}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Navbar;
