'use client';
import Nav from './Nav';
import dynamic from 'next/dynamic';
const Search = dynamic(() => import('./Search'), { ssr: false });

const Header = () => {
    return (
        <header className='fixed z-50 w-full py-[10px] sm:px-[10px] md:px-[20px] bg-white shadow-2xl '>
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
