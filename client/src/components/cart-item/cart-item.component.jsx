import React from "react";

import {
  CartItemContainer,
  CartItemDetailsContainer,
  ImageContainer
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer>
      <ImageContainer src={imageUrl} alt="item" />
      <CartItemDetailsContainer>
        <span>{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
