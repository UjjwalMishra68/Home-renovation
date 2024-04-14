import React from "react";
import "./Process.css";
const Process = () => {
  return (
    <div className="process">
      <div className="process__wrapper container">
      <span className="process__heading">
          <h1>Our Three Step Process</h1>
        </span>
      <div className="process__container">
        <div className="process_card">
          <span className="process_card_heading">1</span>
          <p className="process_card_description">
            We start by scheduling an initial consultation with our clients to
            understand their requirements and vision for their kitchen or
            bathroom renovation.
          </p>
          <p></p>
        </div>
        <div className="process_card">
          <span className="process_card_heading">2</span>
          <p className="process_card_description">
            Our experienced designers collaborate closely with clients to create
            modern, minimalistic designs that align with their preferences,
            paying attention to every detail, from layout to materials.
          </p>
          <p></p>
        </div>
        <div className="process_card">
          <span className="process_card_heading">3</span>
          <p className="process_card_description">
            After finalizing the design and materials, our skilled craftsmen
            execute the construction and installation process with precision and
            meticulous attention to detail.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Process;
