"use client"

import { Product } from '@/hooks/useFetch'
import React, { useState } from 'react'
import Card from './ui/Card'

type Props={
    data: Product[]
}

const Pagination = ({data}: Props) => {
    const [current, setCurrent] = useState(1)
    const itemsPerPage = 10
    const startIndex = (current - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage
    const totalPages = Math.ceil(data.length / itemsPerPage)
    const currentItems = data.slice(startIndex, endIndex)

    const changePage = (pageNumber: number) => {
        if(pageNumber >= 1 && pageNumber <= Math.ceil(data.length / itemsPerPage)){
            setCurrent(pageNumber)
        }
    }
  return (
      <section className=''>
          <div className='grid grid-cols-1 six:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[50px]'>
              {currentItems.map((res) => (
                  <div key={res._id}>
                      <Card res={res} />
                  </div>
              ))}
          </div>
          <div className='mt-20 flex justify-center gap-4'>
              {Array.from({ length: totalPages }, (_, index) => (
                  <>
                      <div className=''>
                          <button
                              disabled={current === index + 1}
                              className={`${
                                  current === index + 1
                                      ? 'bg-gray-200 text-black'
                                      : 'bg-black text-white'
                              }  px-8 py-4 rounded-lg`}
                              key={index + 1}
                              onClick={() => changePage(index + 1)}>
                              {index + 1}
                          </button>
                      </div>
                  </>
              ))}
          </div>
      </section>
  );
}

export default Pagination
