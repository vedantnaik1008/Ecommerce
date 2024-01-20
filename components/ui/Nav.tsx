'use client';
import Cart from './Cart'
import Link from 'next/link';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const items = [
    { id: 1, name: 'Home', link: '/dashboard' },
    { id: 2, name: 'Shop', link: '/Shop' },
    { id: 3, name: 'Profile', link: '/user' },
];

const Nav = () => {
    const order = useSelector((state: RootState) => state.addToCart.orderData);
    const orderLink = (
        <li className='text-black hover:underline underline-offset-1 font-bold'>
            <Link href={'/order'}>Order</Link>
        </li>
    );
    return (
        <nav className=''>
            <div className='min-[320px]:hidden md:block'>
                <ul className='md:flex md:items-center  md:gap-6 lg:gap-8 md:h-16'>
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className='text-black hover:underline underline-offset-1 font-bold'>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                    {order.length > 0 ? orderLink : ''}
                    <li>
                        <Cart />
                    </li>
                </ul>
            </div>
            
            <>
                <div className='fixed z-50 -bottom-0 right-0 h-[40px] w-[100%] bg-white  md:hidden sm:border sm:border-t-1 sm:border-x-0 sm:border-b-0 sm:border-black md:border-none'>
                    <div
                        className={
                            ' md:hidden max-w-7xl mx-auto min-[320px]:p-2'
                        }>
                        <div className=''>
                            <ul className='flex items-center justify-between gap-4'>
                                {items.map((item) => (
                                    <li
                                        key={item.id}
                                        className='text-black hover:underline underline-offset-1 font-bold'>
                                        <Link href={item.link}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                {order.length > 0 ? orderLink : ''}
                                <li>
                                    <Cart />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        </nav>
    );
};

export default Nav;
