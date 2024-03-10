import React from "react";
import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Footer from "../../components/Footer/Footer";
import PromotionContent from "./PromotionContent";

const PromotionsPage = () => {
  return (
    <div className="container vw-100">
      <AnnouncementBar />
      <PromotionContent />
      <Footer />
    </div>
  );
};

export default PromotionsPage;
