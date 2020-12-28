import React, { useState } from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  const collectionPreview = collections.map(({ id, ...otherProps }) => (
    <CollectionPreview key={id} {...otherProps} />
  ));

  return <div className="shop-page">{collectionPreview}</div>;
};

export default ShopPage;
