// Import action creators needed for your specific reducer
import { ADD_DUMMY } from "../actions/actionTypes.js";

// Example reducer
function dummyReducer(state = ["First"], action) {
  switch (action.type) {
    case ADD_DUMMY:
      return [...state, action.text]; // Do not mutate original state, spread is a good way to avoid this
    default:
      return state;
  }
}

export default dummyReducer;
