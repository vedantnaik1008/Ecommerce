import { prisma } from '@/lib/db/prisma'
import React from 'react'
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Link from 'next/link';

const Order = async() => {
    const order = await prisma.order.findMany()
   
  return (
    <>
      <Header />
        {order.length > 0 ? (<div className='py-36 bg-[#cdd1d7] rounded-lg'>
          <h2 className="text-center text-black text-5xl">Order Details</h2>
          <div className='grid grid-cols-4 items-center justify-items-center mt-10 py-10 bg-black text-white font-bold'>
                <span className=''>Product</span>
                <span className=''>Quatity</span>
                <span className=''>Price</span>
                <span className=''>Cancel</span>

          </div>
          {order.map((res) => (
            <div key={res.id} className='grid grid-cols-4 items-center justify-items-center mb-4 bg-white'>
              <div className="flex justify-center items-center border-black">
                <Image src={res.image} width="100" height="100" alt="order-image" sizes="100" className=''/>
              </div>
              <span className=''>{res.quantity}</span>
              <span className=''>{res.price}</span>
              <Button res={res}/>
            </div>
          ))}
        </div>) : (<div className='h-[100dvh] mx-auto w-[90%] flex flex-col justify-center items-center bg-[#cdd1d7]'>
          <p className="font-extrabold text-center text-xl mb-5">You haven&apos;t placed any orders yet. Get shopping!</p>
          <Link href={"/Shop"}>
            <button className="text-white py-2 px-6 rounded-md bg-black duration-200">
              Return to Shop
            </button>
          </Link>
        </div>)} 
      <Footer />
    </>
  )
}

export default Order
