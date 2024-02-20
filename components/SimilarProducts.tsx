'use client';
import { useFetch } from '../hooks/useFetch';
import TopProductCard from './TopProductCard';

interface Props {
    categories: string | undefined;
}

const SimilarProducts = ({ categories }: Props) => {
    const { response } = useFetch('/api/fetchData');
    const data = response
        .filter((res) => res.category === categories)
        .slice(0, 4);
    console.log(data);

    return <TopProductCard title={'Similar Products'} data={data} />;
};

export default SimilarProducts;
