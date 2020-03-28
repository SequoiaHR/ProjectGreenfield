import React, { useState } from "react";
import Modal from "../Modal.jsx";
import ComparisonTable from "./comparisonTable.jsx";
import "./card.css";

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
    <div className="column is-2">
      <div className="card">
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
        <div className="card-image">
          <button
            className="button is-small"
            value={listName}
            onClick={e => {
              if (listName === "Related") {
                setShowModal(true);
              } else {
                onClickButton(listName, product.id);
              }
            }}
          >
            {listName === "Outfit" ? (
              <i className="fas fa-times-circle"></i>
            ) : (
              <i className="fas fa-star"></i>
            )}
          </button>
          <figure className="image is-4by3">
            <img
              name={product.id}
              onClick={onClickDetails}
              src={
                productImage === null
                  ? "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg"
                  : productImage
              }
              alt="Related-Product Item"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{product.category}</p>
            <p className="title is-5">{product.name}</p>
            <p className="subtitle is-6">{product.slogan}</p>
            <p className="subtitle is-6">${product.default_price}</p>
            <p className="subtitle is-6">
              1-Star Rating Count
              {productReviews ? productReviews.ratings[1] : "None here yet"}
            </p>
            <div>{/* <StarRating avgRating={avgRating}/> component */}</div>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
};

{
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
}

export default Card;
