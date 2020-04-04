import React from 'react';
import SocialMedia from './SocialMedia.jsx';
import './componentStyle.css';
import StarRating from '../../starRating.jsx';
import calculateRating from '../../../calculateRating';
import ReadAllReviews from './readAllReviews.jsx';

const BasicDetails = function(props) {
  //conditional logic for  a sale
  let prices;
  if (props.state.selectedStyle.selectedReducedPrice > 0) {
    prices = (
      <div>
        <strike className="strikeStyle">
          ${props.state.basicDetails.price}
        </strike>
        <div>${props.state.selectedStyle.selectedReducedPrice}</div>
      </div>
    );
  } else {
    prices = <div>${props.state.basicDetails.price}</div>;
  }

  if (props.state.basicDetails.id !== undefined) {
    return (
      <div>
        <div>{props.state.basicDetails.category}</div>
        <div className="productNameStyle">{props.state.basicDetails.name}</div>
        <div className="flexContainer">
          <div style={{ fontSize: '15pt' }}>{prices}</div>
          <div className="starContainerStyling">
            <StarRating
              rating={calculateRating(props.reviews)}
              width={14}
              height={7}
            />
          </div>
          <ReadAllReviews
            allReviews={props.reviews}
            handleSeeAllReviewsClick={props.handleSeeAllReviewsClick}
          />
          <SocialMedia state={props.state} />
        </div>
      </div>
    );
  } else {
    return <div>problem</div>;
  }
};

export default BasicDetails;
