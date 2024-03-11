import React from "react";
import MiniNav from "./MiniNav";
import Navbar from "./Navbar";
import './Navbar.css';

const Nav = ({openModal, openSidebar, openCartSidebar}) => {
  return (
    <div className="navs">
      <MiniNav />
      <Navbar openModal={openModal} openSidebar={openSidebar} openCartSidebar={openCartSidebar}/>
    </div>
  );
};

export default Nav;
