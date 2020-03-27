import { GET_QUESTIONS } from "../../actions/actionTypes";

function questionListReducer(state = {}, action){
  switch(action.type){
    case GET_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}

export default questionListReducer;