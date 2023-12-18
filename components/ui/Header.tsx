'use client';
import React, { useEffect } from 'react';
import Nav from './Nav';
import dynamic from 'next/dynamic';
const Search = dynamic(() => import('./Search'), { ssr: false });

const Header = () => {
    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 80) {
                document.querySelector('header')?.classList.add('show');
            } else {
                document.querySelector('header')?.classList.remove('show');
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.addEventListener('scroll', onScroll);
    });

    return (
        <header className='fixed z-50 w-full  py-[10px] sm:px-[10px] md:px-[20px] bg-white shadow-2xl '>
            <div className='flex items-center justify-center'>
                <div className='md:hidden w-[90%] mx-auto'>
                    <Search />
                </div>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
