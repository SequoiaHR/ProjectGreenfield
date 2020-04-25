import React from "react";
import App from "./App";
import ScrollToTop from "./scrollToTop.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Route path="/product/:id" component={App} />
    </Router>
  );
};

export default AppRouter;
