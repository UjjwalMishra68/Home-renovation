import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__card">
          <div className="company">
            <div className="brand">LOGO</div>
            <p className="brand__description">
              Company your premier destination for luxury and modern interior
              design
            </p>
            <ul className="social__icon">
              <li>
                <i class="ri-facebook-circle-fill"></i>
              </li>
              <li>
                <i class="ri-instagram-line"></i>
              </li>
              <li>
                <i class="ri-linkedin-box-fill"></i>
              </li>
              <li>
                <i class="ri-twitter-x-line"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__card">
          <div className="footer__services common">
            <span className="footer_links_heading">Services</span>
            <ul className="footer__links">
              <li>Kitchen Renovation</li>
              <li>Bathroom Remodeling</li>
              <li>Custom Cabinetry</li>
              <li>Bath-tub Installation</li>
            </ul>
          </div>
        </div>
        <div className="footer__card">
          <div className="footer__links common">
            <span className="footer_links_heading ">Links</span>
            <ul className="footer__services">
              <li>
                <Link to="hero" smooth={true} offset={-100}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={0}>
                  About
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} offset={0}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="testimonials" smooth={true} offset={60}>
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__card">
          <div className="footer__contact common">
            <span className="footer_links_heading">Contact-Details</span>
            <ul>
              <li>
                <i class="ri-map-pin-fill address"></i>
                FF-42, Procube Avenue, NY, USA
              </li>
              <li>
                <i class="ri-phone-fill address"></i>
                +1-8755856858
              </li>
              <li>
                <i class="ri-mail-fill address"></i>
                info@xyz.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
