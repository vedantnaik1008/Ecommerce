import React from 'react'
import Image from "next/image"
import { Product } from '@/hooks/useFetch';
import RatingStars from './RatingStars';


interface Props{
    res: Product
}

const Card = ({res} : Props) => {
    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...' // Add ellipsis if text is too long
        }
        return text
      }

  return (
    <div className="p-[20px] bg-white shadow-2xl border-none rounded-xl h-[90%]">
            <div  className="flex items-center flex-col justify-center h-[60%]">
              <Image src={res.image} alt="items-image" width={200} height={100} className="md:hover:scale-110 transition-all duration-300 ease-in-out flex overflow-hidden object-cover"/>
            </div>
            <div className="flex justify-between items-center mt-[20px]">
              <h2 className="text-black font-medium max-w-[200px]">{truncateText(res.title, 20)}</h2>
              <span className="bg-gray-300 px-2 py-1 border-none rounded-sm text-black font-bold relative z-20">${res.price}</span>
            </div>
            <div className="flex justify-between items-center min-[320px]:my-[20px]  md:mt-[20px]">
              <button className="bg-black rounded-[30px] text-white font-semibold py-1 px-4 hover:bg-slate-400">Add To Cart</button>
              <RatingStars rating={res.rating} />
            </div>
          </div>
  )
}

export default Card
