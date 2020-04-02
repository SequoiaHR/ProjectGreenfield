import axios from "axios";

let getRelatedIds = (id) => {
  return axios.get(`http://3.134.102.30/products/${id}/related`);
};

export default getRelatedIds;
