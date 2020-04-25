import axios from "axios";
import { fetchImages } from "./getImagesHelper.js";
import { GET_RELATED_IMAGES } from "./actionTypes.js";
import filterForUniqueIds from "./filterForUniqueIds";

export function fetchRelatedImages(id) {
  return function(dispatch) {
    return axios
      .get(`http://18.224.200.47/products/${id}/related`)
      .then(({ data }) => {
        let filtered = filterForUniqueIds(data);
        return fetchImages(filtered);
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
