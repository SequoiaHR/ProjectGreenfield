import axios from "axios";

let getRelatedIds = (id) => {
  return axios.get(`http://18.224.200.47/products/${id}/related`);
};

export default getRelatedIds;
