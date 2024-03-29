import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export const RatingPopUp = (props) => {
    const [rating , setRating] = useState(null)
    const [hover, setHover] = useState(null)
  return (
    <div className="ratingPopUp" style={{ display: props.toggle === "rate" ? "flex" : "none" }}>
      <h2>Poop Rating</h2>
      <div>
      {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
               type="radio"
               value={currentRating}
               onClick={() => setRating(currentRating)}
              />
              <FaStar
              className="star"
               size={50} 
               color={currentRating <= (hover || rating) ? "#ffc107" : "#030303"}
               onMouseEnter={() => setHover(currentRating)}
               onMouseLeave={() => setHover(null)}
               />
            </label>
          );
        })}
      </div>
        <button onClick={() => props.togglePopUp("w")}>Exit</button>
    </div>
  );
};
