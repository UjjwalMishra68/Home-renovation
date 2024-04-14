import "./Navbar.css";
import { Link } from 'react-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from(".nav__left", {
      opacity: 0,
      duration: 0.8,
      x: -70,
    });
    gsap.from(".nav__links__container", {
      opacity: 0,
      duration: 0.8,
      x: 70,
    });
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__container container">
        <div className="nav__left">
          <span className="logo">LOGO</span>
        </div>
        <div className="nav__right">
          <ul>
            <li className="nav__links__container">
              <a className="nav__links">
                <span className="links__container">
                  <span className="links__inner">Home</span>
                  <span className="hover__text"><Link to="hero" smooth={true} offset={0}>Home</Link></span>
                </span>
              </a>
            </li>
            <li className="nav__links__container">
              <a className="nav__links">
                <span className="links__container">
                  <span className="links__inner">About</span>
                  <span className="hover__text"><Link to="about" smooth={true} offset={0}>About</Link></span>
                </span>
              </a>
            </li>
            <li className="nav__links__container">
              <a className="nav__links">
                <span className="links__container">
                  <span className="links__inner">Services</span>
                  <span className="hover__text"><Link to="services" smooth={true} offset={-10}>Services</Link></span>
                </span>
              </a>
            </li>
            <li className="nav__links__container">
              <button className="btn">
                <span className="btn__text"><Link to="contact" smooth={true} offset={30}>Contact</Link></span>
              </button>
            </li>
            <li>
              <i className="ri-menu-line"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
