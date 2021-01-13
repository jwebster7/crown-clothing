import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// match, location, and history are automatically passed into components nested in a Route.
const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapShot) => {
      // console.log(snapShot.forEach((doc) => console.log(doc.data())));
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      console.log(collectionsMap);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  });

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      {/* /:collectionId = parameter to "match" for our category page different categories */}
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap))
});

export default WithSpinner(connect(null, mapDispatchToProps)(ShopPage));
