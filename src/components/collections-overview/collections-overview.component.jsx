import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  const collectionsPreviewDisplay = collections.map(({ id, ...otherProps }) => (
    <CollectionPreview key={id} {...otherProps} />
  ));
  return (
    <CollectionsOverviewContainer>
      {collectionsPreviewDisplay}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
