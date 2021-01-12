import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  const collectionsPreviewDisplay = collections.map(({ id, ...otherProps }) => (
    <CollectionPreview key={id} {...otherProps} />
  ));
  return (
    <div className="collections-overview">{collectionsPreviewDisplay}</div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
