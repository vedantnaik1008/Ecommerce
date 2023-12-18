import { Product } from '@/hooks/useFetch';
import { DataFilter } from './AllProducts';
import Card from './ui/Card';

type Props = {
    dataFilter: DataFilter[];
    filteredData: Product[];
    handleFilter: (id: number) => void;
};

const FilterProducts = ({ dataFilter, filteredData, handleFilter }: Props) => {
    return (
        <div className='w-[95%] h-full mx-auto py-[100px]'>
            <div className='flex sm:justify-center md:justify-normal gap-4 flex-wrap'>
                {dataFilter.map((data) => (
                    <button
                        key={data.id}
                        onClick={() => handleFilter(data.id)}
                        className='bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg px-4 py-2'>
                        {data.name}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 six:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[50px]'>
                {filteredData.map((res) => (
                    <div key={res._id}>
                        <Card res={res} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterProducts;
