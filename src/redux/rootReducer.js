import { combineReducers } from "redux";
import dummyReducer from "./reducers/dummyReducer.js";

//import individual reducers into this file

const rootReducer = combineReducers({
  dummy: dummyReducer //place key-value paris here
});

export default rootReducer;