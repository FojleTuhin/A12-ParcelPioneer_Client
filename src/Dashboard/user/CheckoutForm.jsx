import { AuthContext } from "@/Firebase/FirebaseProvider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, id }) => {

    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic();
    const [clientSecret, setClientSecret] = useState('')
    const { user } = useContext(AuthContext);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();

    console.log(price);

    useEffect(() => {
        if (price > 0) {
            axiosPublic.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosPublic, price])


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
            setError(error.message)
        }
        else {
            console.log('Payment method', paymentMethod);
            setError('')
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })


        if (confirmError) {
            console.log('confirm error')
        }

        else {
            console.log('Payment Intent', paymentIntent);
        }

        if (paymentIntent.status === 'succeeded') {
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id);

            await axiosPublic.patch(`/paymentDone/${id}`)
                .then(data => {
                    console.log(data.data);
                    if (data.data.modifiedCount > 0) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Payment Successfull`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        navigate('/dashboard/success')


                    }
                })
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
            <button type="submit"
                disabled={!stripe || !clientSecret}
                className="btn bg-emerald-300 mt-10 py-2 px-4">
                Pay
            </button>

            <p>{error}</p>
            {transactionId && <p className="text-green-600 mt-10"> Your transaction id: {transactionId}</p>}

        </form>


    );
};

export default CheckoutForm;