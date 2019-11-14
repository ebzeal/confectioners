import ShopActionTypes from "./shop.types";

export const updateVendors = vendorsMap => ({
  type: ShopActionTypes.UPDATE_VENDORS,
  payload: vendorsMap
});
