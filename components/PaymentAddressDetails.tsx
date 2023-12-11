'use client'

import { RootState } from "@/store"
import { useSelector } from "react-redux"

const PaymentAddressDetails = () => {
    const { saveAddress } = useSelector((state: RootState) => state.addToCart)
  return (
    <>
      <h2 className="text-2xl font-bold">Payment & Shipping details</h2>
      <div className="mt-2 text-[17px]">
        <p className="mt-2 font-bold">Payment method: <span className="font-medium">Card</span></p>
        <p className="mt-2 font-bold">Delivered to: <span className="font-medium">{saveAddress.name}</span></p>
        <p className="mt-2 font-bold">Delivery Address: <span className="font-medium">{saveAddress.street}, {saveAddress.city}, {saveAddress.state}</span></p>
      </div>
    </>
  )
}

export default PaymentAddressDetails
