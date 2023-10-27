'use client'
import React from 'react'
import Image from "next/image"
import { Product } from '../hooks/useFetch';
import RatingStars from './RatingStars';
import { useDispatch } from 'react-redux';
import { addItem } from './reducers/addItems';
import Link from 'next/link';


interface Props{
    res: Product
}

const Card = ({res} : Props) => {
  const dispatch = useDispatch()
    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...' // Add ellipsis if text is too long
        }
        return text
      }

  return (
    <div className="p-[20px] bg-white shadow-2xl border-none rounded-xl h-full">
          <Link href={`/details/${res._id}?id=${res._id}`} className="" key={res._id}>
            <div  className="flex items-center flex-col justify-center h-[60%]">
              <Image src={res.image} sizes='200px' alt="items-image" width={200} height={245} className="md:hover:scale-110 transition-all duration-300 ease-in-out flex overflow-hidden object-cover"/>
            </div>
            </Link>  
            <div className="flex justify-between items-center mt-[20px] h-[10%]">
              <h2 className="text-black font-medium max-w-[200px]">{truncateText(res.title, 20)}</h2>
              <span className="bg-gray-300 px-2 py-1 border-none rounded-sm text-black font-bold relative z-20">${res.price}</span>
            </div>
            <div className="flex justify-between items-center mt-[20px]  md:mt-[20px] h-[10%]">
              <button onClick={()=> dispatch(addItem(res))} className="bg-black rounded-[30px] text-white font-semibold py-1 px-4 hover:bg-slate-400">Add To Cart</button>
              <RatingStars rating={res.rating} />
            </div>
          </div>
  )
}

export default Card
