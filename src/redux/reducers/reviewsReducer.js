import { GET_REVIEWS } from "../actions/actionTypes.js";

function reviewsReducer(state = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return state; // modify to fetch reviews from API
    default:
      return state;
  }
}

export default reviewsReducer;