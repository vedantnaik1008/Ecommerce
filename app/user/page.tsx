'use client'
import dynamic from 'next/dynamic'
const DynamicHankoProfile = dynamic(() => import('@/components/HankoProfile'), {
 ssr: false
})
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Page = () => {
  return (
    <>
      <Header />
        <div className='flex min-h-screen flex-col items-center justify-center  mx-auto  pt-[100px] bg-white'>
          <DynamicHankoProfile />
        </div>
      <Footer />
    </>
  )
}

export default Page
