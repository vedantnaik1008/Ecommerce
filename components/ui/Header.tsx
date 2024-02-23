'use client';
import Link from 'next/link';
import Nav from './Nav';
import  Search from './Search'
import Image from 'next/image';
import Img from '@/public/images/quickkart-high-resolution-logo-color-on-transparent-background.webp';
const Header = () => {
    return (
        <header className='w-full py-[10px] px-[10px] md:px-[20px] bg-white'>
            <div className='flex items-center justify-between'>
                <Link href='/dashboard' className=''>
                    <Image
                        src={Img}
                        alt='items-image'
                        width={80}
                        height={57}
                        className='object-cover hidden md:block'
                    />
                </Link>
                <div className='w-full md:w-[35%] lg:w-[50%]'>
                    <Search />
                </div>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
