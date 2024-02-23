'use client';
import Cart from './Cart'
import Link from 'next/link';
import UserProfileAcc from '../authentication/UserProfile';
import { useUser } from '@clerk/nextjs';

const items = [
    { id: 1, name: 'Home', link: '/dashboard' },
    { id: 2, name: 'Shop', link: '/Shop' },
];

const Nav = () => {
    const { user} = useUser()
    const orderLink = (
        <li className='text-black hover:underline underline-offset-1 font-medium'>
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
                            className='text-black hover:underline underline-offset-1 font-medium'>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                    {user && orderLink}
                    {user && (
                        <li>
                            <UserProfileAcc />
                        </li>
                    )}
                    <li>
                        <Cart />
                    </li>
                </ul>
            </div>

            <>
                <div className='fixed z-50 bottom-0 right-0 h-[40px] w-[100%] bg-white  md:hidden border border-t-1 border-x-0 border-b-0 border-black md:border-none'>
                    <div className={' md:hidden px-2 py-1'}>
                        <div className=''>
                            <ul className='flex items-center justify-between gap-4'>
                                {items.map((item) => (
                                    <li
                                        key={item.id}
                                        className='text-black hover:underline underline-offset-1 font-medium'>
                                        <Link href={item.link}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                {user && orderLink}
                                {user && (
                                    <li>
                                        <UserProfileAcc />
                                    </li>
                                )}

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
