import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item-image" />
      </div>
      <p className="name">{name}</p>
      <p className="quantity">{quantity}</p>
      <p className="price">${price}</p>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
