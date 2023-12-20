'use client';
import { FcSearch } from 'react-icons/fc';
import useSearch from '@/hooks/useSearch';
import { useRouter } from 'next/navigation';

const Search = () => {
    const router = useRouter()
    const {Search, Submit, input, setInput, response} = useSearch()

    return (
        <form
            className='sm:w-[100%] md:w-[40%] flex justify-center'
            onSubmit={Submit}>
            <div
                className='relative w-full flex items-center gap-3'>
                <input
                    value={input}
                    type="text"
                    onChange={Search}
                    className='border-black border rounded-sm placeholder-black placeholder:Search p-3 w-full'
                />
                <button
                    className=' px-[20px] py-[11px] text-white font-semibold rounded-l-none absolute right-[0%] top-[1px] md:top-[5px]'
                    type='submit'>
                    <FcSearch size='26px' />
                </button>
            </div>

            {input && response && response.length > 0 ? (
                <ul className='absolute top-[60px] z-50 bg-white shadow  sm:w-[88%] md:w-[39%] mx-auto rounded-sm'>
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
