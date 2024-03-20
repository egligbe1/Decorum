import React from "react";
import AnnouncementBar from "../../../components/AnnouncementBar/AnnouncementBar";
import Footer from "../../../components/Footer/Footer";

const Accents = () => {
  return (
    <>
      <AnnouncementBar />
      <div className="container">
        <div className="browse-collections my-3">
          <h1>Accent Chairs</h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Accents;
