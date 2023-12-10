"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { resetOrder } from "./reducers/addItems";
import { RootState } from "@/store";
import { Product } from "@/hooks/useFetch";

const OrderDetails = () => {
  const order = useSelector((state: RootState) => state.addToCart.orderData)
  const totalPrice = useSelector((state: RootState) => state.addToCart.totalPrice);
  const dispatch = useDispatch();
  return (
    <div className="h-full w-[90%] mx-auto pb-40">
      {order.length > 0 ? (
        <div className="">
          <div className="pt-48 grid grid-cols-4 uppercase text-sm font-medium  border-b-[1px] border-b-gray-300 ">
            <p className="col-span-2">Items</p>
            <p className="flex items-center justify-center">Quantity</p>
            <p className="flex items-center justify-center">Amount</p>
            <p>{order.length}</p>
          </div>
          <div className="py-2 flex flex-col justify-center gap-2">
            {order.map((item: Product) => (
              <div
                key={item._id}
                className="py-2 border-b-[1px] border-gray-300 grid grid-cols-4 items-center"
              >
                <div className="col-span-2 flex items-start gap-2 text-sm">
                  <Image
                    src={item.image}
                    alt="product image"
                    width={500}
                    height={500}
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <p className="flex items-center justify-center">
                  {item.quantity}
                </p>
                <p className="flex items-center justify-center ">
                    ${item.price.toFixed(0)}
                </p>
              </div>
            ))}
          </div>
          <div className="text-lg font-medium py-2 border-b-[1px] border-b-gray-300">
            <p>Payment Details</p>
          </div>
          <p className="py-2">
            Total Paid ${totalPrice.toFixed(0)}
            <span className="text-xl font-semibold">
            </span>
          </p>
          <button
            onClick={() => dispatch(resetOrder())}
            className="mt-5  text-white bg-black py-1 px-4 font-semibold rounded-md cursor-pointer duration-200"
          >
            Reset Order
          </button>
        </div>
      ) : (
        <div className='h-[100dvh] mx-auto w-[90%] flex flex-col justify-center items-center'>
        <p className="font-extrabold text-center text-xl mb-5">You haven&apos;t placed any orders yet. Get shopping!</p>
        <Link href={"/Shop"}>
          <button className="text-white py-2 px-6 rounded-md bg-black duration-200">
            Return to Shop
          </button>
        </Link>
      </div>
      )}
    </div>
  );
};

export default OrderDetails;