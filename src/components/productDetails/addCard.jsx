import React from "react";

const AddToOutfitCard = ({ onClickButton, pageProduct }) => {
  return (
    <div class="column is-2">
      <div class="card">
        <button value="Add" onClick={e => onClickButton("Add", pageProduct.id)}>
          <icon>{"+++ADD 2 OUTFIT+++"}</icon>
        </button>
      </div>
    </div>
  );
};

export default AddToOutfitCard;
