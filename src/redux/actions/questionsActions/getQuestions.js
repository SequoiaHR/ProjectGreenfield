import axios from "axios";
import { GET_QUESTIONS } from "../actionTypes.js";


//REQUESTING QUESTION DATA FROM API AND DISPATCHING DATA AS AN ACTION CREATOR

export function getProductQuestions(id) {
  return function(dispatch) {
    return axios
      .get(`http://3.134.102.30/qa/${id}`)
      .then(data => {
        console.log("*** Sucessfully Get-ted Question Data From Server");
        // console.log(data);
        dispatch({
          type: GET_QUESTIONS,
          payload: data.data.results
        });
      })
      .catch(err => {
        console.log("!!! Error Getting Question Data From Server !!!");
        // console.log(err);
      });
  };
}
