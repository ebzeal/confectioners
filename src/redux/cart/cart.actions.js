import { TOGGLE_CART_HIDDEN } from "./cart.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN // no need to pass in a payload as we are essentially doing a toggle,  basic True or False dependeing on the current vale of the state property
});
