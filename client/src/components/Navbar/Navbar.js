import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TfiSearch } from "react-icons/tfi";
import { MdOutlineShoppingBag } from "react-icons/md";
import StresslessImg from "../../assets/images/Stressless.avif";
import Logo from "../../assets/images/DECORUMM.png";

const Navbar = ({ openModal, openSidebar, openCartSidebar }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <>
      <div className="d-flex flex-column nb navbar-expand-lg">
        <div className="d-flex justify-content-between align-items-center mx-3 my-4">
          <div>
            <div
              onClick={openSidebar}
              className="menu-icon ms-3 text-secondary d-lg-none"
              id="menu-toggle"
            >
              <IoMenu size={30} />{" "}
            </div>
            <div className="newsletter flex d-none d-lg-flex">
              <button
                onClick={openModal}
                style={{
                  textDecoration: "none",
                  border: "none",
                  background: "transparent",
                }}
                className="ms-3  align-items-center"
              >
                <MdOutlineMail size={30} opacity={0.6} />
                <span
                  className="getOffer fw-bold text-secondary ms-1 d-none d-lg-inline d-flex align-items-center"
                  style={{ fontSize: "12px" }}
                >
                  Get Exclusive Offers
                </span>
              </button>
            </div>
          </div>

          <div>
            <NavLink to="/">
              <img className="logo" src={Logo} alt="Logo" />
            </NavLink>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <select
              value={selectedCurrency}
              onChange={handleCurrencyChange}
              style={{
                border: "none",
                cursor: "pointer",
                marginRight: "5px",
              }}
              className="d-none d-lg-flex"
            >
              <option value="">CAD $</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
            {selectedCurrency && (
              <p className="me-2">Selected currency: {selectedCurrency}</p>
            )}
            <NavLink
              to="/account"
              className="text-secondary me-2 d-none d-lg-flex"
            >
              <CgProfile size={25} />{" "}
            </NavLink>
            <span className="me-2">
              <NavLink to="/search" className="text-secondary">
                <TfiSearch size={23} />{" "}
              </NavLink>
            </span>{" "}
            <span
              className="text-secondary"
              onClick={openCartSidebar}
              style={{ cursor: "pointer" }}
            >
              <MdOutlineShoppingBag size={25} />{" "}
            </span>
          </div>
        </div>

        <div className="d-flex mb-0">
          <div className="mail ms-4 d-lg-none">
            <button
              onClick={openModal}
              style={{
                textDecoration: "none",
                border: "none",
                background: "transparent",
              }}
              className="ms-2"
            >
              <MdOutlineMail size={30} opacity={0.6} />{" "}
            </button>
          </div>
          <ul className="nav__list d-none d-lg-flex flex-column flex-sm-row justify-content-center align-items-center vw-100 mb-2">
            <li className="nav--item me-3">
              <NavLink to="/collections/living-room" className="text-secondary">
                LIVING
              </NavLink>
            </li>
            <li className="nav--item me-3">
              <NavLink to="collections/bedroom" className="text-secondary">
                BEDROOM
              </NavLink>
            </li>
            <li className="nav--item me-3">
              <NavLink to="collections/dining" className="text-secondary">
                DINING
              </NavLink>
            </li>
            <li className="nav--item me-3">
              <NavLink
                to="collections/office-desk-work-storage"
                className="text-secondary"
              >
                OFFICE
              </NavLink>
            </li>
            <li className="nav--item me-3">
              <span className="text-secondary">ACCENTS</span>
            </li>
            <li className="nav--item me-3">
              <NavLink to="#" className="text-secondary">
                IDEAS
              </NavLink>
            </li>
            <li className="nav--item me-3">
              <NavLink
                to="collections/stressless-gallery"
                className="text-secondary"
              >
                <img
                  className="stresslessImg"
                  src={StresslessImg}
                  alt="Stressless"
                />
              </NavLink>
            </li>
            <li className="nav--item me-3">
              <NavLink to="collections/get-it-now" className="text-secondary">
                ON-SALE
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
