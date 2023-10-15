"use client"
import Image from 'next/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi';
import RatingStars from './RatingStars';
import Link from 'next/link';
import { useFetch } from '@/hooks/useFetch';
import Loading from './Loading';

const SliderElectronics = () => {
  const { response, loading } = useFetch('/fetchData')
  

  const data = response.filter((res) => res.category === 'electronics').slice(0, 10)

    const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...' // Add ellipsis if text is too long
    }
    return text
  }

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute  md:left-[92%] md:-top-14 top-1/2 -left-3"
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
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute md:right-0 md:-top-14 -right-3 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  if(loading)return <Loading />

  return (
    
      <div className="my-[70px] w-[90%] mx-auto">
        <div className="flex min-[320px]:justify-between md:justify-normal gap-3 items-end mb-5">
            <h3 className="font-bold text-2xl text-black">
                Electronics
            </h3>
            <Link href={'/Electronics'} className="font-bold hover:underline text-md text-black">Show More</Link>
        </div>
        <Slider {...settings}>
            {data.map((res) => (
                <Link href={`/details/${res._id}?id=${res._id}`} className="" key={res._id}>
                    <div className="p-[20px]  bg-white shadow-2xl border-none rounded-xl  transition-all duration-300 ease-in-out  h-[440px] mx-auto md:mx-[20px]">
                        <div className="flex items-center flex-col justify-center h-[60%]">
                          <Image src={res.image} alt="items-image" width={"200"} height={"100"} className="hover:scale-110 transition-all duration-300 ease-in-out flex overflow-hidden rounded-sm   object-cover"/>
                        </div>
                        <div className="flex justify-between items-center  mt-[20px]">
                          <h2 className=" text-black font-medium max-w-[200px]">{truncateText(res.title, 20)}</h2>
                          <span className="bg-gray-300 px-2 py-1 border-none rounded-sm text-black font-bold relative z-20">${res.price}</span>
                        </div>
                        <div className="flex justify-between items-center  my-[20px]">
                          <button className="bg-black rounded-[30px] text-white font-semibold py-1 px-4">Add To Cart</button>
                          <RatingStars rating={res.rating} />
                        </div>
                    </div>
                </Link>
            ))}
        </Slider>
    </div>
  )
}

export default SliderElectronics