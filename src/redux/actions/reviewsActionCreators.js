import { GET_REVIEWS, GET_REVIEW_METADATA } from "./actionTypes.js";
import axios from "axios";


export function fetchReviews(id) {
  return function(dispatch) {
    axios.get(`http://3.134.102.30/reviews/${id}/list?count=100`)
      .then(({data}) => {
        dispatch(setReviews(data.results));
      })
      .catch((err) => {
        console.log("Error fetching reviews:", err);
      });
  }
}

function setReviews(data) {
  return {
    type: GET_REVIEWS,
    payload: data
  };
}


export function fetchMetadata(id) {
  return function(dispatch) {
    axios.get(`http://3.134.102.30/reviews/${id}/meta`)
      .then(({data}) => {
        dispatch(setMetadata(data));
      })
      .catch((err) => {
        console.log("Error fetching review metadata:", err);
      })
  }
}

function setMetadata(data) {
  return {
    type: GET_REVIEW_METADATA,
    payload: data
  };
}