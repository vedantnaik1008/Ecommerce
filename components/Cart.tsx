import Link from 'next/link'
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Cart = () => {
  return (
    <Link href={"/cart"} className='relative flex gap-2 items-center justify-center bg-black rounded-[30px] py-1 px-4'>
      <AiOutlineShoppingCart size="26px" color="white"/>
      <span className="text-white">0</span> 
      {/* <span className="absolute black font-extrabold text-[23px] z-10 -top-5 -right-2">0</span> */}
    </Link>
  )
}

export default Cart
