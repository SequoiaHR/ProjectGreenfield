import React, { useEffect } from "react";
import Card from "./card.jsx";

const List = ({
  listName,
  pageProduct,
  products,
  productsImages,
  onClickDetails,
  fetchRelatedDataAsync,
  //avgRating,
  addToOutfit, // FROM MAP DISPATCH TO STORE
  removeFromOutfit // FROM MAP DISPATCH TO STORE
}) => {
  //HANDLE FETCHING DATA ON AFTER FIRST RENDER
  useEffect(() => {
    fetchRelatedDataAsync(1);
  }, []);

  // handle button click functionality (Q: should I move this up one level?)
  function onClickButton(action, id) {
    if (action === "Add") {
      console.log("Add button clicked");
      console.log(
        "Now a dispatch should be sent to update the outfit of a given user with this new product"
      );
      addToOutfit(id);
    }
    if (action === "Outfit") {
      console.log("Button in Outfit Product List clicked");
      console.log(
        "Now a dispatch should be sent to update the outfit og a given user to remove this product clicked"
      );
      removeFromOutfit(id);
    }
  }
  return (
    <div>
      {products.map((product, idx) => {
        return (
          <Card
            key={idx}
            listName={listName}
            pageProduct={pageProduct}
            product={product}
            productImage={
              productsImages[idx] !== undefined
                ? productsImages[idx].results[0].photos[0].thumbnail_url
                : null
            }
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
