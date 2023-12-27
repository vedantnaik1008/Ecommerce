'use client';
import Loading from '@/components/ui/Loading';
import dynamic from 'next/dynamic';
const Electronics = dynamic(() => import('@/components/Electronics'), {
    ssr: false,
    loading: () => <Loading />
});

const Page = () => {
    return (
        <div>
            <Electronics />
        </div>
    );
};

export default Page;
