import React from "react";
import arrow from "../images/icon-arrow-down.svg";

function Hero() {
  return (
    <section className="container-fluid section-container-hero g-0">
      <div className="section-hero ">
        <h1>
          {" "}
          WE ARE CREATIVES
        </h1>
        <img src={arrow} />
      </div>
    </section>
  );
}

export default Hero;
