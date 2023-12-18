'use client';
import { useState } from 'react';
import Loading from './ui/Loading';
import { useFetch } from '../hooks/useFetch';
import FilterProducts from './FilterProducts';

export interface DataFilter {
    id: number;
    name: string;
}

const dataFilter: DataFilter[] = [
    { id: 1, name: 'men' },
    { id: 2, name: 'women' },
    { id: 3, name: 'electronics' },
    { id: 4, name: 'kids' },
];

const AllProducts = () => {
    const { response, loading } = useFetch('/api/fetchData');
    const [filter, setFilter] = useState<number | null>(null);
    if (loading) return <Loading />;

    const handleFilter = (id: number) => {
        setFilter(id);
    };

    const filteredData = response.filter((res) => {
        if (filter) {
            const data = dataFilter.find((data) => data.id === filter);
            if (data) {
                return res.category === data.name;
            }
        }
        return res;
    });

    return (
        <FilterProducts
            dataFilter={dataFilter}
            handleFilter={handleFilter}
            filteredData={filteredData}
        />
    );
};

export default AllProducts;
