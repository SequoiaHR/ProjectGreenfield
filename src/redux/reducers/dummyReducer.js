// Import action creators needed for your specific reducer
import { ADD_DUMMY, COUNT_DUMDUM } from "../actions/actionTypes.js";

// Example reducer
function dummyReducer(state = ['First'], action) {
  switch (action.type) {
    case ADD_DUMMY:
      return [...state, action.text]; // Do not mutate original state, spread is a good way to avoid this
    default:
      return state;
  }
}

const dumdumReducer = (state = 1, action) => {
  switch(action.type){
    case COUNT_DUMDUM:
      return state + 1;
    default:
      return state;
}
}
export {dummyReducer, dumdumReducer}
