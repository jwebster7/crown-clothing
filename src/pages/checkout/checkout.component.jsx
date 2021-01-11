import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => {
  const cartItemDisplay = cartItems.map((cartItem) => (
    <CheckoutItem cartItem={cartItem} key={cartItem.id} />
  ));
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      {cartItemDisplay}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
