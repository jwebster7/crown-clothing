import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";
import { shopSagas } from "./shop/shop.sagas";

// Sagas listen for certain Actions and the Reducer and
// are responsible for elegantly handling Actions that cause side effects (impure functions/Actions)
// these impure Actions have completed or failed, the Saga
// dispatches (through "put") a new Action back and since the Saga doesn't recognize the action,
// the action is passed through to the reducer.
export default function* rootSaga() {
  // all allows us to fire multiple sagas on separate tasks
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSagas),
    call(shopSagas)
  ]);
}
