"use client"
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Link from 'next/link'
import Search from './Search'
import Image from 'next/image'
import Img from '@/public/appleLaptops/quickkart-high-resolution-logo-color-on-transparent-background.png'

const Header = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      if(scrollPosition > 80){
        document.querySelector("header")?.classList.add("show")
      } else{
        document.querySelector("header")?.classList.remove("show")
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.addEventListener("scroll", onScroll)
  })

  return (
    <header className='fixed z-50 w-full  py-[10px] sm:px-[10px] md:px-[20px] bg-white shadow-2xl'>
      <div className="flex items-center justify-center">
        <div className="md:hidden w-[90%] mx-auto">
          <Search  />
        </div>
          <div onClick={()=> setShow(!show)} className="absolute right-0 flex flex-col gap-1 min-[320px]-block md:hidden">
            <span className="bg-black h-1 w-8 rounded-lg ml-1"></span>
            <span className="bg-black h-1 w-8 rounded-lg ml-3"></span>
            <span className="bg-black h-1 w-8 rounded-lg ml-1"></span>
          </div>
        <Nav show={show} setShow={setShow}/>
      </div>
    </header>
  )
}

export default Header
