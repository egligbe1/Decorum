import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../assets/images/home1.jpg";
import Image2 from "../../assets/images/1791.jpg";
import Image3 from "../../assets/images/132806.jpg";
import "./CarouselImg.css";

const CarouselImage = () => {
  return (
    <>
      <div className="carousel">
        <Carousel interval={3000}>
          <Carousel.Item>
            <img
              style={{ height: "auto", maxHeight: "73vh" }}
              src={Image2}
              alt="Home Design by Freepik.com"
              className="carousel-img d-block w-100"
            />
            <Carousel.Caption className="carousel-caption">
              <h2 className="fw-bold">EXPLORE NEW ARRIVALS</h2>
              <NavLink to="/collections/all" className="bn14 mb-3">
                Shop Now
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "auto", maxHeight: "73vh" }}
              src={Image3}
              alt="modern-luxury-bedroom-freepik"
              className="carousel-img d-block w-100 object-fit-none object-fit-lg-cover"
            />

            <Carousel.Caption>
              <h2 className="fw-bold">EXPLORE NEW ARRIVALS</h2>
              <NavLink to="/collections/all" className="bn14 mb-3">
                Shop Now
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "auto", maxHeight: "73vh" }}
              src={Image1}
              alt="Home Design by Freepik.com"
              className="carousel-img d-block w-100"
            />
            <Carousel.Caption>
              <h2 className="fw-bold">EXPLORE NEW ARRIVALS</h2>
              <NavLink to="/collections/all" className="bn14 mb-3">
                Shop Now
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselImage;
