import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import ChackeOutForm from "./ChackeOutForm";
// TODD add publishable key
const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GAYTWAY)
const Payment = () => {
    return (
        <div>
         <SectionTitle heading="Payment" subHeading="please pay first"></SectionTitle>
         <div>
           <Elements stripe={stripePromise}>
            <ChackeOutForm></ChackeOutForm>
           </Elements>
         </div>
        </div>
    );
};

export default Payment;