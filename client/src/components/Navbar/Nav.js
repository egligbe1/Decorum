import React from "react";
import MiniNav from "./MiniNav";
import Navbar from "./Navbar";
import './Navbar.css';

const Nav = ({openModal}) => {
  return (
    <div className="navs">
      <MiniNav />
      <Navbar />
    </div>
  );
};

export default Nav;
