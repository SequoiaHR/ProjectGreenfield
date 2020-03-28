import axios from "axios";

export function fetchReviews(ids) {
  let requests = [];
  for (let id of ids) {
    requests.push(
      axios.get(`http://3.134.102.30/reviews/${id}/meta`)
    );
  }
  return axios.all(requests);
}