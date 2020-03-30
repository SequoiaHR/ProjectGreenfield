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
  }, [paramsId]);

  useEffect(() => {
    if (listName === "Outfit") {
      fetchOutfits(setOutfits);
      fetchOutfitsImages(setOutfitsImages);
      fetchOutfitsReviews(setOutfitsReviews);
    }
  }, [paramsId]);

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

  function checkForMissingShownImage(productsImages, shownIndices, idx) {
    // checks to see if results have come in yet and whether or not there are actual results to work with
    if (filterForShownItems(productsImages, shownIndices)[idx] !== undefined) {
      if (
        filterForShownItems(productsImages, shownIndices)[idx].results.length >
        0
      ) {
        return true;
      }
    } else {
      return false;
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
      <div className="column is-1 is-vertical-centered">
        {shownIndices[0] !== 0 ? (
          <DirectionalButton
            arrowDirection={"left"}
            icon={"fas fa-chevron-left"}
            onArrowClick={onArrowClick}
          />
        ) : null}
      </div>
      {listName === "Outfit" ? (
        <AddToOutfitCard
          pageProduct={pageProduct}
          onClickButton={onClickButton}
        />
      ) : null}
      {filterForShownItems(products, shownIndices).map((product, idx) => {
        return (
          <div className="column is-one-fifth">
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
          </div>
        );
      })}
      <div className="column is-1 is-vertical-centered">
        {shownIndices[shownIndices.length - 1] !== products.length - 1 &&
        products.length > shownIndices.length ? (
          <DirectionalButton
            arrowDirection={"right"}
            icon={"fas fa-chevron-right"}
            onArrowClick={onArrowClick}
          />
        ) : null}
      </div>
      <div className="column is-1">
        <title>{listName}</title>
      </div>
    </div>
  );
};

export default List;
