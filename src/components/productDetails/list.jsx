import React from "react";
import Card from "./card.jsx";

const List = ({
  listName,
  pageProduct,
  products,
  productsImgs,
  onClickDetails,
  //avgRating,
  addToOutfit, // FROM MAP DISPATCH TO STORE
  removeFromOutfit // FROM MAP DISPATCH TO STORE
}) => {
  // handle button click functionality (Q: should I move this up one level?) 
  function onClickButton(action, id) {
    if (action === "Add") {
      console.log("Add button clicked");
      console.log("Now a dispatch should be sent to update the outfit of a given user with this new product")
      addToOutfit(id);
    }
    if (action === "Outfit") {
      console.log("Button in Outfit Product List clicked");
      console.log("Now a dispatch should be sent to update the outfit og a given user to remove this product clicked")
      //removeFromOutfit(id)
    }
  }
  return (
    <div>
      {products.map((product, idx) => {
        return (
          <Card
            listName={listName}
            pageProduct={pageProduct}
            product={product}
            productImg={productsImgs[idx]}
            onClickDetails={onClickDetails}
            onClickButton={onClickButton}
            //avgRating={avgRating}
          />
        );
      })}
    </div>
  );
};

export default List;
