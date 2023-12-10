'use client'

import { RootState } from "@/store"
import { useSelector } from "react-redux"

const PaymentAddressDetails = () => {
    const { saveAddress } = useSelector((state: RootState) => state.addToCart)
  return (
    <>
      <h2 className="text-xl">Payment & Shipping details</h2>
      <div className="">
        <p className="">Payment method: Card</p>
        <p className="">Delivered to: {saveAddress.name}</p>
        <p className="">Delivery Address: {saveAddress.street}, {saveAddress.city}, {saveAddress.state}</p>
      </div>
    </>
  )
}

export default PaymentAddressDetails
