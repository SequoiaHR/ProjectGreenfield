import { GET_REVIEWS, GET_REVIEW_METADATA } from "./actionTypes.js";

export function fetchReviews() {
  return {
    type: GET_REVIEWS
  };
}

export function fetchMetadata() {
  return {
    type: GET_REVIEW_METADATA
  };
}