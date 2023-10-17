'use client'
import { electronicsData } from '@/constants/api'
import React, { useState } from 'react'
import Image from 'next/image'
import {FaMinus, FaPlus} from 'react-icons/fa'
import Link from 'next/link'
import PriceList from '@/components/PriceList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Page = () => {
    const [response, setResponse] = useState(electronicsData)


  return (
    <>
    <Header />
    {response.length === 0 ? (
        <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-[100vh] px-4">
          <p className="w-full p-2 text-center font-bold">
            Your product cart is currently empty
          </p>
          <Link href={"/Shop"}>
            <button className="text-white py-2 px-6 rounded-md bg-black duration-200">
              Return to Shop
            </button>
          </Link>
        </div>
      ) : <>
            <div className="pt-[100px] flex items-center justify-center w-full relative">
              <h2 className="text-black text-5xl font-extrabold">Your Cart</h2>
            </div>
            <div className="relative sm:flex sm:flex-col sm:items-center lg:flex lg:flex-row lg:items-start justify-between  w-[90%] mx-auto my-20">
              <div className='grid grid-cols-1 bg-gray-300 sm:w-full md:w-full lg:w-[65%]'>
                      {response.map((res) => (
                        <div className="" key={res._id}>
                          <Link href={`/details/${res._id}?id=${res._id}`} className="sm:p-[15px] four:p-[20px]  bg-white shadow-2xl rounded-xl  h-[90%]  mb-[30px] flex  justify-between items-center flex-col lg:flex-row">
                            <div className="flex items-center flex-col justify-center ">
                              <Image src={res.image} alt="items-image" width={"200"} height={"100"} className="flex overflow-hidden rounded-sm h-full w-[100%] object-cover" />
                            </div>
                            <div className="">
                              <h2 className=" text-black text-center font-medium">{res.title}</h2>
                              <div className="flex gap-4 my-5 max-four:flex-wrap max-four:items-center">
                                <span className="bg-gray-300 py-2 px-4 border-none rounded-md text-black font-bold relative z-20">${res.price}</span>
                                <div className="flex border border-gray-500 rounded-lg">
                                  <button className='p-2 rounded-l-lg bg-gray-200'><FaMinus /></button>
                                  <span className='border py-2 px-8 font-extrabold'>0</span>
                                  <button className='p-2 rounded-r-lg bg-gray-200'><FaPlus /></button>
                                </div>
                                <div>
                                  <button className='py-2 px-4 rounded-lg border border-gray-500 text-black font-semibold hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 ease-in-out'>Delete</button>
                                </div>
                              </div>
                              <div className=""><button className="py-2 px-6 bg-black text-white w-full font-semibold my-3 rounded-lg hover:bg-slate-400">Buy</button></div>
                            </div>
                          </Link>
                        </div>
                      ))}
              </div>
              <div className="sm:w-full md:w-full lg:w-[30%]">
                <PriceList />
              </div>
            </div>
            <Footer />
            </>
          }         
      </>
  )
}

export default Page
