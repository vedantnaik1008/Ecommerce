import { combinedData } from '@/constants/api';
import Image from 'next/image';
import RatingStars from './RatingStars';
import SimilarProducts from '@/components/SimilarProducts'

interface Props{
  product: number;
}

const DynamicPage = ({product}: Props) => {
  const connect = combinedData.find((res) => res._id === product)
  console.log(connect?._id);
  const productImage = connect?.image || ''
  const productRating = connect?.rating || 4
  const productCategory = connect?.category
  console.log(productCategory);
  

  
  return (
    <div className='mx-auto min-[320px]:pt-[70px] md:pt-[100px]  text-black'>
      <div className="bg-white flex min-[320px]:flex-col md:flex-row justify-center items-center gap-8 p-5 min-[320px]:rounded-none md:rounded-xl min-[320px]:w-full md:w-[80%] mx-auto">
        <div className="w-[100%] h-full  ">
          <Image width={100} height={100} src={productImage} alt={'product-Image'} className='object-cover rounded-lg w-full h-[80%]'/>
        </div>
        <div className='w-full'>
          <h2 className='font-bold mb-5 min-[320px]:text-2xl md:text-4xl'>{connect?.title}</h2>
          <span className="font-semibold mb-5">${connect?.price}</span>
          <div className="flex items-center gap-5 my-5">
            <span className="font-semibold">{productRating}</span>
            <RatingStars rating={productRating} />
            <p className="text-blue-500 font-semibold">500 Reviews</p>
          </div>
          <div className="mb-8">
            <p className="font-semibold max-w-4xl">{connect?.description}</p>
          </div>
          <button className="bg-black rounded-[5px] w-full text-white font-semibold py-1 px-4">Add To Cart</button>
        </div>
      </div>
      <SimilarProducts categories={productCategory}/>
    </div>
  )
}

export default DynamicPage