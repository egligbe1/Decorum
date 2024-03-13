import React, { useState } from "react";
import "./InteriorDesignServices.css";
import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Footer from "../../components/Footer/Footer";
import Furniture from "../../assets/images/space.jpg";
import Step1 from "../../assets/images/step1.webp";
import Step2 from "../../assets/images/step2.webp";
import Step3 from "../../assets/images/step3.webp";

const InteriorDesignServices = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    rooms: "",
    timeframe: "",
    budget: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Write submit logic later

    console.log(formData);
  };

  return (
    <>
      <div className="container">
        <AnnouncementBar />
        <div className="design-services d-flex flex-column">
          <div className="ImgWrap">
            <img
              src={Furniture}
              alt="Room Space Furniture"
              className="RoomImg"
            />
            <div className="ImgText">
              <h2 className="text-one">Creating your dream space</h2>
              <h2 className="text-two">is easier than you think</h2>
            </div>
          </div>
          <div className="steps">
            <h2 className="text-center mt-5" style={{ fontSize: "19px" }}>
              HOW THE DESIGN PROCESS WORKS
            </h2>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="card h-100">
                    <div className="card-image">
                      <img src={Step1} className="card-img-top" alt="step1" />
                    </div>
                    <div className="card-body">
                      <h3
                        className="card-title  text-secondary"
                        style={{ fontSize: "15px" }}
                      >
                        STEP 1
                      </h3>
                      <h2 className="card-subtitle">GIVE US THE DETAILS</h2>
                      <p className="card-text">
                        Simply bring your floor plans, paint colours and
                        pictures.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="card h-100">
                    <div className="card-image">
                      <img src={Step2} className="card-img-top" alt="step2" />
                    </div>
                    <div className="card-body">
                      <h3
                        className="card-title  text-secondary"
                        style={{ fontSize: "15px" }}
                      >
                        STEP 2
                      </h3>
                      <h2 className="card-subtitle">
                        MEET YOUR INTERIOR DESIGN SPECIALIST
                      </h2>
                      <p className="card-text">
                        Our designers will assist in creating a living
                        environment with your own unique personal taste,{" "}
                        <span className="fw-bold">all within your budget.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div className="card h-100 custom-last-card">
                    <div className="card-image last-image">
                      <img src={Step3} className="card-img-top" alt="step3" />
                    </div>
                    <div className="card-body">
                      <h3
                        className="card-title  text-secondary"
                        style={{ fontSize: "15px" }}
                      >
                        STEP 3
                      </h3>
                      <h2 className="card-subtitle">TRANSFORM YOUR HOME</h2>
                      <p className="card-text">
                        Room or space planning, decor ideas, small space
                        solutions, and colour consulting. In-home design
                        consultations to be scheduled after an in-store
                        consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-appointment">
          <h2 className="mt-5 mb-3 app-head">
            REQUEST YOUR FREE APPOINTMENT
          </h2>
          <div className="appointment-form">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="FormInput"
                  id="nameInput"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="FormInput"
                  id="emailInput"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneInput" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="FormInput"
                  id="phoneInput"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="addressInput" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="FormInput"
                  id="addressInput"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="roomsInput" className="form-label">
                  Rooms(s) you wish to transform
                </label>
                <input
                  type="text"
                  className="FormInput"
                  id="roomsInput"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="timeframeInput" className="form-label">
                  Timeframe for completion of the project.
                </label>
                <input
                  type="text"
                  className="FormInput"
                  id="timeframeInput"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="budgetInput" className="form-label">
                  Approx. budget for project
                </label>
                <input
                  type="text"
                  className="FormInput"
                  id="budgetInput"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="bn1 bg-dark text-light py-2 px-4 text-center">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default InteriorDesignServices;
