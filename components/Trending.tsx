'use client';
import { useFetch } from '../hooks/useFetch';
import Loading from './ui/Loading';
import TopProductCard from './TopProductCard';

const Trending = () => {
    const { response, loading } = useFetch('/api/fetchData');
    const data = response
        .filter((res) => res.category !== 'electronics')
        .slice(0, 4);

    if (loading) return <Loading />;

    return <TopProductCard title={'Bestseller'} data={data} />
}

export default Trending;
