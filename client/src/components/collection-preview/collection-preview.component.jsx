import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  const collection = items
    .filter((item, index) => index < 4)
    .map((item) => {
      return <CollectionItem key={item.id} item={item} />;
    });

  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>{collection}</PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
