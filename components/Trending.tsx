'use client'
import { useState } from "react"
import Image from "next/image"
import {electronicsData, trendingProducts} from '@/constants/api'
import RatingStars from "./RatingStars";
import Link from "next/link";

export interface Electronic{
  id: number;
  title: string;
  category: string
  description: string
  image: string;
  price: number;
  rating: number;
}

const Trending = () => {
  const [response, setResponse] = useState(trendingProducts)

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...' // Add ellipsis if text is too long
    }
    return text
  }

  return (
    <div className="my-[50px] w-[90%] mx-auto">
    <div className="text-center my-[20px]">
        <h2 className="font-bold text-3xl text-black">Bestseller</h2>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {response.map((res) => (
            <Link href={`/details/${res._id}?id=${res._id}`} className="" key={res._id}>
              <div className="p-[20px] bg-white shadow-2xl border-none rounded-xl   transition-all duration-300 ease-in-out  h-[440px]">
            <div className="flex items-center flex-col justify-center h-[70%]">
              <Image src={res.image} alt="items-image" width={"200"} height={"100"} className="hover:scale-110 transition-all duration-300 ease-in-out flex overflow-hidden rounded-sm object-cover w-full h-full"/>
            </div>
            <div className="flex justify-between items-center h-[10%] mt-[20px]">
              <h2 className="mt-[20px] text-black font-medium max-w-[200px]">{truncateText(res.title, 20)}</h2>
              <span className="bg-gray-300 px-2 py-1 border-none rounded-sm text-black font-bold relative z-20">${res.price}</span>
            </div>
            <div className="flex justify-between items-center  mt-[20px]">
                          <button className="bg-black rounded-[30px] text-white font-semibold py-1 px-4">Add To Cart</button>
                          <RatingStars rating={res.rating} />
                        </div>
          </div>
            </Link>
        ))}
      </div>
      </div>  
  )
}

export default Trending