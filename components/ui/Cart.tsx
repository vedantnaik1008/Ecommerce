import { AiOutlineShoppingCart } from '@/lib/ReactIcons';
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
            <AiOutlineShoppingCart
                size='26px'
                className='sm:text-black md:text-white '
            />
            <span className='text-white sm:absolute sm:right-0 sm:-top-[5px] sm:bg-red-500 sm:w-4 sm:h-4  sm:rounded-full text-center sm:text-[10px] sm:font-bol md:rounded-none md:bg-transparent md:static md:text-lg md:h-fit md:w-fit '>
                {products.length}
            </span>
        </Link>
    );
};

export default Cart;
