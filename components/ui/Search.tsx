'use client';
import useSearch from '@/hooks/useSearch';
import { useRouter } from 'next/navigation';

const Search = () => {
    const router = useRouter()
    const {Search, Submit, input, setInput, response} = useSearch()

    return (
        <form className='flex justify-center' onSubmit={Submit}>
            <div className='relative w-full flex items-center gap-3'>
                <input
                    value={input}
                    type='text'
                    placeholder='Search Products'
                    aria-label='Search'
                    onChange={Search}
                    className='border-black border rounded-xl placeholder-black placeholder:text-gray-300 p-3 w-full'
                />
                <button
                    className='bg-black px-[20px] py-[11px] font-semibold rounded-r-xl absolute right-[0px] top-[1px]'
                    type='submit'
                    aria-label='Search'>
                    <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 512 512'
                        height='26px'
                        width='26px'
                        className='text-white'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fill='none'
                            stroke-miterlimit='10'
                            stroke-width='32'
                            d='M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z'></path>
                        <path
                            fill='none'
                            stroke-linecap='round'
                            stroke-miterlimit='10'
                            stroke-width='32'
                            d='M338.29 338.29 448 448'></path>
                    </svg>
                </button>
            </div>

            {input && response && response.length > 0 ? (
                <ul className='absolute top-[60px] md:top-[68px] z-50 bg-white shadow  sm:w-[78%] md:w-[33.8%] lg:w-[48.5%] mx-auto rounded-sm'>
                    {response.slice(0, 10).map((item) => (
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
