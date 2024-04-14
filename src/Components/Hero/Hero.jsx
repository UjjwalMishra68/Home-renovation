import Play from "/Play button.svg";
import hero_img from "/Hero-image.jpg";
import Countup from "react-countup";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import "./Hero.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";

const Hero = () => {
  useGSAP(() => {
    gsap.from(
      ".hero__heading,.hero__description,.hero__button__container,.hero__counter",
      {
        opacity: 0,
        x: -70,
        duration: 0.6,
        stagger: 0.1,
      }
    );
    gsap.from(".hero__right", {
      scale: 0,
      duration: 0.6,
    });
  }, []);

  const [typeEffect] = useTypewriter({
    words: ["Redesigns", "Renovation", "Remodeling"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="hero" data-scroll>
      <div className="hero__content container">
        <div className="hero__left">
          <div className="hero__heading">
            <h1>
              Make Your Home Better With Expert Kitchen & Bathroom {typeEffect}!
            </h1>
            <p className="hero__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nam
              porro autem iusto. Tempore, deleniti!
            </p>
          </div>
          <div className="hero__button__container">
            <a href="#" className="btn">
              <span className="btn__text">
                <Link to="contact" smooth={true} offset={30}>
                  Contact us
                </Link>
              </span>
            </a>
            <div className="video__container">
              <div className="circle">
                <img src={Play} alt="" />
              </div>
              <span className="circle__paragraph">
                <p>Watch video</p>
              </span>
            </div>
          </div>
          <div className="hero__counter">
            <ul>
              <li>
                <span className="counter__heading">
                  +<Countup start={1150} end={1200} duration={4} />
                </span>
                <span className="counter__description">Project Completed</span>
              </li>
              <li>
                <span className="counter__heading">
                  +<Countup start={70} end={87} duration={4} />
                </span>
                <span className="counter__description">Hired Employees</span>
              </li>
              <li>
                <span className="counter__heading">
                  +<Countup start={0} end={12} duration={4} />
                </span>
                <span className="counter__description">
                  Years of Experience
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__right">
          <div className="mask">
            <img src={hero_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
