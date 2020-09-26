import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const  publishableKey = 'pk_test_51HVejQLREGQLMWtVqdXPsV5uyySUx3bYktsiPFv8tHOOcQr1AAYxCCgrAcrNfvfJJ0g76OOz4eGvG3rvjC7nOOvS004iJgtCJR';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="CO clothing ltd."
            billingAddress
            shippingAddress
            description= {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;