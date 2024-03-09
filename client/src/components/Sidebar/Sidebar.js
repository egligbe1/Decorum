import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="sidebar-overlay" onClick={closeSidebar}>
      <div
        className="sidebar d-flex flex-column"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="close-button" onClick={closeSidebar}>
          <IoMdClose />
        </button>
        {/* Sidebar content goes here */}
        <ul className="sidebar-menu">
          <li>
            <a href="/account/login">LOGIN / REGISTER</a>
          </li>
          <li className="d-flex flex-rowjustify-content-between">
            <NavLink to="/collections/living-room">LIVING</NavLink>
            <LiaGreaterThanSolid />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
