'use client'
import dynamic from 'next/dynamic'
const Products = dynamic(() => import('@/components/Products'), {
  ssr: false
})

const Page = () => {
  return (
    <div>
      <Products />
    </div>
  )
}

export default Page
