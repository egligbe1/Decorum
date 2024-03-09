import React from "react";
import { NavLink } from "react-router-dom";
import "./MiniNav.css";
import { FaPhone } from "react-icons/fa6";
import "./MiniNav.css";

const MiniNav = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark d-none d-lg-flex">
        <div className="container-fluid d-flex  align-items-center">
          <div className="justify-content-start">
            <a href="tel:770-200-4250" className="navbar-text ms-4 text-white ">
              <FaPhone /> <span>770-200-4250</span>
            </a>
          </div>
          <div className="nav-menu d-flex justify-content-end me-4">
            <ul className="nl d-flex justify-content-between text-white mb-0">
              <li className="me-3">
                <NavLink to="/about" className="text-white">
                  About Us
                </NavLink>
              </li>
              <li className="me-3">
                <NavLink to="/delivery" className="text-white">
                  Delivery
                </NavLink>
              </li>
              <li className="me-3">
                <NavLink to="/about" className="text-white">
                  Contact Us
                </NavLink>
              </li>
              <li className="me-3">
                <NavLink to="/about" className="text-white">
                  Track Your Delivery
                </NavLink>
              </li>
              <div className="align-tems-center">
                <a
                  href="/login"
                  className="btn btn-outline-light fw-bold"
                  style={{ height: "30px", fontSize: "12px" }}
                >
                  Login/Register
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniNav;
