import { TOGGLE_CART_HIDDEN } from "./cart.types";

const INITIAL_STATE = {
  cart_hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cart_hidden: !state.cart_hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
