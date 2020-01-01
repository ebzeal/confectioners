import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TopNav from '../top-nav/top-nav.component';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDrodown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/confectioners.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDivider
} from "./header.styles";

const Header = ({ currentUser, cart_hidden, userSignOut }) => (
  <>
  <TopNav />
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/">VENDORS</OptionLink>
      <OptionLink to="/">OFFERS</OptionLink>
      <OptionLink to="/">SALES</OptionLink>
      <OptionDivider> | </OptionDivider>
      <CartIcon />
    </OptionsContainer>
    {!cart_hidden ? <CartDrodown /> : null}
  </HeaderContainer>
  </>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cart_hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  userSignOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
