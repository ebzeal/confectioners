import { all, call } from "redux-saga/effects";

import { fetchVendorsStart } from "./shop/shop.sagas";
import userSagas from "./user/user.sagas";
import cartSaga from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchVendorsStart), // or you could just do fetchVendorStart()  without using call
    call(userSagas),
    call(cartSaga)
  ]);
}
