import axios from "axios";

export function fetchProducts(ids) {
  let requests = [];
  for (let id of ids) {
    requests.push(axios.get(`http://3.134.102.30/products/${id}`));
  }
  return axios.all(requests);
}