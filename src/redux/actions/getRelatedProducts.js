import axios from "axios";
import { GET_RELATED_PRODUCTS } from "./actionTypes.js";
// import store from "../store.js"; // DO NOT NORMALLY LOAD STORE <- DONE FOR DEMONSTRATION PURPOSES

export function fetchRelatedProducts(id) {
  return function(dispatch) {
    return axios
      .get(`http://3.134.102.30/products/${id}/related`)
      .then(({ data }) => {
        // data is an array of ids
        console.log(`data for ${id}: `, data)
        let requests = [];
        for (let related_id of data) {
          requests.push(
            axios.get(`http://3.134.102.30/products/${related_id}`)
          );
        }
        return axios.all(requests);
      })
      .then(responseArr => {
          let dataArray = responseArr.map(response => response.data);
          dispatch(getRelatedProducts(dataArray));
      })
      .catch(err => {
        console.log("err trying to fetch all related product data: ", err);
      });
  };
}

function getRelatedProducts(data) {
  return {
    type: GET_RELATED_PRODUCTS,
    payload: data
  };
}
