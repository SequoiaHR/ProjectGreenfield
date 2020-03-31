import React from "react";
import "./addCard.css";

const AddToOutfitCard = ({ onClickButton, pageProduct }) => {
  return (
    <div class="column is-3">
      <div class="card is-vertical-centered has-background-grey-lighter">
        <button
          class="button is-medium is-vertical-centered addCardButton"
          value="Add"
          onClick={e => onClickButton("Add", pageProduct.id)}
        >
          <p>Add </p><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default AddToOutfitCard;
