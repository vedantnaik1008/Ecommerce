'use client';
import dynamic from 'next/dynamic';
const Cart = dynamic(() => import('./Cart'), { ssr: false });
import Link from 'next/link';
const Search = dynamic(() => import('./Search'), { ssr: false });
import Image from 'next/image';
import Img from '@/public/appleLaptops/quickkart-high-resolution-logo-color-on-transparent-background.png';
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
        <nav className='md:w-full'>
            <div className='min-[320px]:hidden md:flex justify-between'>
                <Link href='/dashboard' className=''>
                    <Image
                        src={Img}
                        alt='items-image'
                        width={80}
                        height={100}
                        className='object-cover'
                    />
                </Link>
                <Search />
                <ul className='md:flex md:items-center md:justify-center md:gap-8 md:h-16'>
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className='text-black hover:underline underline-offset-1 font-bold'>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                    {order.length > 0 ? orderLink : ''}
                    <Cart />
                </ul>
            </div>

            <>
                <nav className='fixed z-50 -bottom-0 right-0 h-[40px] w-[100%] bg-white  md:hidden sm:border sm:border-t-1 sm:border-x-0 sm:border-b-0 sm:border-black md:border-none'>
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
                                <Cart />
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </nav>
    );
};

export default Nav;
