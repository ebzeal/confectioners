import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./views/homepage/homepage.component";
import ShopPage from "./views/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./views/signin-signup/signin-signup.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log("TCL: App -> componentDidMount -> user", user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
