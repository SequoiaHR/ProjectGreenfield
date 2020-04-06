import { GET_REVIEWS, GET_REVIEW_METADATA } from "./actionTypes.js";
import axios from "axios";


export function fetchReviews(id, sort) {
  return function(dispatch) {
    axios.get(`http://18.224.200.47/reviews/${id}/list?count=100&sort=${sort}`)
      .then(({data}) => {
        dispatch(setReviews(data.results));
      })
      .catch((err) => {
        console.log("Error fetching reviews:", err);
      });
  }
}

// export function changeSort(id, sort) {
//   return function(dispatch) {
//     axios.get(`http://18.224.200.47/reviews/${id}/list?count=100&sort=${sort}`)
//       .then(({data}) => {
//         dispatch(setReviews(data.results));
//       })
//       .catch((err) => {
//         console.log("Error fetching sorted reviews:", err);
//       });
//   }
// }

function setReviews(data) {
  return {
    type: GET_REVIEWS,
    payload: data
  };
}



export function fetchMetadata(id) {
  return function(dispatch) {
    axios.get(`http://18.224.200.47/reviews/${id}/meta`)
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
