import React from "react";
import FeaturesBreakdown from "./featuresBreakdown.jsx";

const ReviewBreakdown = ({ filters, metadata, toggleHandler, clearHandler }) => {
  var total = 0;

  if (metadata.recommended) {
  total = metadata.recommended[0] + metadata.recommended[1];
  var percent = Math.round((metadata.recommended[1] / total) * 100);
  }

  return (
    <div className="tile is-child">
      <div className="title">
        Overall rating goes here (from store?)
      </div>

      {total
        ? <div className="subtitle">{percent}% of reviewers recommend this product</div>
        : null}
      {metadata.ratings
        ? <div>
          {[5, 4, 3, 2, 1].map((num) => { // for each rating from 5 to 1,
          return (
            <div key={num}>
              {num === 1 // handle singular or plural and display star rating toggle link
                ? <span data-stars={num} onClick={(event) => toggleHandler(Number(event.target.dataset.stars))}>{num} star</span>
                : <span data-stars={num} onClick={(event) => toggleHandler(Number(event.target.dataset.stars))}>{num} stars</span>}
              <progress // progress bar
                className="progress is-small is-success"
                value={metadata.ratings[num]}
                max={total}>{metadata.ratings[num]}
              </progress>
            </div>
          );
          })}
        </div>
        : null}
      {filters.size > 0
        ? <div onClick={clearHandler}>Remove all filters</div>
        : null}
      <FeaturesBreakdown metadata={metadata} />
    </div>
  );
};

export default ReviewBreakdown;