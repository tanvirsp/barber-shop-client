
import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import './PaymentForm.css';


const PaymentForm = ({handlePaymentProcess}) => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card: elements.getElement(CardElement)
        })
        console.log("Payment Result", paymentMethod);
        handlePaymentProcess(paymentMethod);

    }


    
    return (

    
        <form onSubmit ={handleSubmit}>
            <CardElement />
            <button className="submit-btn" type="submit">PAY NOW</button>
        </form>

        
    );
};

export default PaymentForm;