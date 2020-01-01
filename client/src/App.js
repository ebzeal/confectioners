import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.scss";

import HomePage from "./views/homepage/homepage.component";
import ShopPage from "./views/shop/shop.component";
import SignInSignUp from "./views/signin-signup/signin-signup.component";
import CheckoutPage from "./views/checkout/checkout.component";
import VendorPage from "./views/vendor/vendor.component";

import Header from "./components/header/header.component";

import { selectCurrentUser } from "./redux/user/user.selector";
import { selectVendorForPreview } from "./redux/shop/shop.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/vendor" component={VendorPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  vendorsArray: selectVendorForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
