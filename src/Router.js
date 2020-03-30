import React from "react";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter = () => {
    return (
        <Router>
            <Route path="/product/:id" component={App}/>
        </Router>
    )
};

export default AppRouter;
