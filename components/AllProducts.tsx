'use client'
import { combinedData } from '@/constants/api'
import Link from 'next/link'
import React, { useState } from 'react'
import Card from './Card'

interface DataFilter {
    id: number;
    name: string;
   }
   
   const dataFilter: DataFilter[] = [
    {id: 1, name: 'men'},
    {id: 2, name: 'women'},  
    {id: 3, name: 'electronics'},
   ];

const AllProducts = () => {
    const [response, setResponse] = useState(combinedData)
    const [filter, setFilter] = useState<number | null>(null)

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
    <div className="w-[95%] mx-auto py-[100px]">
        <div className="bg-white flex gap-4">
            {dataFilter.map((data) => (
                <button key={data.id} onClick={() => handleFilter(data.id)} className="">{data.name}</button>
            ))}
        </div>
      <div className="grid grid-cols-1 six:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[60px]">
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
