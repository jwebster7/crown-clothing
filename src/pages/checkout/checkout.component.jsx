import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => {
  const checkoutItemsDisplay = cartItems.map((cartItem, index) => (
    <CheckoutItem cartItem={cartItem} key={index} />
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
      {checkoutItemsDisplay}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        * Please use the following test credit card for payment
        <br />
        Number: 4242 4242 4242 4242 | Exp. Date: Any three numbers | CVC: Any
        three numbers
        <br />
        See the Stripe documentation for further details:{" "}
        <a href="https://stripe.com/docs/testing#cards">Stripe Testing Cards</a>
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
