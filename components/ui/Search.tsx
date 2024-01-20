'use client';
import useSearch from '@/hooks/useSearch';
import { useRouter } from 'next/navigation';

const Search = () => {
    const router = useRouter()
    const {Search, Submit, input, setInput, response} = useSearch()

    return (
        <form
            className='flex justify-center'
            onSubmit={Submit}>
            <div className='relative w-full flex items-center gap-3'>
                <input
                    value={input}
                    type='text'
                    aria-label='Search'
                    onChange={Search}
                    className='border-black border rounded-sm placeholder-black placeholder:Search p-3 w-full'
                />
                <button
                    className=' px-[20px] py-[11px] text-white font-semibold rounded-l-none absolute right-[0%] top-[1px] md:top-[5px]'
                    type='submit'
                    aria-label='Search'>
                    <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        version='1'
                        viewBox='0 0 48 48'
                        enable-background='new 0 0 48 48'
                        height='26px'
                        width='26px'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g fill='#616161'>
                            <rect
                                x='34.6'
                                y='28.1'
                                transform='matrix(.707 -.707 .707 .707 -15.154 36.586)'
                                width='4'
                                height='17'></rect>
                            <circle cx='20' cy='20' r='16'></circle>
                        </g>
                        <rect
                            x='36.2'
                            y='32.1'
                            transform='matrix(.707 -.707 .707 .707 -15.839 38.239)'
                            fill='#37474F'
                            width='4'
                            height='12.3'></rect>
                        <circle fill='#64B5F6' cx='20' cy='20' r='13'></circle>
                        <path
                            fill='#BBDEFB'
                            d='M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z'></path>
                    </svg>
                </button>
            </div>

            {input && response && response.length > 0 ? (
                <ul className='absolute top-[60px] md:top-[68px] z-50 bg-white shadow  sm:w-[78%] md:w-[33.8%] lg:w-[48.5%] mx-auto rounded-sm'>
                    {response.map((item) => (
                        <li
                            key={item._id}
                            onClick={() => {
                                router.push(
                                    `/details/${item._id}?id=${item._id}`
                                );
                                setInput('');
                            }}
                            className='p-3 hover:bg-gray-100 cursor-pointer'>
                            {item.title}
                        </li>
                    ))}
                </ul>
            ) : null}
        </form>
    );
};

export default Search;
