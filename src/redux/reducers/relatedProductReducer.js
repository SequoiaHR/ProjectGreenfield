// Import action creators needed for your specific reducer
import { GET_RELATED_PRODUCTS } from "../actions/actionTypes.js";

// Example reducer
function relatedProductReducer(state = [], action) {
  switch (action.type) {
    case GET_RELATED_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}

export default relatedProductReducer;
