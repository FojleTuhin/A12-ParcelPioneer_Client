import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API_KEY);
    return (
        <div>
            <Helmet>
                <title>
                    ParcelPioneer || Payment
                </title>
            </Helmet>
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4 mb-5">
                <h1 className="font-bold text-xl text-center">Pay your money</h1>
            </div>

            <div className="mx-auto flex justify-center mt-16">
                <div className="bg-[#F8F6F1] h-[350px] w-[700px]">
                    <div className="p-10">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm></CheckoutForm>
                        </Elements>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;