import Link from 'next/link';
import Image from 'next/image';
import success from '@/public/images/payment_success_icon.webp';

const Success = () => {
    return (
        <section className='grid place-items-center h-screen w-full bg-white'>
            <div className='p-4 flex flex-col items-center justify-center'>
                <Image src={success} alt={'success-img'} height={100} width={100} className="mb-5" />
                <h1 className='font-bold'>Your payment was successfull</h1>
                <h4 className='font-bold text-center'>
                    Thanks for showing interests in our products
                </h4>
                <h5 className='font-bold'>Have a wonderfull day!</h5>

                <button
                    className='border  px-4 py-2 rounded-md text-white mt-4 capitalize group bg-black font-semibold'>
                    <Link href='/order'>View Orders</Link>
                </button>
            </div>
        </section>
    );
};

export default Success;
