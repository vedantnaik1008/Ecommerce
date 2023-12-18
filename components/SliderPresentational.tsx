import { Product } from '@/hooks/useFetch';
import { addItem } from '@/redux/reducers/addItems';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import RatingStars from './ui/RatingStars';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { settings } from '@/services/settings';
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
            <Slider {...settings}>
                {data.map((res) => (
                    <div key={res._id}>
                        <div className='p-[20px]  bg-white shadow-2xl border-none rounded-xl  transition-all duration-300 ease-in-out  h-[440px] s mx-auto md:mx-[20px]'>
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
            </Slider>
        </div>
    );
};

export default SliderPresentational;
