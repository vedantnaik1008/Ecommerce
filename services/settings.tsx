import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi';

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className='p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute   top-1/2 left'
            onClick={onClick}>
            <PiCaretLeftLight />
        </div>
    );
};
const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className='p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute  right top-1/2'
            onClick={onClick}>
            <PiCaretRightLight />
        </div>
    );
};

export const settings = {
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
                dots: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            },
        },
    ],
};
