import React from "react";
import calculateRating from "../../calculateRating.js";
import "./reviews.css";

import FeaturesBreakdown from "./featuresBreakdown.jsx";
import StarRating from "../starRating.jsx";

const ReviewBreakdown = ({ filters, metadata, toggleHandler, clearHandler }) => {
  var total = 0;
  var percent = 0;

  // logic for avoiding errors or NaN percent displays
  if (metadata.recommended !== undefined && !(metadata.recommended[0] === 0 && metadata.recommended[1] === 0)) {
  total = (metadata.recommended[0] || 0) + (metadata.recommended[1] || 0);
  percent = Math.round(((metadata.recommended[1] || 0) / total) * 100);
  }

  const overallRating = calculateRating(metadata);

  return (
    <div className="tile is-child">
      <div className="level">
        <div className="level-left">
          {overallRating === 0
            ? <div className="level-item is-size-4">No ratings</div>
            : <div className="level-item is-size-1">{overallRating}</div>}
        </div>
        <div className="level-right">
          <div className="level-item"><StarRating rating={overallRating} width="25" height="25" /></div>
        </div>
      </div>

      {metadata.recommended !== undefined && Object.keys(metadata.recommended).length !== 0
        ? <div className="subtitle">{percent}% of reviewers recommend this product</div>
        : null}

      {metadata.ratings
        ? <div>
          {[5, 4, 3, 2, 1].map((num) => { // for each rating from 5 to 1,
          return (
            <div key={num}>
              {num === 1 // handle singular or plural and display star rating toggle link
                ? <span className="filter-option is-size-7" id={`${num}-star-filter`} data-stars={num} onClick={toggleHandler}>{num} star</span>
                : <span className="filter-option is-size-7" id={`${num}-star-filter`} data-stars={num} onClick={toggleHandler}>{num} stars</span>}
              <progress // progress bar
                className="progress is-small is-primary"
                value={metadata.ratings[num] || 0}
                max={total}>
              </progress>
            </div>
          );
          })}
        </div>
        : null}

      {filters.size > 0
        ? <div className="actionable is-size-7" id="clear-filters" onClick={clearHandler}>Remove all filters</div>
        : null}
        
      <div id="features-breakdown">
        <FeaturesBreakdown metadata={metadata} />
      </div>
    </div>
  );
};

export default ReviewBreakdown;