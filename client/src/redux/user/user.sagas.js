import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider
} from "../../firebase/firebase.utils";

import UserActionTypes from "./user.types";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess
} from "./user.actions";

// Sagas intercede specific Actions dispatched from Components.
// they do this by "taking" the action and yielding / waiting on some other defined action(s).
export function* getSnapShotFromUser(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUpWithEmail(userCredentials) {
  console.log("in the sign up with email function");
  try {
    const { email, displayName, password } = userCredentials.payload;
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(
      signUpSuccess({
        user: user,
        additionalData: { displayName: displayName }
      })
    );
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUser(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapShotFromUser(user, additionalData);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUser(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpWithEmail);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
