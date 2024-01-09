'use client';
import dynamic from 'next/dynamic';
const DynamicLottie = dynamic(() => import('lottie-react'), {
    ssr: false,
});
import Link from 'next/link';
import cancelAnimation from '@/public/Animation - 1698125045976.json';
import { useDispatch } from 'react-redux';
import { resetOrder } from '@/redux/reducers/addItems';
const Cancel = () => {
    const dispatch = useDispatch();
    return (
        <section className='grid place-items-center h-screen w-full bg-white'>
            <div className='font-bold p-4 flex flex-col justify-center items-center'>
                <DynamicLottie
                    animationData={cancelAnimation}
                    loop={false}
                    className='w-64 mx-auto'
                />
                <h1>Unfortunately Your payment was cancel! </h1>
                <h4 className=''>Want to buy your desired products!</h4>

                <button
                    onClick={() => dispatch(resetOrder())}
                    className=' px-4 py-2 text-white rounded-md mt-4 capitalize group bg-black'>
                    <Link href='/Shop'>click here</Link>
                </button>
            </div>
        </section>
    );
};

export default Cancel;
