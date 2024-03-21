import React from "react";
import "./AppointmentHero.css";
import { Link } from "react-router-dom";
import room_video from "../../assets/images/room_video.mp4";

const AppointmentHero = () => {
  return (
    <div className="container">
      <div className="image-wrap">
        <video src={room_video} autoPlay width='100%' muted loop controls={false}/>
        <div className="cta-wrap text-center">
          <h4 style={{ fontSize: "15px" }}>Take advantage of our</h4>
          <p className="call fw-bold">FREE INTERIOR DESIGN SERVICES </p>
          <Link to="pages/interior-design-services" className="bn2">
            Book your appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;
