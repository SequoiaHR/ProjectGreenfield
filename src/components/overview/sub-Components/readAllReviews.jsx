import React from 'react';
import './componentStyle.css';

const ReadAllReviews = function(props) {
  const sumObj = obj => Object.values(obj).reduce((a, b) => a + b);
  let sumReviews = sumObj(props.allReviews.ratings);
  let reviewsDiv = <div></div>;
  if (sumReviews !== 0) {
    reviewsDiv = (
      <div
        className="readAllReviews"
        onClick={props.handleSeeAllReviewsClick}
      >{`Read all ${sumReviews} reviews!`}</div>
    );
  }
  return reviewsDiv;
};

export default ReadAllReviews;
