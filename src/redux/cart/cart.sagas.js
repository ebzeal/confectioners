import { all, call, takeLatest, put } from "redux-saga/effects";

import userActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

export { cartSagas as default, onSignOutSuccess };
