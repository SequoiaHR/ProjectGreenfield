import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer.js";

//const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware // lets us dispatch() (async) functions
        //loggerMiddleware // neat middleware that logs actions
    )
);

export default store;
