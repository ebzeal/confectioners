import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  CLEAR_CART
} from "./cart.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN // no need to pass in a payload as we are essentially doing a toggle,  basic True or False dependeing on the current vale of the state property
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});

export const decreaseItemQuantity = item => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CLEAR_CART
});
