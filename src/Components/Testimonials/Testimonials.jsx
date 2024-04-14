import React from "react";
import data from "../Utils/Slider.json";
import quotes from "/Quotes.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonials.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useGSAP(() => {
    gsap.from(".testimonial_heading_container", {
      scale:0,
      duration:0.6,
      scrollTrigger:{
        trigger:".testimonials",
        scroller:"body",
        start: "10% 70%",
      }
    });
    gsap.from(".testimonial__cards__container", {
      opacity:0,
      duration:0.6,
      x:-100,
      delay:0.5,
      scrollTrigger:{
        trigger:".testimonial__container",
        scroller:"body",
        start:"40% 80%"
      }
    });
  }, []);
  return (
    <div className="testimonials">
      <div className="testimonial__container container">
        <div className="heading__container testimonial_heading_container">
          <span className="testimonial__heading">
            <h1>What our Clients are saying</h1>
          </span>
          <p className="testimonial__description">
            Read what our satisfied clients have to say about our work and the
            modern and attractive results we deliver.
          </p>
        </div>
        <div className="testimonial__cards__container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={2}
            grabCursor={true}
            pagination={{
              el: ".bullet",
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 2,
              },
            }}
          >
            {data.map((value, index) => (
              <SwiperSlide key={index} className="testimonial__card">
                <div className="card__content">
                  <div className="testimonial__review">
                    <img src={quotes} alt="" />
                    <p>{value.review}</p>
                  </div>
                  <div className="image__container">
                    <img src={value.image} alt={value.name} />
                    <div className="person">
                      <span className="name">{value.name}</span>
                      <span className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="bullet__container">
            <div className="bullet__container__active"></div>
            <div className="bullet"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
