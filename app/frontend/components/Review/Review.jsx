import React from "react";
import Blockquote from "../Typography/Blockquote";
import "./Review.css";

const Review = ({ quoteParts, highlight, clientName, clientTitle }) => {
  return (
    <div className="review">
      <Blockquote>
        {quoteParts[0]}
        <span className="client-highlight">{highlight}</span>
        {quoteParts[1]}
      </Blockquote>
      <p className="review-client">
        <span className="review-client-name">{clientName}</span>, {clientTitle}
      </p>
    </div>
  );
};

export default Review;
