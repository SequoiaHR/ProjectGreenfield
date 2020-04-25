import { GET_RELATED_REVIEWS } from "../actions/actionTypes.js";

function relatedReviewsReducer(state = [], action) {
  switch (action.type) {
    case GET_RELATED_REVIEWS:
      return action.payload;
    default:
      return state;
  }
}

export default relatedReviewsReducer;