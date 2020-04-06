import React from 'react';
import './componentStyle.css';

const AddToBag = function(props) {
  //conditional logic to get around async
  if (props.state.selectedStyle.selectedStyleId !== undefined) {
    //this creates sizes for the selected style
    let selectedStyleId = props.state.selectedStyle.selectedStyleId;
    let allStyles = props.state.allStyles;
    var sizesObj = {};
    for (let index = 0; index < allStyles.length; index++) {
      if (allStyles[index].style_id === selectedStyleId) {
        sizesObj = allStyles[index].skus;
        break;
      }
    }
    var sizesNames = Object.keys(sizesObj);

    //logic for creating array of stock numbers based on selected size
    var sizesArray = [];
    if (props.state.cart.cartSize !== undefined) {
      let numberInStock = sizesObj[props.state.cart.cartSize];
      for (let i = 1; i < numberInStock + 1; i++) {
        sizesArray.push(i);
        //limit the quantity to 15
        if (i === 15) {
          break;
        }
      }
    }

    //conditional rendering for out of stock disabling
    var disabledOption = (
      <select className="selectStyling" onChange={props.selectProductStock}>
        {sizesArray.map((number, index) => {
          return (
            <option key={index} value={number}>
              {number}
            </option>
          );
        })}
      </select>
    );
    if (sizesArray.length === 0 && props.state.cart.cartSize) {
      disabledOption = (
        <select
          className="selectStyling"
          onChange={props.selectProductStock}
          disabled
        >
          <option>OUT</option>
          {sizesArray.map((number, index) => {
            return (
              <option key={index} value={number}>
                {number}
              </option>
            );
          })}
        </select>
      );
    } else if (sizesArray.length === 0 && !props.state.cart.cartSize) {
      disabledOption = (
        <select
          className="selectStyling"
          onChange={props.selectProductStock}
          disabled
        >
          <option>-</option>
          {sizesArray.map((number, index) => {
            return (
              <option key={index} value={number}>
                {number}
              </option>
            );
          })}
        </select>
      );
    }

    return (
      <div className="cartContainer">
        <div className="cartFirstRowContainer">
          <div className="dropdown-containerSize">
            <select
              className="selectStyling"
              onChange={props.selectProductSize}
            >
              <option>SELECT SIZE</option>
              {sizesNames.map((eachSize, index) => {
                return (
                  <option value={eachSize} key={index}>
                    {eachSize}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="dropdown-containerNumber">{disabledOption}</div>
        </div>
        <div className="cartSecondRowContainer">
          <div className="addToCartContainer">
            <a className="addToCartButton" onClick={props.addToCart}>
              ADD TO CART
            </a>
          </div>
          <a className="favoritesButton">
            <i className="far fa-star"></i>
          </a>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AddToBag;
