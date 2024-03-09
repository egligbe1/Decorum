import React from "react";
import { Link } from "react-router-dom";
import home_plan from "../../assets/images/home_plan.jpg";
import "../AppointmentHero/AppointmentHero.css";

const HomePlanner = () => {
  return (
    <div className="container">
      <div className="image-wrap">
        <img src={home_plan} alt="Man making plans to renovate house using color palette and laptop freepik.com"/>
        <div className="cta-wrap text-center">
          <h4 style={{ fontSize: "15px" }}>Take advantage of our</h4>
          <p className="call fw-bold">FREE ROOM Planner Tool </p>
          <Link to="pages/room-planner" className="bn2">
           Plan your Space
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePlanner;
