'use client';
import Loading from '@/components/ui/Loading';
import dynamic from 'next/dynamic';
const AllProducts = dynamic(() => import('@/components/AllProducts'), {
    ssr: false,
    loading: () => <Loading />
});

const Page = () => {
    return (
        <>
            <AllProducts />
        </>
    );
};

export default Page;
