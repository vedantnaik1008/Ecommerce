'use client';
import Card from './ui/Card';
import Loading from './ui/Loading';
import { useFetch } from '../hooks/useFetch';

const Products = () => {
    const { response, loading } = useFetch('/api/fetchData');
    const filteredData = response.filter(
        (res) => res.category !== 'electronics'
    ).slice(0, 10);
    if (loading) return <Loading />;

    return (
        <div className={`w-[95%] mx-auto ${filteredData.length === 0 ? 'h-screen' :'h-full'}  py-[100px]`}>
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

export default Products;
