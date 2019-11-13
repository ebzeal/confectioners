import { createSelector } from "reselect";
// import { vendor } from "postcss";

// const VENDOR_ID_MAP = {
//   "cherry-cakes": 1,
//   "freddy-fingers": 2,
//   "modley-bakes": 3,
//   "butter-cuppleys": 4,
//   "pink-foods": 5
// };

const selectShop = state => state.shop;

export const selectVendors = createSelector(selectShop, shop => shop.vendors);

export const selectVendorForPreview = createSelector(selectVendors, vendors =>
  Object.keys(vendors).map(key => vendors[key])
);

export const selectVendor = collectionUrlParam =>
  createSelector(
    selectVendors,
    vendors =>
      // vendors.find(vendor => vendor.id === VENDOR_ID_MAP[collectionUrlParam])
      vendors[collectionUrlParam]
  );
