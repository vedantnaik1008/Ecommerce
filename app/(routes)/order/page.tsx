'use client';
import dynamic from 'next/dynamic';
const OrderDetails = dynamic(() => import('@/components/orderDetails'), {
    ssr: false,
});

const OrderPage = () => {
    return (
        <>
            <OrderDetails />
        </>
    );
};

export default OrderPage;
