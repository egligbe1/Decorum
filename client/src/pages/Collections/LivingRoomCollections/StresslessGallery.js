import React from "react";
import { Link } from "react-router-dom";
import stressless from "../../../assets/images/Stressless.avif";

const StresslessGallery = () => {
  return (
    <>
      <div className="promo-container d-flex flex-column vw-100">
        <div className="text-center bg-secondary" role="alert">
          <div className="stressless-promo">
            <h1 className="p-4 text-light fw-bold" style={{ fontSize: "20px" }}>
              STRESSLESS COLLECTION - SAVE $500 ON WING CHAIR*{" "}
              <Link to="/pages/current-promotions">
                <span style={{ fontSize: "16px" }}>(Learn More)</span>
              </Link>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="stressless-gallery mt-5">
            <div className="stressless-title">
              <h1
                style={{ fontSize: "30px" }}
                className="fw-bold text-body-secondary"
              >
                <img
                  src={stressless}
                  alt="stressless logo"
                  style={{ width: "60PX" }}
                />
                Stressless
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StresslessGallery;
