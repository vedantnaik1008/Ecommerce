'use client';
import { useFetch } from '../hooks/useFetch';
import Loading from './ui/Loading';
import SliderPresentational from './SliderPresentational';

const SliderClothes = () => {
    const { response, loading } = useFetch('/api/fetchData');
    if (loading) return <Loading />;
    const data = response
        .filter((res) => res.category !== 'electronics')
        .slice(0, 10);

    return (
        <SliderPresentational data={data} link='/clothes' heading={'Clothes'} />
    );
};

export default SliderClothes;
