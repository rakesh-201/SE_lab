import React from "react";
import "../Styles/Button.css";
import { NavLink } from "react-router-dom";

const Button = ({ text, color }) => {
  return (
    <NavLink to="/">
      <div className="touchable">
        <div className={color + " button shadow text-light"}>{text}</div>
      </div>
    </NavLink>
  );
};

export default Button;
