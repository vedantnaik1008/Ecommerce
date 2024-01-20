'use client'
import BannerText from '@/components/ui/BannerText'
import Image from 'next/image';
import { bannerData as images } from '@/data/bannerData';
import { useCallback, useEffect, useState } from 'react';

const Banner = () => {
    const [current, setCurrent] = useState(0);
    
 const nextSlide = useCallback(() => {
     setCurrent((current + 1) % images.length);
 }, [current]);

 useEffect(() => {
     const timer = setTimeout(() => {
        nextSlide()}, 5000); // Change slide every 5 seconds
     return () => clearTimeout(timer);
 }, [nextSlide]);


  
    return (
        <div className='relative pt-[71px] overflow-hidden'>
            {images.map((image, index) => (
                <>
                <Image
                    priority={index === 0 ? true :false}
                    fetchPriority={index === 0 ? 'high' : 'low'}
                    key={index}
                    src={image.img}
                    alt={image.alt}
                    className={`${index === current ? 'block object-cover h-[100vh] md:h-screen' : 'hidden'}`} />
                {index === current ? <BannerText title={image.title} /> : ''}
                </>
            ))}
            <div className='absolute   min-[600px]:block w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10' />
        </div>
    );
};

export default Banner;
