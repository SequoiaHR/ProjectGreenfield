import axios from 'axios';
import { GET_QUESTIONS } from '../actionTypes.js';
const URL = '18.224.200.47';

//REQUESTING QUESTION DATA FROM API AND DISPATCHING DATA AS AN ACTION CREATOR

export function getProductQuestions(id) {
  return function (dispatch) {
    return axios
      .get(`http://${URL}/qa/${id}?count=100`)
      .then((data) => {
        dispatch({
          type: GET_QUESTIONS,
          payload: data.data.results,
        });
      })
      .catch((err) => {
        console.log('!!! Error Getting Question Data From Server !!!');
      });
  };
}
