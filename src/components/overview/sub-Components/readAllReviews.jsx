import React from 'react';
import './componentStyle.css';

const ReadAllReviews = function(props) {
  var reviewsDiv = <div></div>;
  if (Object.keys(props.allReviews.ratings).length > 0) {
    const sumObj = obj => Object.values(obj).reduce((a, b) => a + b);
    let sumReviews = sumObj(props.allReviews.ratings);
    if (sumReviews !== 0) {
      reviewsDiv = (
        <a
          className="readAllReviews"
          href="#reviews-section"
          // onClick={props.handleSeeAllReviewsClick}
        >{`Read all ${sumReviews} reviews!`}</a>
      );
    }
  }
  return reviewsDiv;
};

export default ReadAllReviews;
