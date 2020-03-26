import { combineReducers } from 'redux';
import dummyReducer from './reducers/dummyReducer.js';
import productDetailsReducer from './reducers/overviewReducers/productDetailsReducer';
import productStylesReducer from './reducers/overviewReducers/productStylesReducer';

//import individual reducers into this file

const rootReducer = combineReducers({
  dummy: dummyReducer, //place key-value paris here
  product_details: productDetailsReducer,
  product_styles: productStylesReducer
});

export default rootReducer;
