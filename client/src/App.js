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

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

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

  return (
    <Router>
      {showSidebar && <Sidebar openSidebar={openSidebar} closeSidebar = {closeSidebar}/>}
      {showModal && (
        <NewsletterModal openModal={openModal} closeModal={closeModal} />
      )}
      <Nav openModal={openModal} openSidebar={openSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pages/current-promotions" element={<PromotionsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
