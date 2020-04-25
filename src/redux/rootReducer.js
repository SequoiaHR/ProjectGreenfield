import { combineReducers } from "redux";
import reviewsReducer from "./reducers/reviewsReducer.js";
import reviewsMetadataReducer from "./reducers/reviewMetadataReducer.js";
import relatedProductReducer from "./reducers/relatedProductReducer.js";
import relatedImagesReducer from "./reducers/relatedImagesReducer";
import relatedReviewsReducer from "./reducers/relatedReviewsReducer";
import productDetailsReducer from "./reducers/overviewReducers/productDetailsReducer";
import productStylesReducer from "./reducers/overviewReducers/productStylesReducer";
import questionListReducer from "./reducers/questionsReducers/questionListReducer";

//import individual reducers into this file

const rootReducer = combineReducers({
  related: relatedProductReducer,
  relatedImages: relatedImagesReducer,
  relatedReviews: relatedReviewsReducer,
  reviews: reviewsReducer,
  reviewsMetadata: reviewsMetadataReducer,
  product_details: productDetailsReducer,
  product_styles: productStylesReducer,
  questions: questionListReducer,
});

export default rootReducer;
