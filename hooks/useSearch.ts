import { combinedData } from '@/services/api';
import React, { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce';
import { useFetch } from './useFetch';

const useSearch = () => {
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
  return {Search, Submit, input, setInput, response}
}

export default useSearch
