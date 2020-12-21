import React from 'react'
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I0qLVHQq0luUxmmQ053hkL5DlmTvPY8R16hGWdmyIiRtliXJ8cPD0XVyJfoSKGGVYYPZxUYKz2umwyRf8cFph2I00Re48vppQ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
    <StripeCheckout
        label='Pay Now'
        name='Clothin Shop'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
    );

}

export default StripeCheckoutButton;
