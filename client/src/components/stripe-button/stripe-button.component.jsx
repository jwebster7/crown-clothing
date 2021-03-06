import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey =
    "pk_test_51I8va6Lvnr0LGErTEbrk8JYFs96frYTxewTPXZAedXfVJgBqMGjdr8qeplBcH8Hp5rqsjujOtYjXRvqevHIYuZKr00Jbgt58Wn";

  const onToken = async (token) => {
    await axios
      .post("/payment", {
        amount: priceForStripe,
        token: token
      })
      .then((res) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please ensure you use the provided credit card details"
        );
      });
  };

  // const onToken = (token) => {
  //   axios({
  //     url: "payment",
  //     method: "post",
  //     data: {
  //       amount: priceForStripe,
  //       token: token
  //     }
  //   })
  //     .then((res) => {
  //       alert("Payment successful");
  //     })
  //     .catch((error) => {
  //       console.log("Payment error: ", JSON.parse(error));
  //       alert(
  //         "There was an issue with your payment. Please ensure you use the provided credit card details"
  //       );
  //     });
  // };

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
