import React, { useState, useEffect } from "react";
import {
  fetchOutfits,
  fetchOutfitsImages,
  fetchOutfitsReviews,
  addToOutfit,
  removeFromOutfit
} from "./outfitHelpers.js";
import Card from "./card.jsx";
import AddToOutfitCard from "./addCard.jsx";
import DirectionalButton from "./directionalButton.jsx";
import filterForShownItems from "./shownItemsHelper.js";

const List = ({
  listName,
  pageProduct,
  products,
  productsImages,
  onClickDetails,
  fetchRelatedDataAsync,
  productsReviews,
  paramsId
}) => {
  // Set Local State For Outfits
  var [outfits, setOutfits] = useState([]);
  var [outfitsImages, setOutfitsImages] = useState([]);
  var [outfitsReviews, setOutfitsReviews] = useState([]);

  // Set Local State For Conditionally Rendered Products
  let initialShownIndices = listName === "Outfit" ? [0, 1, 2] : [0, 1, 2, 3];
  var [shownIndices, setShownIndices] = useState(initialShownIndices);

  //conditionally set outfits to Outfit data if this list represents outfits
  if (listName === "Outfit") {
    products = outfits;
    productsImages = outfitsImages;
    productsReviews = outfitsReviews;
  }

  //HANDLE FETCHING DATA ON AFTER FIRST RENDER
  useEffect(() => {
    if (listName === "Related") {
      fetchRelatedDataAsync(paramsId);
    }
  }, []);

  useEffect(() => {
    if (listName === "Outfit") {
      fetchOutfits(setOutfits);
      fetchOutfitsImages(setOutfitsImages);
      fetchOutfitsReviews(setOutfitsReviews);
    }
  }, []);

  useEffect(() => {
    if (listName === "Outfit") {
      products = outfits;
      productsImages = outfitsImages;
      productsReviews = outfitsReviews;
    }
  }, [outfits, outfitsImages, outfitsReviews]);

  function onArrowClick(direction) {
    if (direction === "left") {
      if (shownIndices[0] !== 0) {
        let newShownIndices = shownIndices.map(idx => idx - 1);
        setShownIndices(newShownIndices);
      } else {
        console.log("Already at left-most item");
      }
    } else if (direction === "right") {
      if (shownIndices[shownIndices.length - 1] !== products.length - 1) {
        let newShownIndices = shownIndices.map(idx => idx + 1);
        setShownIndices(newShownIndices);
      } else {
        console.log("Already at right-most item");
      }
    }
  }

  function onClickButton(action, id) {
    if (action === "Add") {
      addToOutfit(id);
      fetchOutfits(setOutfits);
      fetchOutfitsImages(setOutfitsImages);
      fetchOutfitsReviews(setOutfitsReviews);
      // <- No update of shownIndices when you add one to the end ->
    }
    if (action === "Outfit") {
      removeFromOutfit(id);
      fetchOutfits(setOutfits);
      fetchOutfitsImages(setOutfitsImages);
      fetchOutfitsReviews(setOutfitsReviews);
      // on delete - move all shown indices down one if first shown index doesn't equal zero.
      if (shownIndices[0] !== 0) {
        let newShownIndices = shownIndices.map(idx => idx - 1);
        setShownIndices(newShownIndices);
      }
    }
  }
  return (
    <div class="columns">
      {shownIndices[0] !== 0 ? (
        <DirectionalButton
          arrowDirection={"left"}
          icon={"fas fa-arrow-left"}
          onArrowClick={onArrowClick}
        />
      ) : null}
      {listName === "Outfit" ? (
        <AddToOutfitCard
          pageProduct={pageProduct}
          onClickButton={onClickButton}
        />
      ) : null}
      {filterForShownItems(products, shownIndices).map((product, idx) => {
        return (
          <Card
            key={idx}
            listName={listName}
            pageProduct={pageProduct}
            product={product}
            productImage={
              filterForShownItems(productsImages, shownIndices)[idx] !==
              undefined
                ? filterForShownItems(productsImages, shownIndices)[idx]
                    .results[0].photos[0].thumbnail_url
                : null
            }
            onClickDetails={onClickDetails}
            onClickButton={onClickButton}
            productReviews={
              filterForShownItems(productsReviews, shownIndices)[idx]
            }
          />
        );
      })}
      {shownIndices[shownIndices.length - 1] !== products.length - 1 &&
      products.length > shownIndices.length ? (
        <DirectionalButton
          arrowDirection={"right"}
          icon={"fas fa-arrow-right"}
          onArrowClick={onArrowClick}
        />
      ) : null}
    </div>
  );
};

export default List;
