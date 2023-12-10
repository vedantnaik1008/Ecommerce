'use client'
import dynamic from 'next/dynamic'
const DynamicSLiderCLothes = dynamic(() => import('@/components/SliderClothes'), {
 ssr: false
})
const DynamicSLiderElectronics = dynamic(() => import('@/components/SliderElectronics'), {
  ssr: false
})
import Banner from '@/components/Banner'
import Trending from "../../components/Trending";

const Dashboard = () => {

  return (
    <>
      <div className="bg-gray-300">
        <Banner />
        <Trending />
        <DynamicSLiderCLothes />
        <DynamicSLiderElectronics />
      </div>
    </>
  )
}

export default Dashboard