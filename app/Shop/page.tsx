import { Metadata } from 'next'
import AllProducts from '../../components/AllProducts'

const metadata: Metadata = {
  title: 'QickKart',
  description: 'Ecommerce website built with Next.js',
}

const Page = () => {
  return (
    <>
      <AllProducts />
    </>
  )
}

export default Page
