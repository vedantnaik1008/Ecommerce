'use client';
import SLiderCLothes from '@/components/SliderClothes';
import SLiderElectronics from '@/components/SliderElectronics';
import Trending from '@/components/Trending';
import Banner from '@/components/ui/Banner';

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
