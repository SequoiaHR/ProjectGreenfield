import { combineReducers } from "redux";
import dummyReducer from "./reducers/dummyReducer.js";
import relatedProductReducer from "./reducers/relatedProductReducer.js";
import relatedImagesReducer from "./reducers/relatedImagesReducer";

//import individual reducers into this file

const rootReducer = combineReducers({
  dummy: dummyReducer, //place key-value paris here
  related: relatedProductReducer,
  relatedImages: relatedImagesReducer
});

export default rootReducer;
