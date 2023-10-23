import Link from "next/link";
export const metadata = {
	title: "Success | QuickKart",
	description:
		"It will show the success page after doing successfull payment method",
};
export default function SuccessPage() {
 
	return (
		<section className="grid place-items-center ">
			<div className="mt-20">
				<h1>Your payment was successfull</h1>
				<h4 className="italic">
					Thanks for showing interests in our products
				</h4>
				<h5 className="italic">Have a wonderfull day!</h5>

				<button className="border border-blue-500 px-4 py-2 rounded mt-8 capitalize group bg-blue-500 font-medium">
					<Link href='/dashboard'>go back to home </Link>
					<span className="group-hover:inline-flex  hidden">
						&rarr;
					</span>{" "}
				</button>
			</div>
		</section>
	);
}