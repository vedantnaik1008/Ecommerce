'use client';
import { useFetch } from '../hooks/useFetch';
import Loading from './ui/Loading';
import TopProductCard from './TopProductCard';

interface Props {
    categories: string | undefined;
}

const SimilarProducts = ({ categories }: Props) => {
    const { response, loading } = useFetch('/api/fetchData');
    const data = response
        .filter((res) => res.category === categories)
        .slice(0, 4);
    console.log(data);
    if (loading) return <Loading />;

    return <TopProductCard title={'Similar Products'} data={data} />;
};

export default SimilarProducts;
