import { combineReducers } from "redux";
import dummyReducer from "./reducers/dummyReducer.js";
import reviewsReducer from "./reducers/reviewsReducer.js";
import reviewsMetadataReducer from "./reducers/reviewMetadataReducer.js";

//import individual reducers into this file

const rootReducer = combineReducers({
  dummy: dummyReducer, //place key-value paris here
  reviews: reviewsReducer,
  reviewsMetadata: reviewsMetadataReducer
});

export default rootReducer;
