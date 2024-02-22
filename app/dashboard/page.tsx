import SLiderCLothes from '@/components/SliderClothes'
import SLiderElectronics from '@/components/SliderElectronics';
import Trending from '@/components/Trending';
import Banner from '@/components/ui/Banner';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';

const Dashboard = () => {
    return (
        <>
                <Header />
                <Banner />
                <Trending />
                <SLiderCLothes />
                <SLiderElectronics />
                <Footer />
        </>
    );
};

export default Dashboard;
