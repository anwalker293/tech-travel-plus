import React, { useState } from "react";
import "./styles.css";

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
};

export default NavBar;
