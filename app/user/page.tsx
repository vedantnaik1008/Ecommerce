import HankoProfile from '../../components/HankoProfile'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Page = () => {
  return (
    <>
      <Header />
        <div className='flex min-h-screen flex-col items-center justify-center  mx-auto  pt-[100px] bg-white'>
          <HankoProfile />
        </div>
      <Footer />
    </>
  )
}

export default Page
