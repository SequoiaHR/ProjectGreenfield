import { GET_RELATED_IMAGES } from "../actions/actionTypes.js";

function relatedImagesReducer(state = [], action) {
  switch (action.type) {
    case GET_RELATED_IMAGES:
      return action.payload;
    default:
      return state;
  }
}

export default relatedImagesReducer;