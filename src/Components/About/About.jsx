import React from "react";
import img from "/About.jpg";
import "./About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about__container",
        scroller: "body",
        start: "20% 80%",
      },
    });
    tl.from(
      ".about__heading,.about__description,.about_btn_container",
      {
        opacity: 0,
        x: 70,
        duration: 0.4,
        stagger: 0.25,
        delay: 0.3,
      },
      "about"
    );

    tl.from(
      ".about__left",
      {
        x: -70,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
      },
      "about"
    );
  });
  return (
    <div className="about">
      <div className="about__container container">
        <div className="about__left">
          <div className="mask about__mask">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h1 className="about__heading">Meet Our Talented Renovation Team</h1>
          <p className="about__description">
            Welcome to LOGO – Your Renovation Experts. From kitchen remodels to
            bathroom makeovers, we specialize in crafting beautiful spaces
            tailored to your unique style. With our commitment to excellence,
            let us bring your renovation dreams to life.
          </p>
          <div className="about_btn_container">
            <a href="#" className="btn">
              <span className="btn__text">Know More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
