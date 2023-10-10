import Cart from '@/components/Cart'
import Link from 'next/link'
import React from 'react'

const items = [{
  id: 1, name: ""
}]

const Nav = () => {
  return (
    <nav className='flex gap-4 items-center'>
      <ul className="flex gap-4">
        <li className="text-black hover:underline underline-offset-1 font-bold">
          <Link href="/">Home</Link>
        </li>
      </ul>
      <Cart />
    </nav>
  )
}

export default Nav
