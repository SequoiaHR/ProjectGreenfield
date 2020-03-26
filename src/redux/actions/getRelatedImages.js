import axios from "axios";
import { fetchImages } from "./getImagesHelper.js";
import { GET_RELATED_IMAGES } from "./actionTypes.js";

export function fetchRelatedImages(id) {
  return function(dispatch) {
    return axios
      .get(`http://3.134.102.30/products/${id}/related`)
      .then(({ data }) => {
        // data is an array of ids
        console.log(`related items to ID #${id}: `, data);
        return fetchImages(data);
      })
      .then(responseArr => {
        let dataArray = responseArr.map(response => response.data);
        dispatch(getRelatedImages(dataArray));
      })
      .catch(err => {
        console.log("err trying to fetch all related product data: ", err);
      });
  };
}

function getRelatedImages(data) {
  return {
    type: GET_RELATED_IMAGES,
    payload: data
  };
}