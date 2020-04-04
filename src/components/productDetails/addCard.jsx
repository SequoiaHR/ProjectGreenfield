import React from 'react';
import './addCard.css';

const AddToOutfitCard = ({ onClickButton, pageProduct }) => {
  return (
    <div className="column is-3">
      <div
        className="card is-vertical-centered has-background-grey-lighter minCardHeight"
      >
        <button
          className="button is-medium is-vertical-centered addCardButton"
          value="Add"
          onClick={e => onClickButton('Add', pageProduct.id)}
        >
          <p>Add{'\u00A0'}</p>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default AddToOutfitCard;
