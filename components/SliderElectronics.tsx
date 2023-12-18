'use client';
import { useFetch } from '../hooks/useFetch';
import Loading from './ui/Loading';
import SliderPresentational from './SliderPresentational';

const SliderElectronics = () => {
    const { response, loading } = useFetch('/api/fetchData');
    const data = response
        .filter((res) => res.category === 'electronics')
        .slice(0, 10);
    if (loading) return <Loading />;

    return (
        <SliderPresentational data={data} link={'/Electronics'} heading={'Electronics'} />
    );
};

export default SliderElectronics;
