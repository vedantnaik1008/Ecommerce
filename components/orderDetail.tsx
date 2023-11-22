'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import Loading from './Loading';
import { useRouter } from 'next/navigation';

interface Order{
  id: string;
  title: string;
  category: string
  description: string
  image: string;
  price: number;
  rating: number;
  quantity: number
}

const OrderDetail = () => {
    const [order, setOrder] =  useState<Order[]>([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    
    const fetchData = async () => {
            try {
              setLoading(true)
              const res = await fetch(`/api/getOrder`, { cache: 'no-store' });
              const data = await res.json();
              setOrder(data);
              setLoading(false)
            } catch (error) {
                console.log("getOrder fetch error" ,error);
            }finally{
              router.refresh()
            }
    }

    const deleteOrder = async (id: string) => {
        try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}` + `/api/deleteOrder/${id}`, {
            method: "DELETE",
            cache: 'no-store' 
        })
        if(res.ok){
            alert("Your order canceled successfully")
        }
        } catch (error) {
            alert("failed to cancel your order")
        }finally{
          router.refresh()
        }
        fetchData()
    }

    useEffect(()=> {
        fetchData()
    }, [])

    if(loading)return <Loading />

  return (
    <>
    <Header />
      {order.length > 0 ? (<div className='py-36 bg-[#cdd1d7] rounded-lg'>
        <h2 className="text-center text-black text-5xl">Order Details</h2>
        <div className='grid grid-cols-4 items-center justify-items-center mt-10 py-10 bg-black text-white font-bold'>
              <span className=''>Product</span>
              <span className=''>Quatity</span>
              <span className=''>Price</span>
              <span className=''>Cancel</span>

        </div>
        {order.map((res) => (
          <div key={res.id} className='grid grid-cols-4 items-center justify-items-center mb-4 bg-white'>
            <div className="flex justify-center items-center border-black">
              <Image src={res.image} width="100" height="100" alt="order-image" sizes="100" className=''/>
            </div>
            <span className=''>{res.quantity}</span>
            <span className=''>{res.price}</span>
            <span className='' onClick={() =>{
                deleteOrder(res.id)
            }}><IoClose size="25px" className="hover:bg-zinc-200 rounded-md transition-all duration-300 ease-in-out"/></span>
          </div>
        ))}
      </div>) : (<div className='h-[100dvh] mx-auto w-[90%] flex flex-col justify-center items-center bg-[#cdd1d7]'>
        <p className="font-extrabold text-center text-xl mb-5">You haven&apos;t placed any orders yet. Get shopping!</p>
        <Link href={"/Shop"}>
          <button className="text-white py-2 px-6 rounded-md bg-black duration-200">
            Return to Shop
          </button>
        </Link>
      </div>)} 
    <Footer />
  </>
  )
}

export default OrderDetail
