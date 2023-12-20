import { saveOrder, resetOrder } from '@/redux/reducers/addItems';
import { RootState } from '@/redux/store';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
    isSubmitting: boolean;
}

const Payment = ({ isSubmitting }: Props) => {
    const { product } = useSelector((state: RootState) => state.addToCart);
    const dispatch = useDispatch();

    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );
    const handleCheckout = async () => {
        try {
            const stripe = await stripePromise;
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_URL}` + `/api/checkout`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        items: product,
                    }),
                }
            );
            const data = await response.json();
            if (response.ok) {
                stripe?.redirectToCheckout({ sessionId: data.id });
                dispatch(saveOrder(product));
            } else {
                alert('Try to buy less products');
            }
        } catch (error) {
            console.log(error);
            dispatch(resetOrder());
        }
    };

    return (
        <>
            <button
                disabled={isSubmitting}
                onClick={handleCheckout}
                type='submit'
                className={`${isSubmitting ? 'bg-slate-400' : 'bg-black'} py-2 px-6  text-white w-full font-semibold my-5 rounded-lg`}
                >
                Place Order
            </button>
        </>
    );
};

export default Payment;
