import React from "react";
import "./Contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Contact = () => {
  useGSAP(() => {
    gsap.from(".contact_heading_container", {
      scale: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".contact",
        scroller: "body",
        start: "10% 70%",
      },
    });
    gsap.from(".contact__heading,.contact__description,.contact__location li", {
      opacity: 0,
      x: -70,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".contact",
        scroller: "body",
        start: "20% 70%",
      },
    });
    gsap.from(".contact__right", {
      x: 70,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".contact",
        scroller: "body",
        start: "20% 70%",
      },
    });
  }, []);
  return (
    <div className="contact">
      <div className="contact__container container">
        <div className="heading__container contact_heading_container">
          <span className="sub-heading">
            <p>CONTACT</p>
          </span>
          <h1>Get in Touch</h1>
        </div>
        <div className="contact__wrapper">
          <div className="contact__left">
            <span className="contact__heading">Send us a message</span>
            <p className="contact__description">
              Have a question or ready to start your renovation project? We'd
              love to hear from you! Feel free to reach out to us using the
              contact details below, or simply fill out the form and we'll get
              back to you as soon as possible.
            </p>
            <ul className="contact__location">
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
          <div className="contact__right">
            <form action="#">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />

              <label htmlFor="Phone">Phone Number</label>
              <input
                type="number"
                name="Phone"
                id="Phone"
                placeholder="Enter your mobile number"
              />

              <label htmlFor="Email">Your Email</label>
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Enter your email id"
              />

              <label htmlFor="Message">Write your message here</label>
              <textarea
                name="Message"
                id="Message"
                cols="30"
                rows="10"
                placeholder="Enter your message"
              ></textarea>
              <button className="btn contact__button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
