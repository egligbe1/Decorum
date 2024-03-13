import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Nav from "./components/Navbar/Nav";
import NewsletterModal from "./components/Modals/NewsletterModal";
import Sidebar from "./components/Sidebar/Sidebar";
import PromotionsPage from "./pages/PromotionsPage/PromotionsPage";
import CartSidebar from "./components/CartSidebar/CartSidebar";
import InteriorDesignServices from "./pages/InteriorDesignServices/InteriorDesignServices";
import RoomPlannerModal from "./components/Modals/RoomPlannerModal";
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
      {showRoomPlanner && <RoomPlannerModal openRoomPlanner={openRoomPlanner} closeRoomPlanner={closeRoomPlanner}/>}
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
      </Routes>
    </Router>
  );
}

export default App;
