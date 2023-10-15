'use client'
import Link from 'next/link';
import { useFetch } from '@/hooks/useFetch';
import Loading from './Loading';
import Card from './Card';

interface Props{
    categories:  string | undefined;
}

const SimilarProducts = ({categories}: Props) => {
    const { response, loading, setResponse } = useFetch('/fetchData')
    const data = response.filter(res => res.category === categories).slice(0,4)
    console.log(data);
    if (loading) return <Loading />


  return (
    <div>
        <div className="my-[80px] w-[90%] mx-auto">
            <div className="text-center my-[20px]">
                <h2 className="font-bold min-[320px]:text-3xl md:text-5xl text-black">Similar Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1500px]:grid-cols-4 gap-6 mt-[70px]">
                {data.map((res) => (
                    <Link href={`/details/${res._id}?id=${res._id}`} className="" key={res._id}>
                        <Card res={res} />
                    </Link>
                ))}
            </div>
        </div>  
    </div>
  )
}

export default SimilarProducts
