"use client";
import dynamic from 'next/dynamic'
const DynamicBannerText = dynamic(() => import('@/components/ui/BannerText'), {
  ssr: false
 })
import Slider from "react-slick";
import bannerone from "@/images/bannerone.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2 min-[320px]:hidden md:block"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2 min-[320px]:hidden md:block"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative pt-[71px]">
      <Slider {...settings}>
        <div className="w-full h-full relative">
          <Image
            src={bannerone}
            alt="bannerone"
            className="w-full  min-[320px]:h-[200px] min-[600px]:h-full object-cover md:h-full relative"
            priority
          />
          <DynamicBannerText title="Outware Picks" />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={bannertwo}
            alt="bannertwo"
            className="w-full  min-[320px]:h-[200px] object-cover min-[600px]:h-full relative"
          />
          <DynamicBannerText title="Seasonal Offers" />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={bannerthree}
            alt="bannerthree"
            className="w-full min-[320px]:h-[200px] object-cover min-[600px]:h-full  relative"
          />
          <DynamicBannerText title="Best for men" />
        </div>
      </Slider>
      <div className="absolute min-[320px]:hidden  min-[600px]:block w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  );
};

export default Banner;