import { combineReducers } from "redux";
import {dummyReducer, dumdumReducer} from "./reducers/dummyReducer.js";

//import individual reducers into this file

const rootReducer = combineReducers({
  dummy: dummyReducer, //place key-value paris here
  dumdum: dumdumReducer
});

export default rootReducer;
