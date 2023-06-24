import React from "react";
import DropdownItem from "./DropdownItem.jsx";
import "./styles.css";
import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as HeartIcon } from "../../icons/heart.svg";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <DropdownItem url="#" leftIcon={<HomeIcon />}>
        Home
      </DropdownItem>
      <DropdownItem url="#/favs" leftIcon={<HeartIcon />}>
        Favorites
      </DropdownItem>
    </div>
  );
};

export default DropdownMenu;
