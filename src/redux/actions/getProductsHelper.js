import axios from "axios";

export function fetchProducts(ids) {
  let requests = [];
  for (let id of ids) {
    requests.push(axios.get(`http://18.224.200.47/products/${id}`));
  }
  return axios.all(requests);
}
