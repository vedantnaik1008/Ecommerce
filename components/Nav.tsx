import Cart from '@/components/Cart'
import Link from 'next/link'
import React, { useState } from 'react'
import Search from '@/components/Search'
import Image from 'next/image'
import Img from '@/public/appleLaptops/quickkart-high-resolution-logo-color-on-transparent-background.png'
import {IoCloseOutline} from 'react-icons/io5'

const items = [{id: 1, name: "Home", link: '/dashboard'},
{id: 2, name: "Shop", link: '/Shop'},
{id: 3, name: "User", link: '/user'},]

interface Props{
  show: boolean;
  setShow: (show: boolean) => void;
}

const Nav = ({show, setShow} : Props) => {
  return (
    // <nav className='flex gap-4 justify-between items-center w-full'>
    //   <Link href="/" className=''><Image src={Img} alt="items-image" width={80} height={100} className='object-cover'/></Link>
    //   <Search  />
    //   <div className={`${isNav ? 'absolute z-50 top-[80px] right-0 bg-white w-[50%] flex flex-col items-end p-8 gap-8  h-[100vh] rounded-l-sm ' : 'flex items-center gap-4'}`}>
    //   <IoCloseOutline color="black" size="38px" className="absolute left-2 top-2 sm:block md:hidden" />
        // <ul className={`${isNav ? "flex flex-col items-center gap-8" : "flex gap-4"}`}>
        //   {items.map((item) => (
        //     <li key={item.id} className="text-black hover:underline underline-offset-1 font-bold">
        //       <Link href={item.link}>{item.name}</Link>
        //     </li>
        //   ))}
        // </ul>
        // <Cart />
    //   </div>
      // <div onClick={()=> setIsNav(!false)} className="flex flex-col justify-center items-center gap-1 md:hidden">
      //   <span className="bg-black h-1 w-8 rounded-lg ml-1"></span>
      //   <span className="bg-black h-1 w-8 rounded-lg ml-3"></span>
      //   <span className="bg-black h-1 w-8 rounded-lg ml-1"></span>
      // </div>
    // </nav>

<nav className="md:w-full">
<div className="min-[320px]:hidden md:flex justify-between">
<Link href="/dashboard" className=''><Image src={Img} alt="items-image" width={80} height={100} className='object-cover'/></Link>
      <Search  />
  <ul className="md:flex md:items-center md:justify-center md:gap-8 md:h-16">
          {items.map((item) => (
            <li key={item.id} className="text-black hover:underline underline-offset-1 font-bold">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        <Cart />
  </ul>  
</div>


{show && (
  <>
  <nav className="absolute z-50 top-[70px] right-0 h-[100vh] w-[100%] bg-white rounded-sm md:hidden">
          <div className={show ? "min-[320px]:transition-all min-[320px]:duration-500 min-[320px]:translate-x-[0%] md:hidden max-w-7xl mx-auto min-[320px]:p-4" : "min-[320px]:translate-x-[150%] md:hidden max-w-7xl mx-auto px-2 sm:px-6 "}>
            <div className="" onClick={() => setShow(!show)}>
              <IoCloseOutline color="black" size="38px" className="absolute left-2 top-2 sm:block md:hidden" />
              <ul className='flex flex-col items-end gap-4'>
                {items.map((item) => (
                  <li key={item.id} className="text-black hover:underline underline-offset-1 font-bold">
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
                <Cart />
              </ul>
              
            </div>
          </div>
        </nav></>
  )}
</nav>
  )
}

export default Nav
