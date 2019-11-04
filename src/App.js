import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./views/homepage/homepage.component";

const CherryCake = () => (
  <div>
    <h1>Cherry Cakes</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cherry-cakes" component={CherryCake} />
      </Switch>
    </div>
  );
}

export default App;
