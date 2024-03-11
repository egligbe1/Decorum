import React from "react";
import FurnitureImg from "../../assets/images/BROOKES_720x.webp";
import PromoBanner from "../../assets/images/promo-banner.jpg";
import { Link } from "react-router-dom";
import "./PromotionsPage.css";

const PromotionContent = () => {
  return (
    <div>
      <div className="container">
        <div className="promotions d-grid mt-1 ">
          <div className="promoImg d-flex align-items-center justify-content-start">
            <img className="" src={FurnitureImg} alt="Furniture" />
          </div>
          <div className="promo-content d-flex">
            <div className="promo-body flex-column">
              <p className="fw-bold text-secondary">Current Promotion</p>
              <p>March into Savings - Your Space, Your Savings!</p>
              <p>
                Enjoy selection, quality, and savings as you enhance and
                personalize your home. Shop floor to ceiling savings all under
                one roof for every room in your home. Transform your home,
                create a space that reflects you. Shop our clearance sale now!
              </p>
              <hr />
              <p>Take 15% OFF* on Regular-Priced Items</p>
              <p className="fw-bold"> Promo Code: 15%OFF</p>
              <hr />
              <p>
                Browse our wide selection of furniture and home décor items,
                including living room, dining, bedroom, home office, home
                accents, lighting, area rugs, and more!
              </p>
              <h2 style={{ fontSize: "23px", fontStyle: "italic" }}>
                Visit our 100,000ft² showroom/warehouse to get inspired. Shop
                online 24/7.
              </h2>
              <p>
                If you need help finding your perfect match, our Design
                Consultants are ready to help you make your home a space to
                love. Arrange a free Design Consultation.
              </p>
              <p>Appointments are recommended! But not required.</p>
              <p>
                To schedule your showroom appointment, please call us at
                416-736-6120 or contact us{" "}
                <Link to="pages/contact" className="text-primary">
                  here
                </Link>
              </p>
              <p>
                You can also reach out to us on Instagram, Facebook and Twitter
                anytime.
              </p>
              <p className="cta-offer">
                *For inquiries email{" "}
                <a href="mailto:info@decorium.ca" className="text-primary">
                  info@decorium.ca
                </a>{" "}
                <br />
                15% off applicable towards regular priced items and cannot be
                combined with any other offer or discount. Offer excludes
                Stressless gallery, delivery fees and protection plans. Limited
                time offer.
              </p>
            </div>
          </div>
        </div>
        <div className="promo-banner-container">
          <Link className="promo-banner" to="/collections/stressless-gallery">
            <img src={PromoBanner} alt="Promotion banner" className="w-100" />
          </Link>
        </div>{" "}
      </div>
    </div>
  );
};

export default PromotionContent;
