import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";
import { ShopActionTypes } from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    // get() returns a promise. The promise is
    const snapShot = yield collectionRef.get();
    // yield this call() in case the function call passed in takes longer than expected or needs to be cancelled
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    // put dispatches a new action to the reducer
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // OLD code using thunk
  // const collectionRef = firestore.collection("collections");
  // dispatch(fetchCollectionsStart());
  // collectionRef
  //   .get()
  //   .then((snapShot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
  //     // dispatch to the redux store here to update the state
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch((errorMessage) => {
  //     dispatch(fetchCollectionsFailure(errorMessage));
  //   });
}

// pauses whenever a specific defined action type comes in
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
