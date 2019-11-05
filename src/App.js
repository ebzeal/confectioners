import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./views/homepage/homepage.component";
import ShopPage from "./views/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./views/signin-signup/signin-signup.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
