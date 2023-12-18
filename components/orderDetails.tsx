"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { resetOrder } from "../redux/reducers/addItems";
import { RootState } from "@/redux/store";
import { Product } from "@/hooks/useFetch";
import { useRouter } from "next/navigation";
import { FaBox, FaTruck } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import PaymentAddressDetails from "./PaymentAddressDetails";

const OrderDetails = () => {
  const { orderData, totalOrderPrice, saveAddress } = useSelector((state: RootState) => state.addToCart)
  const dispatch = useDispatch();
  const router = useRouter()
  return (
    <div className="h-full bg-white pb-40">
      {orderData.length > 0 ? (
        <div className="pt-48 w-[90%] mx-auto">
          <div className="flex flex-col justify-center items-center mb-20">
            <h2 className="text-orange-600 text-3xl md:text-5xl lg:text-6xl mb-5">Thanks for shopping!</h2>
            <p className="text-black text-center font-medium">Hi {saveAddress.name}, we have recieved your order and are getting it ready to be shipped. <br className=""/> We will notify you when it&apos;s on its way!</p>
          </div>
          <div className="flex sm:flex-col md:flex-row justify-between items-center w-full md:mx-auto md:w-[70%] mb-28 relative">
            <hr className="bg-gray-400 sm:w-[70%] four:w-[50%] six:w-[40%] overflow-hidden md:w-[90%] sm:rotate-90 md:rotate-180 top-[40%] z-[1] sm:bottom-0 md:right-[22px] h-[2px] absolute" />
            <div className="flex flex-col justify-between items-center z-[2]">
              <FiShoppingBag size={20} color="white" className="bg-orange-600 h-20 w-20 px-5 py-2 rounded-full mb-4"/>
              <p className="text-orange-600">Order confirmed</p>
            </div>
            <div className="flex flex-col justify-between items-center z-[2]">
              <FaTruck size={20} color="white" className="bg-gray-300 h-20 w-20 px-5 py-2 rounded-full mb-4"/>
              <p className="">Order shipment</p>
            </div>
            <div className="flex flex-col justify-between items-center z-[2]">
              <FaBox size={20} color="white" className="bg-gray-300 h-20 w-20 px-5 py-2 rounded-full mb-4"/>
              <p className="">Package arrived</p>
            </div>
          </div>
          <div className="grid grid-cols-3 uppercase text-sm font-medium">
            <div className="flex gap-2">
              <p className="col-span-2">Items</p>
              <p>{orderData.length}</p>
            </div>
            <p className="flex items-center justify-center">Quantity</p>
            <p className="flex items-center justify-end">Amount</p>
          </div>
          <div className="py-2 flex flex-col justify-center gap-2">
            {orderData.map((item: Product) => (
              <div
                key={item._id}
                className="py-2 grid grid-cols-3 items-center"
              >
                <div className="col-span-1 flex items-start gap-2 text-sm">
                  <Image
                    src={item.image}
                    alt="product image"
                    width={500}
                    height={500}
                    className="w-12 rounded-md object-cover"
                  />
                </div>
                <p className="flex items-center justify-center">
                  {item.quantity}
                </p>
                <p className="flex items-center justify-end">
                    ${item.price.toFixed(0)}
                </p>
              </div>
            ))}
          </div>
          <div className="text-lg font-medium py-2 border-t-[1px] border-b-gray-500">
           <PaymentAddressDetails />
          </div>
          <p className="text-[17px] font-bold">
            Total Paid $
            <span className="font-semibold">
            {totalOrderPrice.toFixed(0)}
            </span>
          </p>
          <button
            onClick={() => {
              dispatch(resetOrder()) 
              router.push("/dashboard")
            }}
            className="mt-5  text-white bg-black py-1 px-4 font-semibold rounded-md cursor-pointer duration-200"
          >
            Reset Order
          </button>
        </div>
      ) : (
        <div className='h-[100dvh] mx-auto w-[90%] flex flex-col justify-center items-center'>
        <p className="font-extrabold text-center text-xl mb-5">You haven&apos;t placed any orders yet. Get shopping!</p>
        <Link href={"/shop"}>
          <button className="text-white py-4 px-6 rounded-md bg-black duration-200">
            Return to Shop
          </button>
        </Link>
      </div>
      )}
    </div>
  );
};

export default OrderDetails;