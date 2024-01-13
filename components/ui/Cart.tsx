import { RootState } from '../../redux/store';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
const Cart = () => {
    const products = useSelector((state: RootState) => state.addToCart.product);
    return (
        <Link
            href={'/cart'}
            className='relative flex md:gap-2 items-center justify-center md:bg-black rounded-[30px] md:py-1 md:px-4 '>
            <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 16 16'
                height='26px'
                width='26px'
                className='sm:text-black md:text-white '
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'></path>
            </svg>
            <span className='text-white sm:absolute sm:right-0 sm:-top-[5px] sm:bg-red-500 sm:w-4 sm:h-4  sm:rounded-full text-center sm:text-[10px] sm:font-bol md:rounded-none md:bg-transparent md:static md:text-lg md:h-fit md:w-fit '>
                {products.length}
            </span>
        </Link>
    );
};

export default Cart;
