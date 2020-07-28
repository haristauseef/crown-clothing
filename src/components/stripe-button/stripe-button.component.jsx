import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_fHoMYF8Z5Na83GROt3TOMYHX";

    const onToken = token => {
        console.log(token);
        alert("payment successfull");
    }

    return(
        <StripeCheckOut 
          label="Pay Now"
          name="Crown Clothing"
          billingAddress
          shippingAddress
          image="https://svgshare.com/i/CUz.svg"
          description={`Your total payment is $${price}`}
          amount= {priceForStripe}
          panelLabel= "Pay Now"
          token= {onToken}
          stripeKey= {publishableKey}
        />
    )
}

export default StripeCheckoutButton;