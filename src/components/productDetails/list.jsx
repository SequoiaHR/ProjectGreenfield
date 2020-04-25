import React, { useState, useEffect } from "react";
import {
  fetchOutfits,
  fetchOutfitsImages,
  fetchOutfitsReviews,
  addToOutfit,
  removeFromOutfit,
} from "./outfitHelpers.js";
import Card from "./card.jsx";
import AddToOutfitCard from "./addCard.jsx";
import DirectionalButton from "./directionalButton.jsx";
import filterForShownItems from "./shownItemsHelper.js";
import recordInteraction from "../../interactionsHelper.js";
import getRelatedIds from "../../getRelatedIds.js";
import "./directionalButton.css";

const List = ({
  listName,
  pageProduct,
  products,
  productsImages,
  fetchRelatedDataAsync,
  productsReviews,
  paramsId,
}) => {
  // Set Local State For Outfits
  var [outfits, setOutfits] = useState([]);
  var [outfitsImages, setOutfitsImages] = useState([]);
  var [outfitsReviews, setOutfitsReviews] = useState([]);
  var [showRelatedWidget, setShowRelatedWidget] = useState(true);

  // Set Local State For Conditionally Rendered Products
  let initialShownIndices = listName === "Outfit" ? [0, 1, 2] : [0, 1, 2, 3];
  var [shownIndices, setShownIndices] = useState(initialShownIndices);

  //conditionally set outfits to Outfit data if this list represents outfits (on first render)
  if (listName === "Outfit") {
    products = outfits;
    productsImages = outfitsImages;
    productsReviews = outfitsReviews;
  }

  useEffect(() => {
    //Handle fetching data after first render for Related Products
    if (listName === "Related") {
      getRelatedIds(paramsId).then(({ data }) => {
        if (data.length === 0) {
          setShowRelatedWidget(false);
        } else {
          setShowRelatedWidget(true);
          fetchRelatedDataAsync(paramsId);
        }
      });
    }
    //Handle fetching data after first render for Your Outfit
    if (listName === "Outfit") {
      fetchOutfits(setOutfits);
      fetchOutfitsImages(setOutfitsImages);
      fetchOutfitsReviews(setOutfitsReviews);
    }
    // Reset shown indices in either case
    setShownIndices(initialShownIndices);
  }, [paramsId]);

  // If List Component is an Outfit List, set product data to outfit data
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
        let newShownIndices = shownIndices.map((idx) => idx - 1);
        setShownIndices(newShownIndices);
        recordInteraction(
          `span.${listName} button.directionalButton svg.fa-chevron-${direction}`,
          "related-items-comparison"
        );
      }
    } else if (direction === "right") {
      if (shownIndices[shownIndices.length - 1] !== products.length - 1) {
        let newShownIndices = shownIndices.map((idx) => idx + 1);
        setShownIndices(newShownIndices);
        recordInteraction(
          `span.${listName} button.directionalButton svg.fa-chevron-${direction}`,
          "related-items-comparison"
        );
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
      recordInteraction("button.addCardButton", "related-items-comparison");
    }
    if (action === "Outfit") {
      removeFromOutfit(id);
      fetchOutfits(setOutfits);
      fetchOutfitsImages(setOutfitsImages);
      fetchOutfitsReviews(setOutfitsReviews);
      recordInteraction(
        `button.Outfit.product-${id}`,
        "related-items-comparison"
      );
      if (shownIndices[0] !== 0) {
        let newShownIndices = shownIndices.map((idx) => idx - 1);
        setShownIndices(newShownIndices);
      }
    }
  }

  var wrapperStyle = {
    width: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  };
  var outerWrapperStyle = {
    width: "100%",
    maxHeight: "100%",
  };
  var innerWrapperStyle = {
    width: "100%",
    maxHeight: "100%",
  };

  if (showRelatedWidget === true) {
    return (
      <div style={outerWrapperStyle}>
        <h1
          style={{ marginLeft: "3%", marginTop: "3%" }}
          className="title is-4"
        >
          {listName === "Related" ? "Related Products" : "Your Outfit"}
        </h1>
        <div style={outerWrapperStyle} className="columns">
          <div className="column is-narrow is-vertical-centered">
            <span className={listName}>
              {shownIndices[0] !== 0 ? (
                <DirectionalButton
                  arrowDirection={"left"}
                  icon={"fas fa-chevron-left"}
                  onArrowClick={onArrowClick}
                  listName={listName}
                />
              ) : (
                <span className="button is-static directionalButton is-medium transparent-icon">
                  <i className="fas fa-chevron-left"></i>
                </span>
              )}
            </span>
          </div>
          <div className="column outer">
            <div className="box has-background-light" style={wrapperStyle}>
              <div className="columns" style={innerWrapperStyle}>
                {listName === "Outfit" ? (
                  <AddToOutfitCard
                    pageProduct={pageProduct}
                    onClickButton={onClickButton}
                  />
                ) : null}
                {filterForShownItems(products, shownIndices).map(
                  (product, idx) => {
                    return (
                      <div key={idx} className="column is-3">
                        <Card
                          key={idx}
                          listName={listName}
                          pageProduct={pageProduct}
                          product={product}
                          productImage={
                            checkForMissingShownImage(
                              productsImages,
                              shownIndices,
                              idx
                            )
                              ? filterForShownItems(
                                  productsImages,
                                  shownIndices
                                )[idx].results[0].photos[0].thumbnail_url
                              : null
                          }
                          productReviews={
                            filterForShownItems(productsReviews, shownIndices)[
                              idx
                            ]
                          }
                          onClickButton={onClickButton}
                          productSalesData={
                            productsImages
                              ? filterForShownItems(
                                  productsImages,
                                  shownIndices
                                )[idx]
                              : null
                          }
                        />
                      </div>
                    );
                  }
                )}
                {shownIndices[shownIndices.length - 1] !== products.length - 1
                  ? filterForShownItems(products, [
                      shownIndices[shownIndices.length - 1] + 1,
                    ]).map((product) => {
                      // The next index corresponding to a card I would like to show a piece of.
                      var nextIndex = shownIndices[shownIndices.length - 1] + 1;
                      return (
                        <div key={nextIndex} className="column is-3">
                          <Card
                            key={nextIndex}
                            listName={listName}
                            pageProduct={pageProduct}
                            product={product}
                            productImage={
                              checkForMissingShownImage(
                                productsImages,
                                [nextIndex],
                                0
                              )
                                ? filterForShownItems(productsImages, [
                                    nextIndex,
                                  ])[0].results[0].photos[0].thumbnail_url
                                : null
                            }
                            onClickButton={onClickButton}
                            productReviews={
                              filterForShownItems(productsReviews, [
                                nextIndex,
                              ])[0]
                            }
                            productSalesData={
                              productsImages
                                ? filterForShownItems(productsImages, [
                                    nextIndex,
                                  ])[0]
                                : null
                            }
                          />
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div className="column is-narrow is-vertical-centered">
            <span className={listName}>
              {shownIndices[shownIndices.length - 1] !== products.length - 1 &&
              products.length > shownIndices.length ? (
                <DirectionalButton
                  arrowDirection={"right"}
                  icon={"fas fa-chevron-right"}
                  onArrowClick={onArrowClick}
                  listName={listName}
                />
              ) : (
                <span className="button is-static directionalButton is-medium transparent-icon">
                  <i className="fas fa-chevron-right"></i>
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default List;
