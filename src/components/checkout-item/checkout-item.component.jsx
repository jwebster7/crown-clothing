import React from "react";

import { connect } from "react-redux";

import {
  clearCartItem,
  addCartItem,
  removeCartItem
} from "../../redux/cart/cart.actions";

import {
  ArrowContainer,
  CheckoutItemContainer,
  FieldContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  ValueContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <FieldContainer>{name}</FieldContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrowContainer>
        {/* value */}
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <FieldContainer>${price}</FieldContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearCartItem(item)),
  addItem: (item) => dispatch(addCartItem(item)),
  removeItem: (item) => dispatch(removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
