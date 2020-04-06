import axios from "axios";

export function fetchReviews(ids) {
  let requests = [];
  for (let id of ids) {
    requests.push(
      axios.get(`http://18.224.200.47/reviews/${id}/meta`)
    );
  }
  return axios.all(requests);
}
