import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectAreCollectionsLoaded, selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// match, location, and history are automatically passed into components nested in a Route.
const ShopPage = (props) => {
  const { match, areCollectionsLoaded, isCollectionFetching, fetchCollectionsStartAsync } = props;
  useEffect(() => {
    fetchCollectionsStartAsync();
    console.log('IN SHOP COMPONENT');
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      {/* /:collectionId = parameter to "match" for our category page different categories */}
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!areCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  areCollectionsLoaded: selectAreCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default WithSpinner(
  connect(mapStateToProps, mapDispatchToProps)(ShopPage)
);
