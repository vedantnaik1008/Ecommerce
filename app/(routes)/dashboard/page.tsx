'use client';
const SLiderCLothes = dynamic(() => import('@/components/SliderClothes'), {
    ssr: false
});
const SLiderElectronics = dynamic(() => import('@/components/SliderElectronics'),{
        ssr: false
});
import Trending from '@/components/Trending';
import Banner from '@/components/ui/Banner';
import dynamic from 'next/dynamic';

const Dashboard = () => {
    return (
        <>
            <div className='bg-gray-300'>
                <Banner />
                <Trending />
                <SLiderCLothes />
                <SLiderElectronics />
            </div>
        </>
    );
};

export default Dashboard;
