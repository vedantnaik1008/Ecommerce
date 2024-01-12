import { Product } from '@/hooks/useFetch';
import { addItem } from '@/redux/reducers/addItems';
import Link from 'next/link';
import React from 'react';
import RatingStars from './ui/RatingStars';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { truncateText } from '@/utils/TruncateText';

type Props = {
    heading: string;
    link: string;
    data: Product[];
};

const SliderPresentational = ({ heading, link, data }: Props) => {
    const dispatch = useDispatch();

    return (
        <div className='my-[70px] w-[90%] mx-auto'>
            <div className='flex min-[320px]:justify-between gap-3 items-end mb-5'>
                <h3 className='font-bold text-2xl text-black'>{heading}</h3>
                <Link
                    href={link}
                    className='font-bold hover:underline text-md text-black'>
                    Show More
                </Link>
            </div>
            <div className='flex w-full snap-x snap-mandatory scrollbar overflow-y-hidden overflow-x-scroll'>
                {data.map((res) => (
                    <div
                        key={res._id}
                        className='sm:w-full four:w-[80%] six:w-[50%] lg:w-[40%] xl:w-[30%] flex-shrink-0 snap-center flex flex-col items-center justify-center'>
                        <div className='p-[20px]  bg-white shadow-2xl border-none rounded-xl  transition-all duration-300 ease-in-out w-[90%] h-[440px] mx-auto md:mx-[20px] mb-10'>
                            <Link
                                href={`/details/${res._id}?id=${res._id}`}
                                className=''>
                                <div className='flex items-center flex-col justify-center h-[60%]'>
                                    <Image
                                        src={res.image}
                                        alt='items-image'
                                        width={200}
                                        height={200}
                                        className='hover:scale-110 transition-all duration-300 ease-in-out flex overflow-hidden rounded-sm   object-cover'
                                    />
                                </div>
                            </Link>
                            <div className='flex justify-between items-center  mt-[20px]'>
                                <h2 className=' text-black font-medium max-w-[200px]'>
                                    {truncateText(res.title, 18)}
                                </h2>
                                <span className='bg-gray-300 px-2 py-1 border-none rounded-sm text-black font-bold relative z-20'>
                                    ${res.price}
                                </span>
                            </div>
                            <div className='flex justify-between items-center  my-[20px]'>
                                <button
                                    onClick={() => dispatch(addItem(res))}
                                    className='bg-black rounded-[30px] text-white font-semibold py-1 px-4 hover:bg-slate-400'>
                                    Add To Cart
                                </button>
                                <RatingStars rating={res.rating} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderPresentational;
