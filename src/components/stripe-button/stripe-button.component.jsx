import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey =
    "pk_test_51I8va6Lvnr0LGErTEbrk8JYFs96frYTxewTPXZAedXfVJgBqMGjdr8qeplBcH8Hp5rqsjujOtYjXRvqevHIYuZKr00Jbgt58Wn";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default StripeButton;
