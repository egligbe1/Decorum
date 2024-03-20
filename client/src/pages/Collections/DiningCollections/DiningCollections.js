import React from "react";
import AnnouncementBar from "../../../components/AnnouncementBar/AnnouncementBar";
import { Link } from "react-router-dom";
import diningtable from "../../../assets/images/dining-tables.webp";
import diningchair from "../../../assets/images/dining-chair.webp";
import cabinets from "../../../assets/images/dining-cabinets.webp";
import bar from "../../../assets/images/dining-bar.webp";
import Footer from "../../../components/Footer/Footer";

const DiningCollections = () => {
  return (
    <>
      <AnnouncementBar />
      <div className="container">
        <div className="title">
          <h1>Browse our Collections</h1>
        </div>
        <div className="collections-wrapper d-flex">
          <div className="row">
            <div className="col-md-6 mb-2 collection-item">
              <div className="card h-100">
                <Link to="/collections/dining-tables">
                  <div className="collection-image">
                    <img
                      src={diningtable}
                      className="card-img"
                      alt="dining table"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-text">Dining Tables</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-2 collection-item">
              <div className="card h-100">
                <Link to="/collections/dining-chairs">
                  <div className="collection-image">
                    <img
                      src={diningchair}
                      className="card-img"
                      alt="dining chairs"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-text">Dining Chairs</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
          <div className="row">
            <div className="col-md-6 mb-2 collection-item">
              <div className="card h-100">
                <Link to="/collections/buffets-cabinets-storage">
                  <div className="collection-image">
                    <img
                      src={cabinets}
                      className="card-img"
                      alt="Buffets & Cabinets"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-text">Buffets & Cabinets</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-2 collection-item">
              <div className="card h-100">
                <Link to="/collections/bar-counter-stool">
                  <div className="collection-image">
                    <img
                      src={bar}
                      className="card-img"
                      alt="Bar and counter stool"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-text">Bar & Counter Stool</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    </>
  );
};

export default DiningCollections;
