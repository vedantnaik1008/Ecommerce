'use client'
import dynamic from 'next/dynamic'
const Electronics = dynamic(() => import('@/components/Electronics'), {
  ssr: false
})

const Page = () => {
  return (
    <div>
      <Electronics />
    </div>
  )
}

export default Page
