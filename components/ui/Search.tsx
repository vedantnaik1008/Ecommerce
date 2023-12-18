'use client';
import { combinedData } from '../../services/api';
import { useDebounce } from '../../hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useRouter } from 'next/navigation';
import { useFetch } from '../../hooks/useFetch';

const Search = () => {
    const router = useRouter();
    const [input, setInput] = useState('');
    const { response, setResponse } = useFetch('/api/fetchData');
    const debouncedSearch = useDebounce(input, 500);

    useEffect(() => {
        if (debouncedSearch) {
            const results = combinedData.filter((item) => {
                return JSON.stringify(item)
                    .toLowerCase()
                    .includes(debouncedSearch.toLowerCase());
            });
            setResponse(results);
        } else {
            setResponse(combinedData);
        }
    }, [debouncedSearch, setResponse]);

    const Search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const Submit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form
            className='sm:w-[100%] md:w-[40%] flex justify-center'
            onSubmit={Submit}>
            <label
                id='search'
                className='relative w-full flex items-center gap-3'>
                <input
                    value={input}
                    type="text"
                    name='search'
                    onChange={Search}
                    className='border-black border rounded-sm placeholder-black placeholder:Search p-3 w-full'
                />
                <button
                    className=' px-[20px] py-[11px] text-white font-semibold rounded-l-none absolute right-[0%] top-[1px] md:top-[5px]'
                    type='submit'>
                    <FcSearch size='26px' />
                </button>
            </label>

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
