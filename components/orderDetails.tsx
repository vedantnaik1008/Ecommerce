// "use client";
// import { useDispatch, useSelector } from "react-redux";
// import Image from "next/image";
// import Link from "next/link";
// import addItems, { resetOrder } from "./reducers/addItems";
// import { RootState } from "@/store";
// import { Product } from "@/hooks/useFetch";

// const OrderDetails = () => {
//   const order = useSelector((state: RootState) => state.addToCart.orderDetail.order)
//   const totalPrice = useSelector((state: RootState) => state.addToCart.totalPrice);
//   const dispatch = useDispatch();
//   return (
//     <div className="h-[100dvh] w-[90%] mx-auto">
//       {order.length > 0 ? (
//         <div>
//           <div className="pt-48 grid grid-cols-5 uppercase text-sm font-medium  border-b-[1px] border-b-gray-300">
//             <p className="col-span-3">Items</p>
//             <p className="flex items-center justify-center">Quantity</p>
//             <p className="flex items-center justify-center">Amount</p>
//             <p>{order.length}</p>
//           </div>
//           <div className="py-2 flex flex-col justify-center gap-2">
//             {order.map((item: Product) => (
//               <div
//                 key={item._id}
//                 className="py-2 border-b-[1px] border-gray-300 grid grid-cols-5 items-center"
//               >
//                 <div className="col-span-3 flex items-start gap-2 text-sm">
//                   <Image
//                     src={item.image}
//                     alt="product image"
//                     width={500}
//                     height={500}
//                     className="w-12 h-12 object-cover"
//                   />
//                   <div>
//                     <h3 className="text-base font-semibold mb-.5">
//                       {item.title}
//                     </h3>
//                   </div>
//                 </div>
//                 <p className="flex items-center justify-center">
//                   {item.quantity}
//                 </p>
//                 <p className="flex items-center justify-center ">
//                     ${item.price.toFixed(0)}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <div className="text-lg font-medium py-2 border-b-[1px] border-b-gray-300">
//             <p>Payment Details</p>
//           </div>
//           <p className="py-2">
//             Total Paid {totalPrice}
//             <span className="text-xl font-semibold">
//             </span>
//           </p>
//           <button
//             onClick={() => dispatch(resetOrder())}
//             className="mt-5 border-[1px] border-gray-500 py-1 px-4 font-medium rounded-md hover:border-orange-600 cursor-pointer duration-200"
//           >
//             Reset Order
//           </button>
//         </div>
//       ) : (
//         <div className="pt-48 text-black text-2xl text-center">
//           <p>Nothing to show</p>
//           <Link href={"/Shop"}>
//             <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold mt-2 hover:bg-orange-600 duration-300">
//               Continue Shopping
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderDetails;