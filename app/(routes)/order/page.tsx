'use client';
import Loading from '@/components/ui/Loading';
import dynamic from 'next/dynamic';
const OrderDetails = dynamic(() => import('@/components/orderDetails'), {
    ssr: false,
    loading: () => <Loading />
});

const OrderPage = () => {
    return <OrderDetails />
};

export default OrderPage;
