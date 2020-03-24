// Import action creators needed for your specific reducer
import { ADD_DUMMY } from "../actionCreators/actionTypes.js";

// Example reducer
function dummyReducer(state = [], action) {
  switch (action.type) {
    case ADD_DUMMY:
      return state;
    default:
      return state;
  }
}

export default dummyReducer;
