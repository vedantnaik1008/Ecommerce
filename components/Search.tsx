"use client"
import { combinedData, electronicsData } from '@/constants/api'
import { useDebounce } from '@/hooks/useDebounce'
import React, { useEffect, useState } from 'react'
import {FcSearch} from "react-icons/fc"
import  { useRouter } from 'next/navigation'



const Search = () => {
  const router = useRouter();
    const [input, setInput] = useState('')
    const [iresponse, isetResponse] = useState(electronicsData)
    const debouncedSearch = useDebounce(input, 500)

    useEffect(() => {
      if (debouncedSearch) {
        const results = combinedData.filter(item => {
          return JSON.stringify(item)
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase())
        })
        isetResponse(results)
      } else {
        isetResponse(combinedData)
      }
    }, [debouncedSearch])

    const Search = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
    }

    const Submit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
    }
  return (
    <form className='w-[40%] flex justify-center' onSubmit={Submit}>
        <label id='search' className='relative w-full flex items-center gap-3'>
          <input
            value={input} name='search'
            onChange={Search} className='border-black border rounded-full placeholder-black placeholder:Search p-3 w-full'/>
            <button className='border border-black px-[20px] py-[12px] text-white font-semibold rounded-full' type='submit'><FcSearch size='26px'/></button>
        </label>

        {input && iresponse && iresponse.length > 0 ? (
          <ul className='absolute top-[62px] z-50 bg-white shadow  w-[40%] mx-auto'>
            {iresponse.map(item => (
              <li key={item._id} onClick={() => {
                router.push(`/details/${item._id}?id=${item._id}`); 
                setInput('')}} 
                className='p-3 hover:bg-gray-100 border border-black rounded-sm cursor-pointer'>
                {item.title}
              </li>
            ))}
          </ul>
        ): null}
    </form>
  )
}

export default Search
