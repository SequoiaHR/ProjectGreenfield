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
      <div data-stars="5" onClick={(event) => toggleHandler(Number(event.target.dataset.stars))}>
        Placeholder stars progress bar with filter click handler
      </div>
      {filters.size > 0 ? <div onClick={clearHandler}>Remove all filters</div>
      : null}
      <FeaturesBreakdown metadata={metadata} />
    </div>
  );
};

export default ReviewBreakdown;