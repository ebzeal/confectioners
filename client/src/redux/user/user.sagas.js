import { takeLatest, put, all, call, takeLeading } from "redux-saga/effects";

import userActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess
} from "./user.actions";

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* userSignUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userAuth = { ...user, displayName };
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapShot = yield userRef.get();
    yield put(signUpSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
// this commented codeabove can also be wriiten in userSignUp, onSignUpSuccess and signInAfterSignUp as done below

// export function* userSignUp({ payload: { email, password, displayName } }) {
//   try {
//     const { user } = yield auth.createUserWithEmailAndPassword(email, password);
//     yield put(signUpSuccess({ user, additionalData: { displayName } }));
//   } catch (error) {
//     yield put(signUpFailure(error));
//   }
// }

// export function* signInAfterSignUp({ payload: { user, additionalData } }) {
//   yield getSnapshotFromUserAuth(user, additionalData);
// }
// export function* onSignUpSuccess() {
//   yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
// }

function* onUserSignUp() {
  yield takeLatest(userActionTypes.SIGN_UP_START, userSignUp);
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onCheckIfUserIsAuthenticated() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* onSignOutStart() {
  yield takeLeading(userActionTypes.SIGN_OUT_START, signOut);
}

function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckIfUserIsAuthenticated),
    call(onSignOutStart),
    call(onUserSignUp)
  ]);
}

export {
  userSagas as default,
  signInWithGoogle,
  onGoogleSignInStart,
  signInWithEmail,
  onEmailSignInStart,
  isUserAuthenticated,
  onCheckIfUserIsAuthenticated,
  onSignOutStart,
  onUserSignUp
};
