import React from "react";

const Card = (props) => {
  return (
    <div className="col-md bg-secondary">
      <div className="card h-100">
        <img
          src="https://picsum.photos/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
