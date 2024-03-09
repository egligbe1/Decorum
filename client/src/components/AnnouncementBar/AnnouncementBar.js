import React from "react";
import { Link } from "react-router-dom";
import "./AnnouncementBar.css";
const AnnouncementBar = () => {
  return (
    <>
      <Link to='/pages/current-promotions'>
        <div
          className="news-alert d-flex flex-column justify-content-center align-items-center mx-3"
          role="alert"
        >
          <strong className="mt-4 text-secondary text-center fw-bold">
            March into Savings - Your Space, Your Savings! - Promo Code: 15%OFF
          </strong>
          <strong className="sub-promo text-secondary text-center mt-1">
            Enjoy selection and quality as you enhance and personalize your home
            with 15% off* regular-priced items
          </strong>
          <p style={{ fontSize: "14px" }} className="text-center text-secondary mb-4">
            Shop floor to ceiling savings all under one roof. Visit our showroom
            for the best selection.
          </p>
        </div>
      </Link>
    </>
  );
};

export default AnnouncementBar;
