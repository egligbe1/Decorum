import React from "react";
import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import CarouselImage from "../../components/Carousel/CarouselImage";
import ProductCategoryCarousel from "../../components/Carousel/ProductCategoryCarousel";
import AppointmentHero from "../../components/AppointmentHero/AppointmentHero";
import Discover from "../../components/Discover/Discover";
import HomePlanner from "../../components/Discover/HomePlanner";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <CarouselImage />
      <ProductCategoryCarousel />
      <AppointmentHero />
      <Discover />
      <HomePlanner />
      <CustomerReview />
      <Footer />
    </>
  );
}

export default Home;
