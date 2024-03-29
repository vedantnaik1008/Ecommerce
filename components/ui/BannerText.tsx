import Link from 'next/link';

interface Props {
    title: string;
}

const BannerText = ({ title }: Props) => {
    return (
        <div className='absolute top-0 left-4 four:left-6 six:left-8 md:left-16 w-full h-full'>
            <div className='flex h-full flex-col gap-y-2 md:gap-y-6 justify-center'>
                <h2 className='min-[320px]:text-3xl md:text-7xl font-bold text-white'>
                    {title}
                </h2>
                <p className='text-sm md:text-lg text-slate-100'>
                    Stock up on sportswear and limited edition collections on
                    our <br />
                    awesome mid-season sale.
                </p>
                <div className='flex gap-x-2 md:gap-x-4 mt-2'>
                    <button className='py-2 px-4 md:py-3 md:px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase md:font-semibold'>
                        Find out more
                    </button>
                    <Link
                        href='/Shop'
                        className='py-2 px-4 md:py-3 md:px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase md:font-semibold'>
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerText;
