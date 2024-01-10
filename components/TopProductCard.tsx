import { Product } from '@/hooks/useFetch';
import React from 'react';
import Card from './ui/Card';

type Props = {
    title: string;
    data: Product[];
};

const TopProductCard = ({ title, data }: Props) => {
    return (
        <div className='my-[80px] w-[90%] mx-auto'>
            <div className='text-center my-[20px]'>
                <h2 className='font-bold min-[320px]:text-4xl md:text-5xl text-black'>
                    {title}
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16'>
                {data.map((res) => (
                    <div key={res._id}>
                        <Card res={res} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopProductCard;
