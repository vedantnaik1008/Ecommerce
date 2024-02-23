'use client';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { resetOrder } from '../redux/reducers/addItems';
import { RootState } from '@/redux/store';
import { Product } from '@/hooks/useFetch';
import { useRouter } from 'next/navigation';
import PaymentAddressDetails from './PaymentAddressDetails';

const OrderDetails = () => {
    const { orderData, totalOrderPrice, saveAddress } = useSelector(
        (state: RootState) => state.addToCart
    );
    const dispatch = useDispatch();
    const router = useRouter();
    return (
        <div className='h-full bg-white py-20'>
            {orderData.length > 0 ? (
                <div className='w-[90%] mx-auto'>
                    <div className='flex flex-col justify-center items-center mb-20'>
                        <h2 className='text-orange-600 text-3xl md:text-5xl lg:text-6xl mb-5'>
                            Thanks for shopping!
                        </h2>
                        <p className='text-black text-center font-medium'>
                            Hi {saveAddress.name}, we have recieved your order
                            and are getting it ready to be shipped.
                            <br className='' /> We will notify you when
                            it&apos;s on its way!
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center w-full md:mx-auto md:w-[70%] mb-28 relative'>
                        <hr className='bg-gray-400 hidden md:block four:w-[50%] six:w-[40%] overflow-hidden md:w-[90%] rotate-90 md:rotate-180 top-[40%] z-[1] bottom-0 md:right-[22px] h-[2px] absolute' />
                        <div className='flex gap-x-4 md:flex-col justify-between items-center z-[2]'>
                            <svg
                                stroke='currentColor'
                                fill='none'
                                stroke-width='2'
                                viewBox='0 0 24 24'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                color='white'
                                className='bg-orange-600 h-20 w-20 px-5 py-2 rounded-full mb-4'
                                height='20'
                                width='20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z'></path>
                                <line x1='3' y1='6' x2='21' y2='6'></line>
                                <path d='M16 10a4 4 0 0 1-8 0'></path>
                            </svg>
                            <p className='text-orange-600'>Order confirmed</p>
                        </div>
                        <div className='flex gap-x-4 md:flex-col justify-between items-center z-[2]'>
                            <svg
                                stroke='currentColor'
                                fill='currentColor'
                                stroke-width='0'
                                viewBox='0 0 640 512'
                                color='white'
                                className='bg-gray-300 h-20 w-20 px-5 py-2 rounded-full mb-4'
                                height='20'
                                width='20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z'></path>
                            </svg>
                            <p className=''>Order shipment</p>
                        </div>
                        <div className='flex gap-x-4 md:flex-col justify-between items-center z-[2]'>
                            <svg
                                stroke='currentColor'
                                fill='currentColor'
                                stroke-width='0'
                                viewBox='0 0 512 512'
                                color='white'
                                className='bg-gray-300 h-20 w-20 px-5 py-2 rounded-full mb-4'
                                height='20'
                                width='20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z'></path>
                            </svg>
                            <p className=''>Package arrived</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 uppercase text-sm font-medium'>
                        <div className='flex gap-2'>
                            <p className='col-span-2'>Items</p>
                            <p>{orderData.length}</p>
                        </div>
                        <p className='flex items-center justify-center'>
                            Quantity
                        </p>
                        <p className='flex items-center justify-end'>Amount</p>
                    </div>
                    <div className='py-2 flex flex-col justify-center gap-2'>
                        {orderData.map((item: Product) => (
                            <div
                                key={item._id}
                                className='py-2 grid grid-cols-3 items-center'>
                                <div className='col-span-1 flex items-start gap-2 text-sm'>
                                    <Image
                                        src={item.image}
                                        alt='product image'
                                        width={500}
                                        height={500}
                                        className='w-12 rounded-md object-cover'
                                    />
                                </div>
                                <p className='flex items-center justify-center'>
                                    {item.quantity}
                                </p>
                                <p className='flex items-center justify-end'>
                                    ${item.price.toFixed(0)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='text-lg font-medium py-2 border-t-[1px] border-b-gray-500'>
                        <PaymentAddressDetails />
                    </div>
                    <p className='text-[17px] font-bold'>
                        Total Paid $
                        <span className='font-semibold'>
                            {totalOrderPrice.toFixed(0)}
                        </span>
                    </p>
                    <button
                        onClick={() => {
                            dispatch(resetOrder());
                            router.push('/dashboard');
                        }}
                        className='mt-5  text-white bg-black py-1 px-4 font-semibold rounded-md cursor-pointer duration-200'>
                        Reset Order
                    </button>
                </div>
            ) : (
                <div className='h-[100dvh] mx-auto w-[90%] flex flex-col justify-center items-center'>
                    <p className='font-extrabold text-center text-xl mb-5'>
                        You haven&apos;t placed any orders yet. Get shopping!
                    </p>
                    <Link href={'/Shop'}>
                        <button className='text-white py-4 px-6 rounded-md bg-black duration-200'>
                            Return to Shop
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default OrderDetails;
