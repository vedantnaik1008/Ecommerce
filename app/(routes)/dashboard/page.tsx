'use client';
import dynamic from 'next/dynamic';
const DynamicSLiderCLothes = dynamic(
    () => import('@/components/SliderClothes'),
    {
        ssr: false,
    }
);
const DynamicSLiderElectronics = dynamic(
    () => import('@/components/SliderElectronics'),
    {
        ssr: false,
    }
);
const Trending = dynamic(() => import('@/components/Trending'), {
    ssr: false,
});
import Banner from '@/components/ui/Banner';

const Dashboard = () => {
    return (
        <>
            <div className='bg-gray-300'>
                <Banner />
                <Trending />
                <DynamicSLiderCLothes />
                <DynamicSLiderElectronics />
            </div>
        </>
    );
};

export default Dashboard;
