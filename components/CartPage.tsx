'use client';
import dynamic from 'next/dynamic';
const Form = dynamic(() => import('@/components/ui/Form'));
import PriceList from '@/components/PriceList';
import Image from 'next/image';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {
    clearItems,
    decreaseQuantity,
    increaseQuantity,
    removeItem
} from '@/redux/reducers/addItems';
import { truncateText } from '@/utils/TruncateText';

const CartPage = () => {
    const products = useSelector((state: RootState) => state.addToCart.product);
    const dispatch = useDispatch();

    return (
        <>
            {products.length === 0 ? (
                <div className='flex flex-col gap-y-2 items-center justify-center h-[100vh] px-4'>
                    <p className='font-extrabold text-center text-xl mb-5'>
                        Your product cart is currently empty
                    </p>
                    <Link href={'/Shop'}>
                        <button className='text-white py-4 px-6 rounded-md bg-black duration-200'>
                            Return to Shop
                        </button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className='pt-[80px] flex items-center justify-center w-full relative'>
                        <h2 className='text-black text-5xl font-extrabold'>
                            Your Cart
                        </h2>
                    </div>

                    <div className='relative flex flex-col items-center lg:flex lg:flex-row lg:items-start justify-between  w-[90%] mx-auto my-20'>
                        <div className='grid grid-cols-1  w-full md:w-full lg:w-[65%]'>
                            {products.map((res) => (
                                <div className='' key={res._id}>
                                    <button
                                        onClick={() => dispatch(clearItems())}
                                        className='py-2 px-4 rounded-lg  font-semibold bg-black text-white absolute -top-[60px] left-0'>
                                        Clear All
                                    </button>
                                    <div className='p-[15px] four:p-[20px] rounded-xl  bg-gray-200  mb-[30px] flex  justify-between items-center flex-col lg:flex-row'>
                                        <Link
                                            href={`/details/${res._id}?id=${res._id}`}>
                                            <div className='flex items-center flex-col justify-center '>
                                                <Image
                                                    src={res.image}
                                                    alt='items-image'
                                                    width={'200'}
                                                    height={'200'}
                                                    className='flex overflow-hidden rounded-lg  object-cover aspect-square'
                                                />
                                            </div>
                                        </Link>
                                        <div className=''>
                                            <h2 className=' text-black  text-center font-medium'>
                                                {truncateText(res.title, 20)}
                                            </h2>
                                            <div className='flex gap-4 my-5 max-four:flex-wrap max-four:items-center'>
                                                <span className='bg-black py-2 px-4 border-none rounded-md text-white font-bold relative z-20'>
                                                    $ {res.price.toFixed(0)}
                                                </span>
                                                <div className='flex border border-gray-500 rounded-lg'>
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                decreaseQuantity(
                                                                    {
                                                                        id: res._id,
                                                                        quantity: 1
                                                                    }
                                                                )
                                                            )
                                                        }
                                                        className='p-2 rounded-l-lg bg-white'>
                                                        <svg
                                                            stroke='currentColor'
                                                            fill='currentColor'
                                                            stroke-width='0'
                                                            viewBox='0 0 448 512'
                                                            height='1em'
                                                            width='1em'
                                                            xmlns='http://www.w3.org/2000/svg'>
                                                            <path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path>
                                                        </svg>
                                                    </button>
                                                    <span className=' bg-black text-white py-2 px-8 font-extrabold'>
                                                        {res.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                increaseQuantity(
                                                                    {
                                                                        id: res._id,
                                                                        quantity: 1
                                                                    }
                                                                )
                                                            )
                                                        }
                                                        className='p-2 rounded-r-lg bg-white'>
                                                        <svg
                                                            stroke='currentColor'
                                                            fill='currentColor'
                                                            stroke-width='0'
                                                            viewBox='0 0 448 512'
                                                            height='1em'
                                                            width='1em'
                                                            xmlns='http://www.w3.org/2000/svg'>
                                                            <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                removeItem(
                                                                    res._id
                                                                )
                                                            )
                                                        }
                                                        className='py-2 px-4 rounded-lg bg-black text-white font-semibold '>
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='w-full md:w-full lg:w-[30%] flex flex-col  gap-y-5 relative'>
                            <PriceList />
                            <Form />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CartPage;
