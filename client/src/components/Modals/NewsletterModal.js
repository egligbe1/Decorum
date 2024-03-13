import React, { useEffect } from "react";
import "./Modals.css";
import { AiOutlineMail } from "react-icons/ai";

const NewsletterModal = ({ closeModal }) => {
  // Function to handle keydown event
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal(); // Close modal if Escape key is pressed
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array ensures the effect is only run once when the component mounts

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="newsletter-modal flex-column"
      >
        <div className="d-flex justify-content-between align-items-center">
          <div></div> {/* Empty div for spacing */}
          <button className="close" onClick={closeModal}>
            <span>&times;</span>
          </button>
        </div>
        <div className="cent d-flex flex-column align">
          <div className="newsletter-modal-header">
            <h2 className="newsletter-modal-title">Join our Newsletter</h2>
            <p className="sub-title">
              Get updates on exclusive promotions from Decorium in your inbox.
            </p>
          </div>
          <div className="newsletter-modal-body">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-text">
                  <AiOutlineMail />
                </span>
                <input
                  type="email"
                  placeholder="Your email"
                  className="form-control"
                  style={{ lineHeight: "2.5" }}
                  required
                />
              </div>
              <div className="agree-terms d-flex flex-row justify-content-between">
                <p className="agree-text">
                  I agree to receive emails from Decorium
                </p>
                <input type="checkbox" required />
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="newsletter-modal-footer">
          <button className="btn1">Sign Up!</button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
