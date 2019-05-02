import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import FireSpark from "./FireSpark";

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/fireSpark" component={FireSpark} />
        <Route path="*" component={() => <Redirect to="/dashboard" />} />
      </Switch>
    </BrowserRouter>
  );
}
