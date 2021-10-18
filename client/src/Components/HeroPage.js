import React from "react";
import home from "../assets/home.gif";
import Button from "./Button";

const HeroPage = () => {
  return (
    <div className="d-flex flex-direction-row justify-content-center justify-content-md-between align-items-center">
      <div className="">
        <h1>City Hospital</h1>
        <p className="lead text-md-start text-center mb-5">
          Blood Bank Management System Service
        </p>
        <Button text="Learn More" color="bg-primary" />
      </div>
      <div className="d-none d-md-block">
        <img src={home} alt="..." className="image" />
      </div>
    </div>
  );
};

export default HeroPage;
