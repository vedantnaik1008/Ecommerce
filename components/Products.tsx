'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card";
import { productData } from "@/constants/api";
import Link from "next/link";

export interface Product{
  _id: number;
  title: string;
  category: string
  description: string
  image: string;
  price: number;
  rating: number;
}

const Products = () => {
  const [response, setResponse] = useState(productData)

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...' // Add ellipsis if text is too long
    }
    return text
  }

  return (
    <div className="w-[95%] mx-auto py-[100px]">
      <div className="grid grid-cols-1 six:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[60px]">
        {response.map((res) => (
            <Link href={`/details/${res._id}?id=${res._id}`} className="" key={res._id}>
              <Card res={res} />
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Products
