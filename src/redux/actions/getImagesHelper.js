import axios from "axios";

export function fetchImages(ids) {
  let requests = [];
  for (let id of ids) {
    requests.push(
      axios.get(`http://3.134.102.30/products/${id}/styles`)
    );
  }
  return axios.all(requests);
}