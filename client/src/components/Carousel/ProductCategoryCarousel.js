import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// images
import accents from "../../assets/images/georgi_wide_sideboard.webp";
import dining from "../../assets/images/dining.jpg";
import livingroom from "../../assets/images/living_room.jpg";
import bedroom from "../../assets/images/bedroom.jpg";
import stressless from "../../assets/images/stressless.jpg";
import "./CarouselImg.css";

const ProductCategoryCarousel = () => {
  return (
    <>
      <div className="container">
        {/* large screeen */}
        <div className="grid-container d-none d-sm-grid">
          <div className="item">
            <div>
              <div className="image-wrapper">
                <Link to="collections/living-room">
                  <img src={livingroom} alt="livingroom" />
                </Link>
                <Link to="collections/living-room">
                  <div className="image-text">Living Room</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-wrapper">
              <Link to="collections/beds">
                <img src={bedroom} alt="bedroom" />
              </Link>
              <Link to="collections/beds">
                <div className="image-text">Bedroom</div>
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="image-wrapper">
              <Link to="collections/stressless-gallery">
                <img src={stressless} alt="stressless" />
              </Link>
              <Link to="collections/stressless-gallery">
                <div className="image-text">Stressless</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="d-block d-sm-none carousel  mt-5 mx-2">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
          >
            <SwiperSlide>
              <Link to="collections/living-room">
                <img
                  style={{ height: "40vh", width: "100%", objectFit: "cover" }}
                  src={livingroom}
                  alt="modern-luxury-bedroom-freepik"
                  className="product-img d-block w-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/collections/bed">
                <img
                  style={{ height: "40vh", width: "100%", objectFit: "cover" }}
                  src={bedroom}
                  alt="modern-luxury-bedroom-freepik"
                  className="product-img d-block w-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/collections/stressless-gallery">
                <img
                  style={{ height: "40vh", width: "100%", objectFit: "cover" }}
                  src={stressless}
                  alt="stressless"
                  className="product-img d-block w-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/collections/dining">
                {" "}
                <img
                  style={{ height: "40vh", width: "100%", objectFit: "cover" }}
                  src={dining}
                  alt="dining"
                  className="product-img d-block w-100"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to='/collections/accent-chairs'><img
                style={{ height: "40vh", width: "100%", objectFit: "cover" }}
                src={accents}
                alt="accents"
                className="product-img d-block w-100"
              /></Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="grid2-container d-none d-sm-flex">
          <div className="item2">
            <div className="imageWrap">
              <Link to="collections/dining">
                <img src={dining} alt="dining" />
              </Link>
              <Link to="collections/dining">
                <div className="imgText">Dining Room</div>
              </Link>
            </div>
          </div>
          <div className="item2">
            <div className="imageWrap">
              <Link to="collections/accent-chairs">
                <img src={accents} alt="accent chairs" />
              </Link>
              <Link to="collections/accent-chairs">
                <div className="image-text">Accents</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategoryCarousel;
