'use client';
import Link from 'next/link';
import Nav from './Nav';
import  Search from './Search'
import Image from 'next/image';
import Img from '@/public/images/quickkart-high-resolution-logo-color-on-transparent-background.webp';
const Header = () => {
    return (
        <header className='fixed z-50 w-full py-[10px] sm:px-[10px] md:px-[20px] bg-white shadow-2xl'>
            <div className='flex items-center justify-between'>
                <Link href='/dashboard' className=''>
                    <Image
                        src={Img}
                        alt='items-image'
                        width={80}
                        height={100}
                        className='object-cover sm:hidden md:block'
                    />
                </Link>
                <div className='sm:w-[80%] md:w-[35%] lg:w-[50%]'>
                    <Search />
                </div>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
