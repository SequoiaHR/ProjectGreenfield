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

const AddToBag = function() {
  return (
    <div>
      <div>
        <div class="select is-medium">
          <select>
            <option>choose size</option>
            {sizeTypes.map(eachSize => {
              return <option value={eachSize}>{eachSize}</option>;
            })}
          </select>
        </div>
        <div class="select is-medium">
          <select class="column is-one-third">
            <option>number</option>
            {orderNumbers.map(number => {
              return <option value={number}>{number}</option>;
            })}
          </select>
        </div>
      </div>
      <div>
        <button class="button is-medium">Add to cart</button>
        <button class="button is-medium">fav</button>
      </div>
    </div>
  );
};

export default AddToBag;
