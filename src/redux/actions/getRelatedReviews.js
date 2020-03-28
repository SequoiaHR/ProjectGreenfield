import axios from "axios";
import {fetchReviews} from "./getReviewsHelper.js"
import { GET_RELATED_REVIEWS } from "./actionTypes.js";

export function fetchRelatedReviews(id) {
  return function(dispatch) {
    return axios
      .get(`http://3.134.102.30/products/${id}/related`)
      .then(({ data }) => {
        // data is an array of ids
        console.log(`data for ${id}: `, data);
        return fetchReviews(data);
      })
      .then(responseArr => {
        let dataArray = responseArr.map(response => response.data);
        dispatch(getRelatedReviews(dataArray));
      })
      .catch(err => {
        console.log("err trying to fetch all related reviews data: ", err);
      });
  };
}

function getRelatedReviews(data) {
  return {
    type: GET_RELATED_REVIEWS,
    payload: data
  };
}