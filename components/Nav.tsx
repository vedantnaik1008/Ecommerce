import Cart from '@/components/Cart'
import Link from 'next/link'
import React from 'react'

const items = [{id: 1, name: "Home", link: '/'},
{id: 2, name: "Shop", link: '/Shop'},]

const Nav = () => {
  return (
    <nav className='flex gap-4 items-center'>
      <ul className="flex gap-4">
        {items.map((item) => (
          <li key={item.id} className="text-black hover:underline underline-offset-1 font-bold">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Cart />
    </nav>
  )
}

export default Nav
