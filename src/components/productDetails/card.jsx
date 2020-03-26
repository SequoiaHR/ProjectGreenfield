import React, { useState } from "react";
import ComparisonModal from "./comparisonModal.jsx";
// IMPORT STAR RATING COMPONENT CREATOR (Will it simply take in a product id?)

const Card = ({
  listName,
  pageProduct,
  product,
  productImage,
  onClickDetails,
  onClickButton
  // avgRating
}) => {
  // local state needed to determine if modal will show
  let [showModal, setShowModal] = useState(false);

  return (
    <div class="Related-Product-Card">
      <div>
        {showModal === true ? (
          <ComparisonModal
            product={product}
            pageProduct={pageProduct}
            setShowModal={setShowModal}
          />
        ) : (
          <div>Modal Hidden</div>
        )}
      </div>
      <div className="Related-Image-Container">
        <button
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
            <i>{"DELETE - OUTFIT"}</i>
          ) : (
            <i>{"MODAL - RELATED"}</i>
          )}
        </button>
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
      </div>
      <div className="Related-Info-Container">
        <div>
          <span>{product.category}</span>
        </div>
        <div>
          <span>{product.name}</span>
        </div>
        <div>
          <span>{product.slogan}</span>
        </div>
        <div>{/* <StarRating avgRating={avgRating}/> component */}</div>
      </div>
    </div>
  );
};

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
// AT UPPER LEVEL, will need call to current page product ID's related products to grab their IDs and add their outfit data to store and outfit for user.

export default Card;
