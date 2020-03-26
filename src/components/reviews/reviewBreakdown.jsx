import React from "react";
import FeaturesBreakdown from "./featuresBreakdown.jsx";

const ReviewBreakdown = ({ filters, metadata, toggleHandler, clearHandler }) => {

  return (
    <div>
      <div>
        Overall rating goes here (from store?)
      </div>
      <div>
        XXX% of reviewers recommend this product
      </div>
      {metadata.ratings
        ? <div>
          <div data-stars="5" onClick={(event) => toggleHandler(Number(event.target.dataset.stars))}>
            5 stars bar ({metadata.ratings[5] || "0"})
          </div>
          <div data-stars="4" onClick={(event) => toggleHandler(Number(event.target.dataset.stars))}>
            4 stars bar ({metadata.ratings[4] || "0"})
          </div>
          <div data-stars="3" onClick={(event) => toggleHandler(Number(event.target.dataset.stars))}>
            3 stars bar ({metadata.ratings[3] || "0"})
          </div>
          <div data-stars="2" onClick={(event) => toggleHandler(Number(event.target.dataset.stars))}>
            2 stars bar ({metadata.ratings[2] || "0"})
          </div>
          <div data-stars="1" onClick={(event) => toggleHandler(Number(event.target.dataset.stars))}>
            1 stars bar ({metadata.ratings[1] || "0"})
          </div>
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