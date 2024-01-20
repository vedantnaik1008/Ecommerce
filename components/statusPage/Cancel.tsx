'use client';
import Link from 'next/link';
import cancel from '@/public/images/fail-img.webp';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { resetOrder } from '@/redux/reducers/addItems';
const Cancel = () => {
    const dispatch = useDispatch();
    return (
        <section className='grid place-items-center h-screen w-full bg-white'>
            <div className='font-bold p-4 flex flex-col justify-center items-center'>
                <Image
                    src={cancel}
                    alt={'success-img'}
                    height={100}
                    width={100}
                    className='mb-5'
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
