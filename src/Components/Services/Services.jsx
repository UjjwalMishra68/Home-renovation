import React from "react";
import Bath from "/bath.svg";
import Kitchen from "/Kitchen.svg";
import Cabinet from "/Cabinet.svg";
import "./Services.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.from(".services_heading_container", {
      scale: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".services",
        scroller: "body",
        start: "top 80%",
      },
    });
    gsap.from(".cards__container .card", {
      y: 90,
      duration: 0.6,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".cards__container",
        scroller: "body",
        start: "10% 70%",
      },
    });
  }, []);
  return (
    <div className="services">
      <div className="services__wrapper container">
        <div className="heading__container services_heading_container">
          <span className="sub-heading">Our Services</span>
          <h1 className="services__heading">Our Expert Solutions for You</h1>
        </div>
        <div className="cards__container">
          <div className="card">
            <img src={Kitchen} alt="" />
            <span className="card__heading">Kitchen Remodeling</span>
            <p className="card__description">
              Transform your kitchen into a modern and funtional space
            </p>
            <div className="cards__details">
              <span className="details">View details </span>
              <i class="ri-arrow-right-wide-line"></i>
            </div>
          </div>
          <div className="card">
            <img src={Bath} alt="" />
            <span className="card__heading">Bath Renovation</span>
            <p className="card__description">
              Create a luxurious and relaxing bathroom retreat
            </p>
            <div className="cards__details">
              <span className="details">View details </span>
              <i class="ri-arrow-right-wide-line"></i>
            </div>
          </div>
          <div className="card">
            <img src={Cabinet} alt="" />
            <span className="card__heading">Custom Cabinetry</span>
            <p className="card__description">
              Enhance your home with beautifully crafted custom cabinetry
            </p>
            <div className="cards__details">
              <span className="details">View details </span>
              <i class="ri-arrow-right-wide-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
