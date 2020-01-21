import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TopNav from '../top-nav/top-nav.component';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDrodown from "../cart-dropdown/cart-dropdown.component";
import Disclaimer from '../disclaimer/disclaimer';
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";


import { ReactComponent as Logo } from "../../assets/confectioners.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDivider,
} from "./header.styles";

const Header = ({ currentUser, cart_hidden }) => (
  <>
  <TopNav />
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/vendors">VENDORS</OptionLink>
      <OptionLink to="/">OFFERS</OptionLink>
      <OptionLink to="/">SALES</OptionLink>
      <OptionDivider> | </OptionDivider>
      <CartIcon />
    </OptionsContainer>
    {!cart_hidden ? <CartDrodown /> : null}
  </HeaderContainer>
  <Disclaimer color='#000000' topMargin='0' bottomMargin='40px'/>
  </>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cart_hidden: selectCartHidden
});



export default connect(mapStateToProps)(Header);
