import React from "react";

import { connect } from "react-redux";

import { addCartItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import {
  CollectionFooterContainer,
  CollectionImageContainer,
  CollectionItemContainer,
  CustomButtonContainer,
  NameContainer,
  PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooterContainer>
        <NameContainer className='name'>{name}</NameContainer>
        <PriceContainer className='price'>${price}</PriceContainer>
      </CollectionFooterContainer>
      <CustomButtonContainer as={CustomButton} inverted onClick={() => addCartItem(item)}>
        ADD TO CART
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
