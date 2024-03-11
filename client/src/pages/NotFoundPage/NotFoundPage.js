import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";

const NotFoundPage = () => {
  return (
    <div className="container">
      <AnnouncementBar />
      <div className="no-page d-flex justify-content-center align-items-center my-5">
        <div className="notfound-contents  text-center">
          <h4 className="mb-2">404 Page Not Found</h4>
          <p style={{ fontSize: "15px" }}>
            The page you requested does not exist.
          </p>
          <Link to="/">
            <button className="bn1 p-2 bg-dark text-light">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
