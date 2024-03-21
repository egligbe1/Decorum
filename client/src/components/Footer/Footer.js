import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";
import Fade from "@mui/material/Fade";

const Footer = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <footer className="footer-wrapper mt-5">
      <div className="container">
        <hr />
        <div className="socials d-flex">
          <a href="https://facebook.com/Decorium">
            <FaFacebook size={28} className="me-2" />
          </a>
          <a href="https://www.instagram.com/decoriumfurniture/">
            {" "}
            <AiFillInstagram size={28} className="me-2" />
          </a>
          <a href="https://www.pinterest.ca/decorium/">
            {" "}
            <GrPinterest size={28} className="me-2" />
          </a>
          <a href="https://www.linkedin.com/company/decorium/">
            {" "}
            <FaLinkedin size={28} />
          </a>
        </div>
        <div className="footer-main d-none d-md-block">
          <div className="row mt-2">
            <div className="col-md-4">
              <div className="card">
                <div className="card-title">Visit our Showroom</div>
                <div className="card-body">
                  <p>363 Supertest Rd , Toronto, Ontario</p>
                  <p>Canada, M3J 2M4</p>
                  <p
                    style={{ fontSize: "15px" }}
                    className="fw-bold text-secondary"
                  >
                    Showroom hours:
                  </p>
                  <p>Monday - Saturday: 11AM – 6PM</p>
                  <p>Sunday: 12PM – 5PM</p>
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/color/48/canada.png"
                    alt="canada"
                  />{" "}
                  <span className="flag-text">
                    Canadian family owned company
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-title">Our Services</div>
                <div className="card-body">
                  <Link to="/pages/room-planner">
                    <p>Room Planner</p>
                  </Link>
                  <Link to="/pages/corporate">
                    <p>Trade + Corporate Programs</p>
                  </Link>
                  <Link to="/pages/product-care-2">
                    <p>Product Care</p>
                  </Link>
                  <Link to="/pages/delivery-set-up">
                    <p>Delivery & Set Up</p>
                  </Link>
                  <Link to="/pages/financing">
                    <p>Financing Options</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-title">About Decorum</div>
                <div className="card-body">
                  <Link to="/pages/about">
                    <p>Our History</p>
                  </Link>
                  <Link to="/pages/contact">
                    <p>Contact</p>
                  </Link>
                  <Link to="/pages/testimonials">
                    <p>Testimonials</p>
                  </Link>
                  <Link to="/pages/career">
                    <p>Career Opportunities</p>
                  </Link>
                  <Link to="/pages/in-the-media">
                    <p>In the Media</p>
                  </Link>
                  <Link to="/pages/faq">
                    <p>FAQ</p>
                  </Link>
                  <Link to="/pages/privacy-policy">
                    <p>Privacy Policy</p>
                  </Link>
                  <Link to="/pages/accessibility">
                    <p>Accessibility Policy</p>
                  </Link>
                  <Link to="/pages/terms-conditions">
                    <p>Terms & Conditions</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* small screen footer */}
        <div className="footer-mobile d-flex flex-column d-md-none">
          <hr />
          <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontSize: "18px" }}>
                Visit our Showroom
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="card-body">
                  <p>363 Supertest Rd , Toronto, Ontario</p>
                  <p>Canada, M3J 2M4</p>
                  <p
                    style={{ fontSize: "15px" }}
                    className="fw-bold text-secondary"
                  >
                    Showroom hours:
                  </p>
                  <p>Monday - Saturday: 11AM – 6PM</p>
                  <p>Sunday: 12PM – 5PM</p>
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/color/48/canada.png"
                    alt="canada"
                  />{" "}
                  <span className="flag-text">
                    Canadian family owned company
                  </span>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontSize: "18px" }}>Our Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="card-body">
                  <Link to="/pages/room-planner">
                    <p>Room Planner</p>
                  </Link>
                  <Link to="/pages/corporate">
                    <p>Trade + Corporate Programs</p>
                  </Link>
                  <Link to="/pages/product-care-2">
                    <p>Product Care</p>
                  </Link>
                  <Link to="/pages/delivery-set-up">
                    <p>Delivery & Set Up</p>
                  </Link>
                  <Link to="/pages/financing">
                    <p>Financing Options</p>
                  </Link>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{ fontSize: "18px" }}>
                About Decorum
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="card-body">
                  <Link to="/pages/about">
                    <p>Our History</p>
                  </Link>
                  <Link to="/pages/contact">
                    <p>Contact</p>
                  </Link>
                  <Link to="/pages/testimonials">
                    <p>Testimonials</p>
                  </Link>
                  <Link to="/pages/career">
                    <p>Career Opportunities</p>
                  </Link>
                  <Link to="/pages/in-the-media">
                    <p>In the Media</p>
                  </Link>
                  <Link to="/pages/faq">
                    <p>FAQ</p>
                  </Link>
                  <Link to="/pages/privacy-policy">
                    <p>Privacy Policy</p>
                  </Link>
                  <Link to="/pages/accessibility">
                    <p>Accessibility Policy</p>
                  </Link>
                  <Link to="/pages/terms-conditions">
                    <p>Terms & Conditions</p>
                  </Link>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <hr />
        <div className="country">
          <select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            style={{
              border: "none",
              cursor: "pointer",
              marginRight: "5px",
            }}
            className="d-none d-lg-flex border-1"
          >
            <option value="">CAD $</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
          </select>
          {selectedCurrency && (
            <p className="me-2">Selected currency: {selectedCurrency}</p>
          )}
        </div>
        <div className="foot-end d-flex flex-column flex-sm-row mt-4 mb-4 justify-content-between">
          <div className="copyright mb-2 mb-sm-0">
            Copyright ©{new Date().getFullYear()} Decorum
          </div>
          <div className="payment-gateways">
            <img
              width="33"
              height="33"
              src="https://img.icons8.com/color/32/amex.png"
              alt="amex"
              className="me-2"
            />
            <img
              width="33"
              height="33"
              src="https://img.icons8.com/color/32/apple-pay.png"
              alt="apple-pay"
              className="me-2"
            />
            <img
              width="33"
              height="33"
              src="https://img.icons8.com/fluency/32/diners-club.png"
              alt="diners-club"
              className="me-2"
            />
            <img
              width="33"
              height="33"
              src="https://img.icons8.com/color/32/discover.png"
              alt="discover"
              className="me-2"
            />
            <img
              width="33"
              height="33"
              src="https://img.icons8.com/color/32/mastercard-logo.png"
              alt="mastercard-logo"
              className="me-2"
            />
            <img
              width="33"
              height="33"
              src="https://img.icons8.com/color-glass/32/visa.png"
              alt="visa"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
