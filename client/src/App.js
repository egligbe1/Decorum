import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Nav from "./components/Navbar/Nav";
import NewsletterModal from "./components/Modals/NewsletterModal";
import Sidebar from "./components/Sidebar/Sidebar";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import RoomPlannerModal from "./components/Modals/RoomPlannerModal";

// Pages
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/AboutPage";
import PromotionsPage from "./pages/PromotionsPage/PromotionsPage";
import InteriorDesignServices from "./pages/InteriorDesignServices/InteriorDesignServices";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// Living Room Collections
import LivingRoomCollections from "./pages/Collections/LivingRoomCollections/LivingRoomCollections";
import LivingSofas from "./pages/Collections/LivingRoomCollections/LivingSofas";
import Sectionals from "./pages/Collections/LivingRoomCollections/Sectionals";
import SofaBeds from "./pages/Collections/LivingRoomCollections/Sofabeds";
import Recliners from "./pages/Collections/LivingRoomCollections/Recliners";
import MediaStands from "./pages/Collections/LivingRoomCollections/MediaStands";
import CoffeeTables from "./pages/Collections/LivingRoomCollections/CoffeeTables";
import StresslessGallery from "./pages/Collections/LivingRoomCollections/StresslessGallery";
import BookShelves from "./pages/Collections/LivingRoomCollections/Bookshelves";
import ConsoleTables from "./pages/Collections/LivingRoomCollections/ConsoleTables";
import BenchesOttomans from "./pages/Collections/LivingRoomCollections/BenchesOttomans";
import BedroomCollections from "./pages/Collections/BedroomCollections/BedroomCollections";
import DiningCollections from "./pages/Collections/DiningCollections/DiningCollections";
import Accents from "./pages/Collections/Accents/Accents";
import Blog from "./pages/Blogs/Blog";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCartSidebar, setCartSidebar] = useState(false);
  const [showRoomPlanner, setRoomPlanner] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  const openCartSidebar = () => {
    setCartSidebar(true);
  };
  const closeCartSidebar = () => {
    setCartSidebar(false);
  };
  const openRoomPlanner = () => {
    setRoomPlanner(true);
  };
  const closeRoomPlanner = () => {
    setRoomPlanner(false);
  };

  return (
    <Router>
      {showCartSidebar && (
        <CartSidebar
          openCartSidebar={openCartSidebar}
          closeCartSidebar={closeCartSidebar}
        />
      )}
      {showSidebar && (
        <Sidebar openSidebar={openSidebar} closeSidebar={closeSidebar} />
      )}
      {showModal && (
        <NewsletterModal openModal={openModal} closeModal={closeModal} />
      )}
      {showRoomPlanner && (
        <RoomPlannerModal
          openRoomPlanner={openRoomPlanner}
          closeRoomPlanner={closeRoomPlanner}
        />
      )}
      <Nav
        openModal={openModal}
        openSidebar={openSidebar}
        openCartSidebar={openCartSidebar}
        closeCartSidebar={closeCartSidebar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pages/current-promotions" element={<PromotionsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route
          path="/pages/interior-design-services"
          element={
            <InteriorDesignServices
              openRoomPlanner={openRoomPlanner}
              closeRoomPlanner={closeRoomPlanner}
            />
          }
        />
        <Route
          path="/collections/living-room"
          element={<LivingRoomCollections />}
        />
        <Route path="/collections/sofas" element={<LivingSofas />} />
        <Route
          path="/collections/sectionals-large-living"
          element={<Sectionals />}
        />
        <Route path="/collections/sofa-beds" element={<SofaBeds />} />
        <Route
          path="/collections/stressless-recliners"
          element={<Recliners />}
        />
        <Route
          path="/collections/media-stands-storage-entertainment"
          element={<MediaStands />}
        />
        <Route path="/collections/coffee-tables" element={<CoffeeTables />} />
        <Route
          path="/collections/stressless-gallery"
          element={<StresslessGallery />}
        />
        <Route
          path="/collections/book-shelves-shelf-storage"
          element={<BookShelves />}
        />
        <Route path="/collections/console-tables" element={<ConsoleTables />} />
        <Route
          path="/collections/benches-ottomans"
          element={<BenchesOttomans />}
        />
        <Route path="/collections/beds" element={<BedroomCollections />} />
        <Route path="/collections/dining" element={<DiningCollections />} />
        <Route path="/collections/accent-chairs" element={<Accents />} />
        <Route path="blogs/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
