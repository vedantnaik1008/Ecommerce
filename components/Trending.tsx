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
  const { response, loading } = useFetch('/api/fetchData')
  const data = response.filter((res) => res.category !== 'electronics').slice(0, 4)

  if(loading)return <Loading />

  return (
    <div className="my-[50px] w-[90%] mx-auto">
    <div className="text-center my-[20px]">
        <h2 className="font-bold min-[320px]:text-3xl md:text-5xl text-black">Bestseller</h2>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {data.map((res) => (
              <div key={res._id}>
                <Card res={res} />
              </div>
        ))}
      </div>
      </div>  
  )
}

export default Trending