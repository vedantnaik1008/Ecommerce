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
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
    return (
        <>
            <div className='bg-gray-300'>
                <Header />
                <Banner />
                <Trending />
                <DynamicSLiderCLothes />
                <DynamicSLiderElectronics />
                <Footer />
            </div>
        </>
    );
};

export default Dashboard;
