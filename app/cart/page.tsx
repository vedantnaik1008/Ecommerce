'use client'
import { electronicsData } from '@/constants/api'
import React, { useState } from 'react'
import Image from 'next/image'
import {FaMinus, FaPlus} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Link from 'next/link'

const Page = () => {
    const [response, setResponse] = useState(electronicsData)

    const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...' // Add ellipsis if text is too long
    }
    return text
  }
  return (
    <>
    {response.length === 0 ? (
        <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-[100vh] px-4">
          <p className="w-full p-2 text-center font-bold">
            Your product cart is currently empty
          </p>
          <Link href={"/"}>
            <button className="text-white py-2 px-6 rounded-md bg-orange-500 duration-200">
              Return to Shop
            </button>
          </Link>
        </div>
      ) : <><div className="pt-[100px] flex items-center justify-center w-full relative">
                  <h2 className="text-black text-5xl font-extrabold">Your Cart</h2>
                  <div className="absolute left-[15%] -bottom-20">
                      <p className="font-bold text-2xl">Subtotal: <span className="font-bold">$</span></p>
                      
                  </div>
                  {/* <button className="absolute right-2 top-12 bg-red-500 text-white font-bold py-2 px-4 rounded-md">Delete All</button> */}
              </div>
              <div className='grid grid-cols-1 my-20 bg-gray-300'>
                      {response.map((res) => (
                          <div className="" key={res._id}>
                              <div className="p-[20px]  bg-white shadow-2xl rounded-xl  w-[70%] h-[90%] mx-auto my-[30px] flex  justify-between items-center ">
                                  <div className="flex items-center flex-col justify-center ">
                                      <Image src={res.image} alt="items-image" width={"200"} height={"100"} className="flex overflow-hidden rounded-sm h-full w-[100%] object-cover" />
                                  </div>
                                  <div className="">
                                      <h2 className=" text-black text-center font-medium">{res.title}</h2>
                                      
                                      <div className="flex justify-end items-center gap-4 mt-5">
                                        <span className="bg-gray-300 py-2 px-4 border-none rounded-md text-black font-bold relative z-20">${res.price}</span>
                                        <div className="flex border border-gray-500 rounded-lg">
                                            <button className='p-2 rounded-l-lg bg-gray-200'><FaMinus /></button>
                                            <span className='border ] py-2 px-8 font-extrabold'>0</span>
                                            <button className='p-2 rounded-r-lg bg-gray-200'><FaPlus /></button>
                                        </div>
                                        <div>
                                            <button className='py-2 px-4 rounded-lg border border-gray-500 text-black font-semibold'>Delete</button>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div></>}
    
      </>
  )
}

export default Page
