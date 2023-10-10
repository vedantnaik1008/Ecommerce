"use client"
import React, { useEffect, useState } from 'react'
import {FcSearch} from "react-icons/fc"

const Search = () => {
    const [input, setInput] = useState('')


  return (
    <form className='w-[40%] flex justify-center'>
        <label id='search' className='relative w-full flex items-center gap-3'>
          <input
            value={input} name='search'
            onChange={e => setInput(e.target.value)} className='border-black border rounded-full placeholder-black placeholder:Search p-3 w-full'/>
            <button className='border border-black px-[20px] py-[12px] text-white font-semibold rounded-full' type='submit'><FcSearch size='26px'/></button>
        </label>
    </form>  
  )
}

export default Search
