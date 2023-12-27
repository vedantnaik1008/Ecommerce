'use client';
import Loading from '@/components/ui/Loading';
import dynamic from 'next/dynamic';
const Products = dynamic(() => import('@/components/Products'), {
    ssr: false,
    loading: () => <Loading />,
});

const Page = () => {
    return (
        <div>
            <Products />
        </div>
    );
};

export default Page;
