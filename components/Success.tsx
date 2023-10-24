'use client'
import Link from "next/link";
import Lottie from 'lottie-react';
import successAnimation from '../public/Animation - 1698122931837.json';

export const SuccessPage = () => {
 
	return (
		<section className="grid place-items-center h-screen w-full bg-white">
			<div className="p-4 flex flex-col items-center justify-center">
				<Lottie animationData={successAnimation} loop={false} className="w-64 mx-auto"/>
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