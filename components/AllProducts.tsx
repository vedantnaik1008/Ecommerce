'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Loading from './Loading'
import { useFetch } from '@/hooks/useFetch'

interface DataFilter {
    id: number;
    name: string;
   }
   
    interface Product{
    _id: number;
    title: string;
    category: string
    description: string
    image: string;
    price: number;
    rating: number;
  }

   const dataFilter: DataFilter[] = [
    {id: 1, name: 'men'},
    {id: 2, name: 'women'},  
    {id: 3, name: 'electronics'},
   ];

const AllProducts = () => {
    const { response, loading } = useFetch('/fetchData')
    const [filter, setFilter] = useState<number | null>(null)
    if(loading)return <Loading />

    const handleFilter = (id: number) => {
        setFilter(id)
    }

    const filteredData = response.filter((res) => {
        if(filter) {
            const data = dataFilter.find((data) => data.id === filter)
            if(data) {
                return res.category === data.name 
            } 
        }
        return res
     })

  return (
    <div className="w-[95%] h-full mx-auto py-[100px]">
        <div className="flex sm:justify-center md:justify-normal gap-4">
            {dataFilter.map((data) => (
                <button key={data.id} onClick={() => handleFilter(data.id)} className="bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg px-4 py-2">{data.name}</button>
            ))}
        </div>
      <div className="grid grid-cols-1 six:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[50px]">
        {filteredData.map((res) => (
            <Link href={`/details/${res._id}?id=${res._id}`} className="" key={res._id}>
              <Card res={res} />
            </Link>
        ))}
      </div>
    </div>
  )
}

export default AllProducts
