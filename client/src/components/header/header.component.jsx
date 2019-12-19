import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TopNav from '../top-nav/top-nav.component';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDrodown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, cart_hidden, userSignOut }) => (
  <div>
  <TopNav />
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/">CONTACT</OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={userSignOut}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!cart_hidden ? <CartDrodown /> : null}
  </HeaderContainer>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cart_hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  userSignOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
