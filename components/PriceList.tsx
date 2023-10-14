import React from 'react'

const PriceList = () => {
  return (
    <div className='bg-white p-[20px] rounded-lg'>
        <h2 className='text-xl uppercase text-black font-bold'>Price Details</h2>
        <hr className='bg-gray-300 my-2'/>
        <div className="my-[20px]">
            <div className="flex justify-between my-3">
                <p className='font-semibold text-lg'>Price</p>
                <span className="text-black font-bold">$32423</span>
            </div>
            <div className="flex justify-between my-3">
                <p className='font-semibold text-lg'>Delivery Charges</p>
                <span className="text-green-400 font-bold">Free</span>
            </div>
            
        </div>
        <hr className='bg-gray-300 my-2'/>
        <div className="flex justify-between">
            <h2 className='text-xl uppercase text-black font-bold'>Total Amount</h2>
            <span className="text-black font-bold">$238329</span>
        </div>
    </div>
  )
}

export default PriceList
