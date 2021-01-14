import { ShopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

// thunks are an action creator that returns a function that has access to dispatch
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        // dispatch to the redux store here to update the state
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((errorMessage) => {
        dispatch(fetchCollectionsFailure(errorMessage));
      });

    // using the Observable Pattern
    // collectionRef.onSnapshot(async (snapShot) => {
    //   // console.log(snapShot.forEach((doc) => console.log(doc.data())));
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
    //   console.log(collectionsMap);
    //   updateCollections(collectionsMap);
    //   setLoading(false);
    // });

    // using the Fetch method (accessing API directly via REST calls)
    // https://firestore.googleapis.com/v1/projects/crown-db-ebd4a/databases/(default)/documents
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crown-db-ebd4a/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));
  };
};
