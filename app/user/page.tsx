'use client'
import dynamic from 'next/dynamic'
const DynamicHankoProfile = dynamic(() => import('@/components/HankoProfile'), {
 ssr: false
})

const Page = () => {
  return (
    <>
        <div className='flex min-h-screen flex-col items-center justify-center  mx-auto  pt-[100px] bg-white'>
          <DynamicHankoProfile />
        </div>
    </>
  )
}

export default Page
