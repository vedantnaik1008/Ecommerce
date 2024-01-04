import BannerText from '@/components/ui/BannerText'
import Slider from 'react-slick';
import Image from 'next/image';
import { settings } from '@/services/bannerSetting';
import { bannerData } from '@/data/bannerData';

const Banner = () => {
    return (
        <div className='relative pt-[71px] overflow-hidden'>
            <Slider {...settings}>
                {bannerData.map((item) => (
                    <div key={item.id} className='w-full h-full relative'>
                        <Image
                            src={item.img}
                            alt={item.alt}
                            className='w-full h-screen object-cover relative'
                        />
                        <BannerText title='Outware Picks' />
                    </div>
                ))}
            </Slider>
            <div className='absolute min-[320px]:hidden  min-[600px]:block w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10' />
        </div>
    );
};

export default Banner;
