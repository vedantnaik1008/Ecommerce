import { Product } from '@/hooks/useFetch';
import { RootState } from '@/store'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openForm } from './reducers/formClick';


const PriceList = () => {
    const dispatch = useDispatch()
    const totalPrice = useSelector((state: RootState) => state.addToCart.totalPrice);

  return (
    <div className='bg-white p-[20px] rounded-lg'>
        <h2 className='text-xl uppercase text-black font-bold'>Price Details</h2>
        <hr className='bg-gray-300 my-2'/>
        <div className="my-[20px]">
            <div className="flex justify-between my-3">
                <p className='font-semibold text-lg'>Price</p>
                <span className="text-black font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between my-3">
                <p className='font-semibold text-lg'>Delivery Charges</p>
                <span className="text-green-400 font-bold">Free</span>
            </div>
            
        </div>
        <hr className='bg-gray-300 my-2'/>
        <div className="flex justify-between">
            <h2 className='text-xl uppercase text-black font-bold'>Total Amount</h2>
            <span className="text-black font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <button onClick={() => dispatch(openForm())} className="py-2 px-6 bg-black text-white w-full font-semibold my-5 rounded-lg hover:bg-slate-400">Check Out</button>
    </div>
  )
}

export default PriceList
