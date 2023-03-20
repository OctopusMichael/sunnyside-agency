import React, { useState } from "react";
import testimonial from "../data/testimonial.json";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonial);

  return (
    <section className="container-fluid section-container-testimonial">
      <div className="section-title">
        <h4>CLIENT TESTIMONIALS</h4>
      </div>
      <div className="row">
        {testimonials.map((element) => {
          return (
              <div
                key={element.id}
                className="col-12 col-md-4 section-testimonial"
              >  
                <div className={element.avatar} />
                <p>{element.testimonial}</p>
                <div>
                  <h3>{element.name}</h3>
                  <h5>{element.position}</h5>
                </div>
              </div>
           
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
