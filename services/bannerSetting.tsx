import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className='p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2 min-[320px]:hidden md:block'
            onClick={onClick}>
            <PiCaretLeftLight />
        </div>
    );
};
const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className='p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2 min-[320px]:hidden md:block'
            onClick={onClick}>
            <PiCaretRightLight />
        </div>
    );
};
export const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};