import axios from "axios";

export function fetchImages(ids) {
  let requests = [];
  for (let id of ids) {
    requests.push(
      axios.get(`http://18.224.200.47/products/${id}/styles`)
    );
  }
  return axios.all(requests);
}
