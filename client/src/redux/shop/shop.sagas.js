import { takeLatest, call, put } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { fetchVendorsSuccess, fetchVendorsFailure } from "./shop.action";

import ShopActionTypes from "./shop.types";

function* fetchVendorsAsync() {
  try {
    const vendorRef = firestore.collection("vendors");
    const snapshot = yield vendorRef.get();
    const vendorsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchVendorsSuccess(vendorsMap));
  } catch (error) {
    yield put(fetchVendorsFailure(error.message));
  }
}

export function* fetchVendorsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchVendorsAsync);
}
