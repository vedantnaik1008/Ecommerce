'use client'
import Link from "next/link";
import dynamic from 'next/dynamic'
const DynamicLottie = dynamic(() => import('lottie-react'), {
 ssr: false
})
import successAnimation from '../public/Animation - 1698122931837.json';

const Success = () => {
	return (
		<section className="grid place-items-center h-screen w-full bg-white">
			<div className="p-4 flex flex-col items-center justify-center">
				<DynamicLottie animationData={successAnimation} loop={false} className="w-64 mx-auto"/>
				<h1 className="font-bold">Your payment was successfull</h1>
				<h4 className="font-bold">
					Thanks for showing interests in our products
				</h4>
				<h5 className="font-bold">Have a wonderfull day!</h5>

				<button className="border  px-4 py-2 rounded-md text-white mt-4 capitalize group bg-black font-semibold">
					<Link href='/dashboard'>Go back to home</Link>
				</button>
			</div>
		</section>
	);
}

export default Success