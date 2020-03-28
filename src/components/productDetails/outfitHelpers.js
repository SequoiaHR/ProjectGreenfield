import React from "react";
import { fetchProducts } from "../../redux/actions/getProductsHelper.js";
import { fetchImages } from "../../redux/actions/getImagesHelper.js";
import { fetchReviews } from "../../redux/actions/getReviewsHelper.js";

//FUNC TO GRAB OUTFIT IMAGES
export function fetchOutfitsReviews(setOutfitsReviews) {
  let localOutfit = JSON.parse(window.localStorage.getItem("outfit"));
  if (localOutfit === null) {
    console.log("no outfits saved in local storage");
  } else {
    let OutfitIds = Object.values(localOutfit);
    fetchReviews(OutfitIds)
      .then(responseArr => {
        let dataArray = responseArr.map(response => response.data);
        setOutfitsReviews(dataArray);
      })
      .catch(err => {
        console.log("err trying to fetch all related product data: ", err);
      });
  }
}

//FUNC TO GRAB OUTFIT IMAGES
export function fetchOutfitsImages(setOutfitsImages) {
  let localOutfit = JSON.parse(window.localStorage.getItem("outfit"));
  if (localOutfit === null) {
    console.log("no outfits saved in local storage");
  } else {
    let OutfitIds = Object.values(localOutfit);
    fetchImages(OutfitIds)
      .then(responseArr => {
        let dataArray = responseArr.map(response => response.data);
        setOutfitsImages(dataArray);
      })
      .catch(err => {
        console.log("err trying to fetch all related product data: ", err);
      });
  }
}
//FUNC TO GRAB OUTFITS
export function fetchOutfits(setOutfits) {
  let localOutfit = JSON.parse(window.localStorage.getItem("outfit"));
  if (localOutfit === null) {
    console.log("no outfits saved in local storage");
  } else {
    let OutfitIds = Object.values(localOutfit);
    fetchProducts(OutfitIds)
      .then(responseArr => {
        let dataArray = responseArr.map(response => response.data);
        setOutfits(dataArray);
      })
      .catch(err => {
        console.log("err trying to fetch all related product data: ", err);
      });
  }
}

//FUNC TO ADD ID TO OUTFIT LIST
export function addToOutfit(id) {
  let localOutfit = JSON.parse(window.localStorage.getItem("outfit"));
  if (localOutfit === null) {
    // Local storage is empty, so assign new object
    window.localStorage.setItem("outfit", JSON.stringify({ [id]: id }));
  } else {
    // Combine existing storage with new item / override
    let newLocalOutfit = Object.assign({}, localOutfit, { [id]: id });
    window.localStorage.setItem("outfit", JSON.stringify(newLocalOutfit));
    console.log(
      "outfits in local storage after add: ",
      window.localStorage.getItem("outfit")
    );
  }
}

//FUNC TO REMOVE ITEM FROM OUTFIT LIST
export function removeFromOutfit(id) {
  let localOutfit = JSON.parse(window.localStorage.getItem("outfit"));
  delete localOutfit[id];
  window.localStorage.setItem("outfit", JSON.stringify(localOutfit));
  console.log(
    "outfits in local storage after add: ",
    window.localStorage.getItem("outfit")
  );
}
