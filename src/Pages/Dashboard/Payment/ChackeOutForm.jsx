import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure, { axiosSecure } from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const ChackeOutForm = () => {
    const [clientSecret, setClientSerct] = useState();
    const [error, setEror] = useState('')
    const [transictionId, setTransictionId] = useState()
    const stripe = useStripe('');
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const { user } = useAuth()
    const [cart, refetch] = UseCart();
    const navigate=useNavigate()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSerct(res.data.clientSecret)
                })
        }
    }, [])
    const handlePaymentFormSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setEror(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setEror('')
        }
        // confirm payment
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
            console.log('confirm errorr')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('payment confirm')
                setTransictionId(paymentIntent.id);
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transictionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'payment pending'
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log("payment Saved", res)
                refetch();
                if (res?.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Payment done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }
            }
        }
    }
    return (
        <form onSubmit={handlePaymentFormSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {
                transictionId && <p className="text-green-600">Your transictionId:{transictionId}</p>
            }
        </form>
    );
};

export default ChackeOutForm;