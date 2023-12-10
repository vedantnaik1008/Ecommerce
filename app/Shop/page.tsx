'use client'
import dynamic from 'next/dynamic'
const AllProducts = dynamic(() => import('@/components/AllProducts'), {
  ssr: false
})

const Page = () => {
  return (
    <>
      <AllProducts />
    </>
  )
}

export default Page
