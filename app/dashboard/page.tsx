import Banner from "@/components/Banner";
import SliderClothes from "@/components/SliderClothes";
import SliderElectronics from "@/components/SliderElectronics";
import Trending from "@/components/Trending";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Provider } from "react-redux";
import { store } from "@/store";

const Dashboard = () => {

  return (
    <>
    
      <div className="bg-gray-300">
        <Header />
        <Banner />
        <Trending />
        <SliderClothes />
        <SliderElectronics />
        <Footer />
      </div>
    </>
  )
}

export default Dashboard