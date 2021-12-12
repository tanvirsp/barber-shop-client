import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = "pk_test_51JuJsfKvbwuIhOXK0Q5SkU8PtVcydBal64XUiEN89JxKTynQC7TCW6WGfQrOsfTvlfdlJD3UMzZNpeDpxXRLPOZZ00cj6YRm5L";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({handlePaymentProcess}) => {
   
    return (
        <Elements stripe ={stripeTestPromise}>
            <PaymentForm handlePaymentProcess={handlePaymentProcess} />
        </Elements>
    );
};

export default StripeContainer;