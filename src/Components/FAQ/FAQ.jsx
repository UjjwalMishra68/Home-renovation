import React from "react";
import data from "../Utils/Faq.json";
import "react-accessible-accordion/dist/fancy-example.css";
import "./FAQ.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const FAQ = () => {
  useGSAP(() => {
    gsap.from(".faq_heading_container", {
      scale: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".faq__container",
        scroller: "body",
        start: "10% 70%",
      },
    });
    gsap.from(".accordion__item", {
      opacity: 0,
      duration: 0.6,
      y: 100,
      delay: 0.4,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".accordion__container",
        scroller: "body",
        start: "5% 70%",
      },
    });
  }, []);
  return (
    <div className="faq">
      <div className="faq__container container">
        <div className="heading__container faq_heading_container">
          <span className="faq__heading">
            <h1>FAQ</h1>
          </span>
          <p className="faq__description">
            Here you will find the answers to the frequently asked questions.
          </p>
        </div>
        <div className="accordion__container">
          <Accordion allowMultipleExpanded={false} preExpanded={["item-0"]}>
            {data.map((value, index) => (
              <AccordionItem key={index} uuid={`item-${index}`}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="question">{value.question}</span>
                    <i className="ri-add-line"></i>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="answer">{value.answer}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
