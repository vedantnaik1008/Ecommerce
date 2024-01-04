import BannerText from '@/components/ui/BannerText'
import Slider from 'react-slick';
import bannerone from '@/images/bannerone.jpg';
import bannertwo from '@/images/bannertwo.jpg';
import bannerthree from '@/images/bannerthree.jpg';
import Image from 'next/image';
import { settings } from '@/services/bannerSetting';

const Banner = () => {
    return (
        <div className='relative pt-[71px]'>
            <Slider {...settings}>
                <div className='w-full h-full relative'>
                    <Image
                        src={bannerone}
                        alt='bannerone'
                        className='w-full h-screen object-cover relative'
                    />
                    <BannerText title='Outware Picks' />
                </div>
                <div className='w-full h-full relative'>
                    <Image
                        src={bannertwo}
                        alt='bannertwo'
                        className='w-full h-screen object-cover relative'
                    />
                    <BannerText title='Seasonal Offers' />
                </div>
                <div className='w-full h-full relative'>
                    <Image
                        src={bannerthree}
                        alt='bannerthree'
                        className='w-full h-screen object-cover relative'
                    />
                    <BannerText title='Best for men' />
                </div>
            </Slider>
            <div className='absolute min-[320px]:hidden  min-[600px]:block w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10' />
        </div>
    );
};

export default Banner;
