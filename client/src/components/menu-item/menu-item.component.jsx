import React from "react";
import { withRouter } from "react-router-dom";

import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitleContainer,
  ContentTitleContainer,
  MenuItemContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer>
      <ContentTitleContainer>{title.toUpperCase()}</ContentTitleContainer>
      <ContentSubtitleContainer>Shop Now!</ContentSubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
