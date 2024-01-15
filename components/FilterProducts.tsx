import { Product } from '@/hooks/useFetch';
import { DataFilter } from './AllProducts';
import Pagination from './Pagination';

type Props = {
    dataFilter: DataFilter[];
    filteredData: Product[];
    handleFilter: (id: number) => void;
};

const FilterProducts = ({ dataFilter, filteredData, handleFilter }: Props) => {
    return (
        <div
            className={`w-[95%] ${
                filteredData.length === 0 ? 'h-screen' : 'h-full'
            } mx-auto py-[100px]`}>
            <div className='flex sm:justify-center md:justify-normal gap-4 flex-wrap'>
                {dataFilter.map((data) => (
                    <button
                        key={data.id}
                        onClick={() => handleFilter(data.id)}
                        className='bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg px-4 py-2'>
                        {data.name}
                    </button>
                ))}
                <button
                    className='bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg px-4 py-2'
                    onClick={() => window.location.reload()}>
                    all
                </button>
            </div>
            <div className=''>
                <Pagination data={filteredData} />
            </div>
        </div>
    );
};

export default FilterProducts;
