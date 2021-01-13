import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotalPrice
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => {
  const checkoutItemsDisplay = cartItems.map((cartItem, index) => (
    <CheckoutItem cartItem={cartItem} key={index} />
  ));
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>PRODUCT</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>DESCRIPTION</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>QUANTITY</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>PRICE</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>REMOVE</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {checkoutItemsDisplay}
      <TotalContainer>
        <span>TOTAL: ${total}</span>
      </TotalContainer>
      <WarningContainer>
        * Please use the following test credit card for payment
        <br />
        Number: 4242 4242 4242 4242 | Exp. Date: Any three numbers | CVC: Any
        three numbers
        <br />
        See the Stripe documentation for further details:{" "}
        <a href="https://stripe.com/docs/testing#cards">Stripe Testing Cards</a>
      </WarningContainer>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
