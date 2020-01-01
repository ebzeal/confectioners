import { createSelector } from "reselect";

const selectCart = state => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  selectCart,
  cart => cart.cart_hidden
);

export const selectCartTotal = createSelector(selectCartItems, cartItems =>
  cartItems.reduce(
    (accumulatedPrice, { quantity, price }) =>
      accumulatedPrice + quantity * price,
    0
  )
);
