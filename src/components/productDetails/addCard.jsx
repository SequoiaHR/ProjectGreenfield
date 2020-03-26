import React from "react";

const AddToOutfitCard = ({
  onClickButton,
  pageProduct
}) => {
  return (
    <div class="Related-Product-Card">
        <button value="Add" onClick={(e) => onClickButton("Add", pageProduct.id)}> 
          <icon>{"+++ADD+++"}</icon>
        </button>
    </div>
  );
};

//Information Needed (CARD STATE NEEDED)
  // OnClickButton <- should take current product page id and add that to user's outfit list. This onClickButton function will conditionally execute based on value of button clicked. 

export default AddToOutfitCard;
