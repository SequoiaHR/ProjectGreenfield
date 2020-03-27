import { GET_REVIEW_METADATA } from "../actions/actionTypes.js";

function reviewsMetadataReducer(state = {}, action) {
  switch (action.type) {
    case GET_REVIEW_METADATA:
      return action.payload; // replace with fetch metadata from API
    default:
      return state;
  }
}

export default reviewsMetadataReducer;