import React, { useState } from "react";
import Modal from "../Modal.jsx";
import ComparisonTable from "./comparisonTable.jsx";
import "./card.css";
import StarRating from "../starRating.jsx";
import calculateRating from "../../calculateRating.js";
import AttachProductLink from "./attachProductLink.jsx";
import recordInteraction from "../../interactionsHelper.js";

const Card = ({
  listName,
  pageProduct,
  product,
  productImage,
  productReviews,
  productSalesData,
  onClickButton
}) => {
  let [showModal, setShowModal] = useState(false);

  // Sales Price Value Calculation
  let salesPrice = productSalesData
    ? getSalesPriceIfAvailable(productSalesData)
    : null;

  function getSalesPriceIfAvailable(data) {
    if (data.hasOwnProperty("results")) {
      if (data.results[0] !== undefined) {
        if (data.results[0].hasOwnProperty("sale_price")) {
          return Number(data.results[0]["sale_price"]);
        }
      }
    }
    return null;
  }

  function showAverageReview(productReviews) {
    if (productReviews && calculateRating(productReviews) !== null) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div style={{ "maxHeight": "60vh" }} className="card">
      <div>
        {showModal === true ? (
          <div>
            <Modal
              onExitClick={e => {
                recordInteraction(
                  `div.${e.target.className.split(" ")[0]}`,
                  "related-items-comparison"
                );
                setShowModal(false);
              }}
              title="Comparing"
            >
              <ComparisonTable product={product} pageProduct={pageProduct} />
            </Modal>
          </div>
        ) : null}
      </div>
      <div className="card-image actionButtonDiv">
        <figure className="image is-square">
          <button
            style={{
              "zIndex": "2",
              position: "absolute",
              top: "0",
              right: "0"
            }}
            className={`button is-small actionButton product-${product.id} ${listName}`}
            value={listName}
            onClick={e => {
              if (listName === "Related") {
                setShowModal(true);
                recordInteraction(
                  `button.${listName}.product-${product.id}`,
                  "related-items-comparison"
                );
              } else {
                onClickButton(listName, product.id);
              }
            }}
          >
            {listName === "Outfit" ? (
              <span className="icon is-medium fa-layers fa-fw">
                <i style={{color: "white"}} className="fas fa-circle"></i>
                <i className="fas fa-lg fa-times-circle has-text-danger"></i>
              </span>
            ) : (
              <span className="icon is-medium fa-layers fa-fw">
                <i style={{color: "white"}} className="fas fa-star"></i>
                <i className="far fa-lg fa-star"></i>
              </span>
            )}
          </button>

          <AttachProductLink productId={product.id}>
            <img
              className={`image-${listName}-product-${product.id}`}
              name={product.id}
              onClick={() => {
                recordInteraction(
                  `img.image-${listName}-product-${product.id}`,
                  "related-items-comparison"
                );
              }}
              src={
                productImage === null
                  ? "https://vectorified.com/images/default-image-icon-14.png"
                  : productImage
              }
              alt={`${listName}-Product Item`}
            />
          </AttachProductLink>
        </figure>
      </div>
      <div className="flex-container">
        <div className="flex-container-info">
          <p style={{ "borderBottom": ".5px solid black" }} className="">
            {product.category}
          </p>
          <p className="">{product.name}</p>
          {salesPrice === null || salesPrice === 0 ? (
            <p>${product.default_price}</p>
          ) : (
            <p>
              <span style={{ color: "red", "fontSize": "20px" }}>
                ${salesPrice}
              </span>{" "}
              <strike>${product.default_price}</strike>
            </p>
          )}
          {showAverageReview(productReviews) ? (
            <StarRating
              rating={calculateRating(productReviews)}
              width={20}
              height={20}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
