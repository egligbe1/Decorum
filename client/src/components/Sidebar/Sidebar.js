import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import StresslessImg from "../../assets/images/Stressless.avif";

const Sidebar = ({ closeSidebar }) => {
  const menuItems = [
    { label: "LOGIN / REGISTER", link: "/account/login" },
    { label: "LIVING", link: "/collections/living-room" },
    { label: "BEDROOM", link: "/collections/bedroom" },
    { label: "DINING", link: "/collections/dining" },
    { label: "OFFICE", link: "/collections/office-desk-work-storage" },
    { label: "ACCENTS", link: "/collections/accents" },
    { label: "IDEAS", link: "/collections/ideas" },
    {
      label: (
        <img className="stresslessImg" src={StresslessImg} alt="Stressless" />
      ),
      link: "/collections/stressless-gallery",
    },
    { label: "ON-SALE", link: "/collections/get-it-now" },
    { label: "Account", link: "/account"}
  ];

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <li key={index} className="d-flex flex-row justify-content-between">
        {index !== 0  && index !== 8 && index !== 9? (
          <>
            <Link onClick={closeSidebar} to={item.link}>{item.label}</Link>
            <Link className="ms-5">
              <span className="me-3 text-secondary pipe">|</span>
              <span className="me-4">
                <GrFormNext />
              </span>
            </Link>
          </>
        ) : (
          <a href={item.link}>{item.label}</a>
        )}
      </li>
    ));
  };

  return (
    <div className="sidebar-overlay" onClick={closeSidebar}>
      <div
        className="sidebar d-flex flex-column"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={closeSidebar}>
          <IoMdClose />
        </button>
        <ul className="sidebar-menu-items flex-column">{renderMenuItems()}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
