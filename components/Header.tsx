"use client"
import React, { useEffect } from 'react'
import Nav from './Nav'
import Search from '@/components/Search'
import Link from 'next/link'

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
    <header className='fixed z-50 w-full flex justify-between items-center p-[10px] bg-white shadow-2xl'>
      <Link href="/" className='text-black font-extrabold text-2xl'>QuickKart</Link>
      <Search  />
      <Nav />
    </header>
  )
}

export default Header
