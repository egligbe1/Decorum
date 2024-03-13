import React from "react";
import "./Modals.css";

const RoomPlannerModal = ({ closeRoomPlanner }) => {
  return (
    <div className="container">
      <div className="planner-modal-overlay" onClick={closeRoomPlanner}>
        <div className="planner-main" onClick={(e) => e.stopPropagation()}>
          <h2
            className="planner-title text-center"
            style={{ fontSize: "28px" }}
          >
            To launch room planner, please complete the form below:
          </h2>
          <div className="planner-form border-1 p-2">
            <div className="planner-form-group">
              <label htmlFor="name" className="planner-label">
                Your Name *
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                className="planner-input"
                required
              />
              <br />
            </div>
            <div className="planner-form-group">
              <label htmlFor="email" className="planner-label">
                Email *
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                className="planner-input"
                required
              />
              <br />
            </div>
            <div>
              <div className="planner-form-group d-flex align-items-center">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  className="check-input me-2"
                />
                <label htmlFor="check" className="planner-label check-label">
                  I wish to receive emails from Decorium and understand I can
                  withdraw my consent at any time.
                </label>
              </div>
            </div>
            <button className="bg-black text-light p-2 mt-3 btn3">
              LAUNCH ROOM PLANNER
            </button>{" "}
            {/* Handle submit form submit later */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPlannerModal;
