import React from 'react';
import "./Testimonial.css";

const Testimonial = ({ children }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <h2 className="testimonial-title">Client Highlight</h2>
        <div className="review-list">{children}</div>
      </div>
    </div>
  );
};

export default Testimonial;
