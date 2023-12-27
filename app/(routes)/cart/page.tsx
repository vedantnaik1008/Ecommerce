'use client';
import Loading from '@/components/ui/Loading';
import dynamic from 'next/dynamic';
const CartPage = dynamic(() => import('@/components/CartPage'), {
    ssr: false,
    loading: () => <Loading />
});

const Page = () => {
    return <CartPage />;
};

export default Page;
