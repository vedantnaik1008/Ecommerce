"use client"
import React, { useEffect } from 'react'
import Nav from './Nav'
import Search from '@/components/Search'
import Link from 'next/link'
import Image from 'next/image'
import Img from '@/public/appleLaptops/quickkart-high-resolution-logo-color-on-transparent-background.png'

const Header = () => {

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
    <header className='fixed z-50 w-full flex justify-between items-center py-[10px] px-[20px] bg-white shadow-2xl'>
      <Link href="/" className=''><Image src={Img} alt="items-image" width={80} height={100} className='object-cover'/></Link>
      <Search  />
      <Nav />
    </header>
  )
}

export default Header
