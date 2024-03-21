import React from "react";
import { Link } from "react-router-dom";
import "./LivingRoomCollections.css";
import AnnouncementBar from "../../../components/AnnouncementBar/AnnouncementBar";
import LivingSofa from "../../../assets/images/living-sofa.webp";
import Sectionals from "../../../assets/images/living-sectionals.webp";
import sofabeds from "../../../assets/images/living-sofa-beds.jpg";
import recliner from "../../../assets/images/living-recliner.webp";
import stressless from "../../../assets/images/living-stressless.webp";
import bookshelves from "../../../assets/images/living-bookshelves.webp";
import mediastands from "../../../assets/images/living-mediastands.jpg";
import coffeetable from "../../../assets/images/living-coffeetable.webp";
import consoletable from "../../../assets/images/living-console-tables.webp";
import ottomans from "../../../assets/images/living-ottomans.webp";
import Footer from "../../../components/Footer/Footer";

const LivingRoomCollections = () => {
  return (
    <>
      <AnnouncementBar />
      <div className="container">
        <div className="browse-collections my-3">
          <h1>Browse our collections</h1>
        </div>
        <div className="collections-wrapper d-flex mt-4">
          <div className="row">
            <div className="col-md-6 mb-2 collection-item">
              <div className="card h-100">
                <Link to="/collections/sofas">
                  <div className="collection-image">
                    <img
                      src={LivingSofa}
                      className="card-img"
                      alt="living-sofa"
                    />
                  </div>

                  <div className="card-body">
                    <h2 className="card-text">Living Sofa</h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 mb-2 collection-item">
              <div className="card h-100">
                <Link to="/collections/sectionals-large-living">
                  {" "}
                  <div className="collection-image">
                    <img
                      src={Sectionals}
                      className="card-img"
                      alt="sectionals"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-text">Sectionals</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-2 collection-item">
            <div className="card h-100">
              <Link to="/collections/sofa-beds">
                <div className="collection-image">
                  <img src={sofabeds} className="card-img" alt="sofa beds" />
                </div>
                <div className="card-body">
                  <h2 className="card-text">Sofa Beds</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-2 collection-item">
            <div className="card h-100">
              <Link to="/collections/stressless-recliners">
                <div className="collection-image">
                  <img src={recliner} className="card-img" alt="recliner" />
                </div>
                <div className="card-body">
                  <h2 className="card-text">Recliners</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-2 collection-item">
            <div className="card h-100">
              <Link to="/collections/media-stands-storage-entertainment">
                <div className="collection-image">
                  <img
                    src={mediastands}
                    className="card-img"
                    alt="Media Stands"
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-text">Media Stands</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-2 collection-item">
            <div className="card h-100">
              <Link to="/collections/coffee-tables">
                <div className="collection-image">
                  <img
                    src={coffeetable}
                    className="card-img"
                    alt="coffee table"
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-text">Coffee Tables</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-2 collection-item">
            <div className="card h-100">
              <Link to="/collections/stressless-gallery">
                <div className="collection-image">
                  <img src={stressless} className="card-img" alt="stressless" />
                </div>
                <div className="card-body">
                  <h2 className="card-text">Stressless</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-2 collection-item">
            <div className="card h-100">
              <Link to="/collections/book-shelves-shelf-storage">
                <div className="collection-image">
                  <img
                    src={bookshelves}
                    className="card-img"
                    alt="bookshelves"
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-text">Bookshelves</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-2 collection-item">
            <div className="card h-100">
              <Link to="/collections/console-tables">
                <div className="collection-image">
                  <img
                    src={consoletable}
                    className="card-img"
                    alt="console tble"
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-text">Console Tables</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-2 collection-item">
            <div className="card h-100">
              <Link to="/collections/benches-ottomans">
                <div className="collection-image">
                  <img src={ottomans} className="card-img" alt="ottomans" />
                </div>
                <div className="card-body">
                  <h2 className="card-text">Benches & Ottomans</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LivingRoomCollections;
