import { GET_REVIEWS } from "../actions/actionTypes.js";

function reviewsReducer(state = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.payload;
    default:
      return state;
  }
}

export default reviewsReducer;