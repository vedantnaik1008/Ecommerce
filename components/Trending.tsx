'use client'
import Link from "next/link";
import { useFetch } from "@/hooks/useFetch";
import Loading from "./Loading";
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

const Trending = () => {
  const { response, loading } = useFetch('/fetchData')
  const data = response.filter((res) => res.category !== 'electronics').slice(0, 4)
   

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...' // Add ellipsis if text is too long
    }
    return text
  }

  if(loading)return <Loading />

  return (
    <div className="my-[50px] w-[90%] mx-auto">
    <div className="text-center my-[20px]">
        <h2 className="font-bold text-3xl text-black">Bestseller</h2>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((res) => (
            <Link href={`/details/${res._id}?id=${res._id}`} className="" key={res._id}>
              <Card res={res} />
            </Link>
        ))}
      </div>
      </div>  
  )
}

export default Trending