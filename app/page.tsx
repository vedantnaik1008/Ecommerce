import Banner from "@/components/Banner";
import SliderClothes from "@/components/SliderClothes";
import SliderElectronics from "@/components/SliderElectronics";
import Trending from "@/components/Trending";
import Dashboard from "./dashboard/page";
import { Provider } from "react-redux";
import { store } from "@/store";


export default function Home() {

  return (
    <>
      <div>
          <Dashboard />
      </div>
    </>
  )
}
