import ShopActionTypes from "./shop.types";
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchVendorsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchVendorsSuccess = (vendorsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: vendorsMap
})

export const fetchVendorsFailure = errMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errMessage
})

export const fetchVendorsStartAsync = () => {
  return dispatch => {
    // const vendorRef = firestore.collection("vendors");
    // dispatch(fetchVendorsStart());
    // vendorRef.get().then(snapshot => {
    //   const vendorsMap = convertCollectionsSnapshotToMap(snapshot);
    //   dispatch(fetchVendorsSuccess(vendorsMap))
    // }).catch(error => dispatch(fetchVendorsFailure(error.message)));

  }
}
