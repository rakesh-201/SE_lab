import React from "react";
import RoomCard from "../Components/RoomCard";

const HomeIn = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-3 col-md-4 col-12 my-4">
          <RoomCard
            heading="Operating Systems"
            text="Class for the Second Year, B.Tech, Information Technology Students."
          />
        </div>
        <div className="col-lg-3 col-md-4 col-12 my-4">
          <RoomCard
            heading="Operating Systems"
            text="Class for the Second Year, B.Tech, Information Technology Students."
          />
        </div>
        <div className="col-lg-3 col-md-4 col-12 my-4">
          <RoomCard
            heading="Operating Systems"
            text="Class for the Second Year, B.Tech, Information Technology Students."
          />
        </div>
        <div className="col-lg-3 col-md-4 col-12 my-4">
          <RoomCard
            heading="Operating Systems"
            text="Class for the Second Year, B.Tech, Information Technology Students."
          />
        </div>
      </div>
    </div>
  );
};

export default HomeIn;
