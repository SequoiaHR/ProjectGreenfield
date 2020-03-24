import { combineReducers } from "redux";

//import individual reducers into this file

//Example reducer
function dummyReducer(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    dummy: dummyReducer //place key-value paris here
});

export default rootReducer;
