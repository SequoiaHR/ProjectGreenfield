import React from 'react';
import SocialMedia from './SocialMedia.jsx';
import './componentStyle.css';

const productNameStyle = {
  fontSize: '32pt',
  color: 'black'
};

const BasicDetails = function(props) {
  //conditional logic for  a sale
  let prices;
  if (props.state.selectedStyle.selectedReducedPrice > 0) {
    prices = (
      <div>
        <strike style={{ float: 'left', display: 'inline', width: '10%' }}>
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
        <div style={productNameStyle}>{props.state.basicDetails.name}</div>
        <div className="flexContainer">
          <div style={{ fontSize: '15pt' }}>{prices}</div>
          <SocialMedia state={props.state} />
        </div>
      </div>
    );
  } else {
    return <div>problem</div>;
  }
};

export default BasicDetails;
