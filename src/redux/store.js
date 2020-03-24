import { createStore } from "redux";
import rootReducer from "./rootReducer.js";
// add root reducer that combines other reducers here
const store = createStore(rootReducer); //<- use it here

export default store;
