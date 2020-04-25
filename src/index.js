import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./Router.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);