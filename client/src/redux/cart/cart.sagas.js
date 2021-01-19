import { all, call, takeLatest, put, select } from "redux-saga/effects";

import { getUserCartRef } from "../../firebase/firebase.utils";

import { selectCurrentUser } from "../user/user.selector";
import UserActionTypes from "../user/user.types";

import { clearCart, setCartFromFirebase } from "./cart.actions";
import { selectCartItems } from "./cart.selectors";
import CartActionTypes from "../cart/cart.types";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, setUserCartFromFirebase);
}

export function* updateUserCartInFirebase() {
  const user = yield select(selectCurrentUser);

  if (user) {
    try {
      const cartRef = yield getUserCartRef(user.id);
      const cartItemsToAdd = yield select(selectCartItems);
      yield cartRef.update({ cartItems: cartItemsToAdd });
    } catch (err) {
      console.log(err);
    }
  }
}

export function* setUserCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapShot = yield cartRef.get();
  const cartItems = cartSnapShot.data().cartItems;
  yield put(setCartFromFirebase(cartItems));
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_CART_ITEM,
      CartActionTypes.REMOVE_CART_ITEM,
      CartActionTypes.CLEAR_CART_ITEM
    ],
    updateUserCartInFirebase
  );
}

export function* cartSagas() {
  // yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)]);
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}
