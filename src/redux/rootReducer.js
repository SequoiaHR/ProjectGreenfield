import { combineReducers } from "redux";
import dummyReducer from "./reducers/dummyReducer.js";
import relatedReducer from "./reducers/relatedReducer.js";

//import individual reducers into this file

const rootReducer = combineReducers({
  dummy: dummyReducer, //place key-value paris here
  related: relatedReducer 
});

export default rootReducer;
