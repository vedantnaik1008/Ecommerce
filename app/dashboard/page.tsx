'use client'
import dynamic from 'next/dynamic'
const DynamicSLiderCLothes = dynamic(() => import('@/components/SliderClothes'), {
 ssr: false
})
const DynamicSLiderElectronics = dynamic(() => import('@/components/SliderElectronics'), {
  ssr: false
 })
 const DynamicBanner = dynamic(() => import('@/components/Banner'), {
  ssr: false
 })
 const DynamicHeader = dynamic(() => import('@/components/Header'), {
  ssr: false
 })
import Trending from "../../components/Trending";
import Footer from '../../components/Footer'

const Dashboard = () => {

  return (
    <>
      <div className="bg-gray-300">
        <DynamicHeader />
        <DynamicBanner />
        <Trending />
        <DynamicSLiderCLothes />
        <DynamicSLiderElectronics />
        <Footer />
      </div>
    </>
  )
}

export default Dashboard