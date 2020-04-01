import React from 'react';

let sizeTypes = ['XS', 'S', 'M', 'L', 'XL'];
let orderNumbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

const containerStyle = {
  marginTop: '20px',
  marginBottom: '20px'
};

const AddToBag = function() {
  return (
    <div style={containerStyle}>
      <div className="columns">
        <div className="column">
          <div className="select is-medium is-fullwidth">
            <select>
              <option>SELECT SIZE</option>
              {sizeTypes.map((eachSize, index) => {
                return (
                  <option value={eachSize} key={index}>
                    {eachSize}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="column ">
          <div className="select is-medium " style={{ width: '50%' }}>
            <select>
              <option>NUM</option>
              {orderNumbers.map((number, index) => {
                return (
                  <option key={index} value={number}>
                    {number}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column ">
          <button className="button is-medium" style={{ width: '255px' }}>
            ADD TO CART
          </button>
        </div>
        <div className="column">
          <button className="button is-medium">FAV</button>
        </div>
      </div>
    </div>
  );
};

export default AddToBag;
