import React from "react";
import { BsCart3 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import "./CartSidebar.css";

const CartSidebar = ({ closeCartSidebar }) => {
  return (
    <div className="cart-sidebar-overlay" onClick={closeCartSidebar}>
      <div
        className="cart-sidebar d-flex flex-column"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-header justify-content-between align-items-center px-4 py-3 d-flex flex-row W-100">
          <div>
            <BsCart3 size={30} />
          </div>
          <div className="bg-light" onClick={closeCartSidebar}>
            <IoCloseOutline style={{ cursor: "pointer" }} size={25} />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartSidebar;
