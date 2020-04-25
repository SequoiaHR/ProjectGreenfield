import React from "react";
import EMPTY_STAR from "../starAssets/empty-star.png";
import FULL_STAR from "../starAssets/full-star.png";
import HALF_STAR from "../starAssets/half-star.png";
import QUARTER_STAR from "../starAssets/quarter-star.png";
import THREE_QUARTER_STAR from "../starAssets/three-quarter-star.png";

const StarRating = ({ rating, width, height }) => {
  let starArray = [];

  if (rating >= 0 && rating <= 5) {
    while (rating > 0) {
      if (rating >= 1) {
        starArray.push(FULL_STAR);
        rating = rating - 1;
      } else {
        if (rating >= 0.875) {
          starArray.push(FULL_STAR);
          rating = 0;
        } else if (rating >= 0.625 && rating < 0.875) {
          starArray.push(THREE_QUARTER_STAR);
          rating = 0;
        } else if (rating >= 0.375 && rating < 0.625) {
          starArray.push(HALF_STAR);
          rating = 0;
        } else if (rating >= 0.125 && rating < 0.375) {
          starArray.push(QUARTER_STAR);
          rating = 0;
        } else if (rating < 0.125) {
          starArray.push(EMPTY_STAR);
          rating = 0;
        }
      }
    }
  }
  while (starArray.length < 5) {
    starArray.push(EMPTY_STAR);
  }

  return (
    <span>
      {starArray.map((el, idx) => (
        <img
          width={width}
          height={height}
          key={`star ${idx}`}
          id={`star ${idx}`}
          alt={`star ${idx + 1}`}
          src={el}
        />
      ))}{" "}
    </span>
  );
};

export default StarRating;
