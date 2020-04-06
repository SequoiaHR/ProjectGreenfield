import axios from "axios";
import {fetchProducts} from "./getProductsHelper.js"
import { GET_RELATED_PRODUCTS } from "./actionTypes.js";
import filterForUniqueIds from "./filterForUniqueIds";

export function fetchRelatedProducts(id) {
  return function(dispatch) {
    return axios
      .get(`http://18.224.200.47/products/${id}/related`)
      .then(({ data }) => {
        // data is an array of ids
        let filtered = filterForUniqueIds(data);
        return fetchProducts(filtered);
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
