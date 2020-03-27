import React from 'react';

const BasicDetails = function(props) {
  //conditional logic for  a sale
  let prices;
  if (props.state.selectedStyle.selectedReducedPrice > 0) {
    prices = (
      <div>
        <div>
          <strike>${props.state.basicDetails.price}</strike>
        </div>
        <div>${props.state.selectedStyle.selectedReducedPrice}</div>
      </div>
    );
  } else {
    prices = <div>${props.state.basicDetails.price}</div>;
  }

  if (props.state.basicDetails.id !== undefined) {
    return (
      <section class="section">
        <div class="container">
          <h5>{props.state.basicDetails.category}</h5>
          <h1>{props.state.basicDetails.name}</h1>
          <h5>{prices}</h5>
        </div>
      </section>
    );
  } else {
    return <div>problem</div>;
  }
};

export default BasicDetails;
