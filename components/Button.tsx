'use client'
import React from 'react'
import { IoClose } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export type Orders = {
    id: string;
    title: string;
    category: string
    description: string
    image: string;
    price: number;
    rating: number;
    quantity: number
}

type Props = {
    res: Orders;
}

const Button = ({ res }: Props) => {
    const router = useRouter()
        const deleteOrder = async (id: string) => {
            try {
            const res = await fetch(`http://localhost:3000/api/deleteOrder/${id}`, {
                method: "DELETE"
            })
            if(res.ok){
                alert("Your order canceled successfully")
            }
            } catch (error) {
                alert("failed to cancel your order")
            }finally{
                router.refresh()
            }
    }

  return (
    <>
      <span className='' onClick={() => deleteOrder(res.id)}><IoClose size="25px" className="hover:bg-zinc-200 rounded-md transition-all duration-300 ease-in-out"/></span>
    </>
  )
}

export default Button
