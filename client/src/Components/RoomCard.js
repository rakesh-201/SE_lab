import React from "react";
import "../Styles/RoomCard.css";
import { NavLink } from "react-router-dom";

const RoomCard = ({ heading, text }) => {
  return (
    <NavLink to="/room" className="touchable">
      <div className="cont shadow">
        <div className="cont2">
          <div className="bg-primary" id="rod1"></div>
          <div className="content-cont text-start">
            <p className="fw-bold ">{heading}</p>
            {text.substr(0, 40) + "..."}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default RoomCard;
