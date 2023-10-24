'use client'
import { RootState } from '@/store'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeForm } from './reducers/formClick'
import { loadStripe } from '@stripe/stripe-js'
import { resetOrder, saveOrder } from './reducers/addItems'
const Form = () => {
    const products = useSelector((state: RootState)=> state.addToCart.product)
    const [address, setAddress] = useState({
        name: '',
        street: '',
        phone: '',
        city: '',
        pincode: '',
        state: ''
      })
      const isOpen = useSelector((state: RootState) => state.form.isOpen)
      const dispatch = useDispatch()
            
      function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setAddress(prev => ({ ...prev, [name]: value }))  
      }
      
      function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(address)
        // setAddress({ name: '', street: '', phone: '',city: '', pincode: '', state: '' })
      }

      
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      const handleCheckout = async() => {
        const stripe = await stripePromise
        const response = await fetch(`http://localhost:3000/api/checkout`,{
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({
            items: products,
          })
        })
        const data = await response.json()
        if(response.ok){
          await dispatch(saveOrder(products))
          stripe?.redirectToCheckout({ sessionId: data.id })
          dispatch(resetOrder())
        }else{
          throw new Error("Failed to create stripe payment")
        }
      }

  return (
    <div className={isOpen ? 'bg-white rounded-lg p-[20px] absolute top-0 left-0 z-10 w-full' :'hidden' }>
        <div className="flex justify-between items-center">
            <h2 className='text-xl uppercase text-black font-bold'>Delivery Address</h2>
            <button onClick={() => dispatch(closeForm())} className="py-2 px-6 bg-black text-white  font-semibold my-5 rounded-md ">CLose</button>
        </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
      <input placeholder="Full Name" 
          type="text"
          name="name"
          value={address.name}
          onChange={handleChange}
          className="mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black"
        />
        <input placeholder="Street" 
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
          className="mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black"
        />
        <input placeholder="City" 
          type="text" 
          name="city"
          value={address.city} 
          onChange={handleChange} 
          className="mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black"
        />
        <input placeholder="Pincode" 
          type="number" 
          name="pincode"
          value={address.pincode}
          onChange={handleChange}
          className="mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black" />    
        <input placeholder="Contact Number" 
          type="number" 
          name="phone"
          value={address.phone}
          onChange={handleChange}
          className="mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black" />   
        <input placeholder="State" 
          type="text" 
          name="state"  
          value={address.state}
          onChange={handleChange}  
          className="mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black"
        />  
        <button onClick={handleCheckout}
          type="submit" 
          className="py-2 px-6 bg-black text-white w-full font-semibold my-5 rounded-lg hover:bg-slate-400"
        >
          Place Order
        </button>      
      </form>
    </div>
  )
}

export default Form
