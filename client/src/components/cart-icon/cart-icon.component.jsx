import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount, selectCartTotal } from "../../redux/cart/cart.selector";

import { ShoppingCartIcon} from './cart-icon.styles'


const CartIcon = (
  { toggleCartHidden, itemCount, cartTotalPrice } // destructuring toggleCartHidden from this.state, remember that mapDispatchToProps has made it available in the state
) => (
  <><ShoppingCartIcon  onClick={toggleCartHidden}> <i class="fas fa-shopping-cart"></i> <span> {itemCount} ITEMS: N{cartTotalPrice} </span></ShoppingCartIcon>
  </>
);

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state),
  cartTotalPrice: selectCartTotal(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
