import { combinedData } from '@/constants/api';

interface Props{
  product: number;
}

const DynamicPage = ({product}: Props) => {
  const connect = combinedData.find((res) => res._id === product)
  console.log(connect?._id);
  
  return (
    <div className='h-[100vh] w-full pt-[100px] text-black'>
      <h1>{connect?.title}</h1>
    </div>
  )
}

export default DynamicPage