
import { combineReducers } from "redux";
import dummyReducer from "./reducers/dummyReducer.js";
import reviewsReducer from "./reducers/reviewsReducer.js";
import reviewsMetadataReducer from "./reducers/reviewMetadataReducer.js";
import relatedProductReducer from "./reducers/relatedProductReducer.js";
import relatedImagesReducer from "./reducers/relatedImagesReducer";
import productDetailsReducer from './reducers/overviewReducers/productDetailsReducer';
import productStylesReducer from './reducers/overviewReducers/productStylesReducer';


//import individual reducers into this file

const rootReducer = combineReducers({
  dummy: dummyReducer, //place key-value paris here
  related: relatedProductReducer,
  relatedImages: relatedImagesReducer,
  reviews: reviewsReducer,
  reviewsMetadata: reviewsMetadataReducer,
  product_details: productDetailsReducer,
  product_styles: productStylesReducer

});

export default rootReducer;
