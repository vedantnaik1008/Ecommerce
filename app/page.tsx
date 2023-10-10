import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SliderClothes from "@/components/SliderClothes";
import SliderElectronics from "@/components/SliderElectronics";
import Trending from "@/components/Trending";


export default function Home() {

  return (
    <>
      <div className="bg-gray-300">
        <Banner />
        <Trending />
        <SliderClothes />
        <SliderElectronics />
      </div>
    </>
  )
}
