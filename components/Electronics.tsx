'use client'
import { useState } from "react"
import {combinedData, electronicsData} from '@/constants/api'
import Card from "./Card";

export interface Electronic{
  id: number;
  title: string;
  category: string
  description: string
  image: string;
  price: number;
  rating: number;
}

const Electronics = () => {
  const [response, setResponse] = useState(electronicsData)
  const [iresponse, isetResponse] = useState(combinedData)


  return (
      <div className="w-[95%] mx-auto py-[100px]">
        <div className="grid grid-cols-1 six:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[60px]">
          {response.map((res) => (
            <div className="" key={res._id}>
              <Card res={res} />
            </div>
          ))}
        </div>
      </div>
  )
}

export default Electronics