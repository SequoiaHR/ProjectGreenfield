import React, { useState, useEffect } from "react";
import {
  fetchOutfits,
  fetchOutfitsImages,
  addToOutfit,
  removeFromOutfit
} from "./outfitHelpers.js";
import Card from "./card.jsx";
import AddToOutfitCard from "./addCard.jsx";

const List = ({
  listName,
  pageProduct,
  products,
  productsImages,
  onClickDetails,
  fetchRelatedDataAsync
  //avgRating,
}) => {
  var [outfits, setOutfits] = useState([]);
  var [outfitsImages, setOutfitsImages] = useState([]);

  if (listName === "Outfit") {
    products = outfits;
    productsImages = outfitsImages;
  }
  //HANDLE FETCHING DATA ON AFTER FIRST RENDER
  useEffect(() => {
    if (listName === "Related") {
      fetchRelatedDataAsync(4);
    }
  }, []); 

  useEffect(() => {
    if (listName === "Outfit") {
      fetchOutfits(setOutfits);
      fetchOutfitsImages(setOutfitsImages);
    }
  }, []);

  useEffect(() => {
    if (listName === "Outfit") {
      products = outfits;
      productsImages = outfitsImages;
    }
  }, [outfits, outfitsImages]);

  function onClickButton(action, id) {
    if (action === "Add") {
      addToOutfit(id);
      fetchOutfits(setOutfits);
    }
    if (action === "Outfit") {
      removeFromOutfit(id);
      fetchOutfits(setOutfits);
    }
  }
  return (
    <div class="columns">
      {listName === "Outfit" ? (
        <AddToOutfitCard
          pageProduct={pageProduct}
          onClickButton={onClickButton}
        />
      ) : (
        <div></div>
      )}
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
