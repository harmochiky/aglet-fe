import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./page/Home";
import Contact from "./page/Contact";

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
}

export default AppRoutes;
