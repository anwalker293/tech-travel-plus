import React from "react";
import "./styles.css";

const DropdownItem = (props) => {
  return (
    <a href={props.url} className="menu-item" target="_blank">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
};

export default DropdownItem;
