import React from "react";
import { Link } from "react-router-dom";
import inspiration from "../../assets/images/inspiration.jpg";
import discover_stressless from "../../assets/images/stressless-discover.jpg";
import promotions from "../../assets/images/promotions.jpg";
import stressless from "../../assets/images/Stressless.avif";

import "./Discover.css";

const Discover = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card blog d-flex flex-column h-100">
            <Link to="/blogs/blog">
              <img
                src={inspiration}
                alt=""
                className="card-img-top img-fluid"
                style={{ objectFit: "cover", height: "400px" }}
              />
            </Link>
            <div className="card-body mt-2">
              <h1 className="card-title">Find your inspiration</h1>
              <p className="card-text">
                Our talented team of in-house design experts discuss emerging
                trends in interior design. Browse our blog for the inspiration
                you need.
              </p>
            </div>
            <div className="card-footer">
              <Link to="/blogs/blog" className="btn btn-dark">
                Visit our blog
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card stressless d-flex flex-column h-100">
            <Link to="/collections/stressless-galery">
              <img
                src={discover_stressless}
                alt=""
                className="card-img-top img-fluid"
                style={{ objectFit: "cover", height: "400px" }}
              />
            </Link>
            <div className="card-body mt-2">
              <h1 className="card-title">
                Discover{" "}
                <span>
                  <img
                    src={stressless}
                    alt="stressless"
                    style={{ width: "60px" }}
                  />
                </span>
              </h1>
              <p className="card-text">
                We are proud to be one of Canada's leading Stressless providers.
                The moment you sit down, you can feel the Stressless difference.
              </p>
            </div>
            <div className="card-footer">
              <Link to="/collections/stressless-gallery" class="btn btn-dark">
                View collections
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card promotions d-flex flex-column h-100">
            <Link to="/pages/current-promotions">
              <img
                src={promotions}
                alt=""
                className="card-img-top img-fluid"
                style={{ objectFit: "cover", height: "400px" }}
              />
            </Link>
            <div className="card-body mt-2">
              <h1 className="card-title">Current promotions</h1>
              <p className="card-text">
                View current promotions and exclusive offers.
              </p>
            </div>
            <div className="card-footer">
              <Link to="/pages/current-promotions" className="btn btn-dark">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
