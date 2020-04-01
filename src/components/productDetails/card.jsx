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
  onClickDetails,
  onClickButton
}) => {
  // local state needed to determine if modal will show
  let [showModal, setShowModal] = useState(false);

  return (
    <div style={{ "max-height": "100%" }} className="card">
      <div>
        {showModal === true ? (
          <div>
            <Modal
              onExitClick={() => {
                setShowModal(false);
              }}
              title="Comparing"
            >
              <ComparisonTable product={product} pageProduct={pageProduct} />
            </Modal>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="card-image actionButtonDiv">
        <button
          className={`button is-small actionButton product-${product.id} ${listName}`}
          value={listName}
          onClick={e => {
            if (listName === "Related") {
              setShowModal(true);
              recordInteraction(
                `button.button.is-small.actionButton.product-${product.id}.${listName}`,
                "related-items-comparison"
              );
            } else {
              onClickButton(listName, product.id);
              recordInteraction(
                `button.button.is-small.actionButton.product-${product.id}.${listName}`,
                "related-items-comparison"
              );
            }
          }}
        >
          {listName === "Outfit" ? (
            <i className="fas fa-times-circle"></i>
          ) : (
            <i className="fas fa-star"></i>
          )}
        </button>
        <figure className="image is-square">
          <AttachProductLink productId={product.id}>
            <img
              name={product.id}
              onClick={onClickDetails}
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
      <div className="card-content">
        <div className="media-content">
          <p style={{ "border-bottom": ".5px solid black" }} className="">
            {product.category}
          </p>
          <p className="title is-6">{product.name}</p>
          <p className="">{product.slogan}</p>
          <p className="">${product.default_price}</p>
          {productReviews ? (
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

/* 
//Information Needed (CARD STATE NEEDED)
// product <- Related Product Info Object ({id, name, slogan, description, category, default_price, features}) GET /products/:product_id
// pageProduct <- Product Info Object (...)
// OnClickDetails <- Go to Clicked Product's page
// OnClickButton <- Perform Conditional Action depending on which List you are in: Open Modal Window / Remove Card from Outfit
// thumbImgURL <- Retrieve Thumbnail image url from GET /product/:product_id/styles <- use style_id "1" which is primary style and take first photo. Ryan may provide this also

//Non-Store Props to Include
// listName <- will help determine conditionally rendered features

//API CALLS NEEDED
// NONE NEEDED AT THIS COMPONENT LEVEL
// AT UPPER LEVEL, will need call to current page product ID's related products to grab their IDs and add their outfit data to store and outfit for user. */

export default Card;
