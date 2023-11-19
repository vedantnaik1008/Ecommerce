'use client'
import dynamic from 'next/dynamic'
const DynamicHeader = dynamic(() => import('@/components/Header'), {
  ssr: false
 })
 const DynamicBanner = dynamic(() => import('@/components/Banner'), {
  ssr: false
 })
 const DynamicTrending = dynamic(() => import('@/components/Trending'), {
  ssr: false
 })
 const DynamicSLiderCLothes = dynamic(() => import('@/components/SliderClothes'), {
  ssr: false
 })
 const DynamicSLiderElectronics = dynamic(() => import('@/components/SliderElectronics'), {
   ssr: false
  })
 const DynamicFooter = dynamic(() => import('@/components/Footer'), {
  ssr: false
 })
 
import Trending from "../../components/Trending";

const Dashboard = () => {

  return (
    <>
      <div className="bg-gray-300">
        <DynamicHeader />
        <DynamicBanner />
        <DynamicTrending />
        <DynamicSLiderCLothes />
        <DynamicSLiderElectronics />
        <DynamicFooter />
      </div>
    </>
  )
}

export default Dashboard