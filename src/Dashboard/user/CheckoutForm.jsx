import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {

    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('Payment error', error);
            // setError(error)
        }
        else {
            console.log('Payment method', paymentMethod);
            // setError('')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "black",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button type="submit"disabled={!stripe}  className="btn bg-emerald-300 mt-10 py-2 px-4">
                Pay
            </button>

            <p>{error}</p>

        </form>


    );
};

export default CheckoutForm;