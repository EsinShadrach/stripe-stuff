"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { CheckOut } from "./CheckOut";
import { LoadingState } from "./LoadingState";

export default function Home() {
	const [stripePromise, setStripePromise] = useState<any>();
	const [clientSecret, setClientSecret] = useState<string>("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api/config");
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data: any = await response.json();

				setStripePromise(loadStripe(data.publishableKey));
			} catch (error) {
				console.error("Error fetching publishable key:", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api/create-payment-intent", {
					method: "POST",
					body: JSON.stringify({
						amount: 199,
					}),
				});
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const { clientSecret } = await response.json();
				setClientSecret(clientSecret);
			} catch (error) {
				console.error("Error fetching Client Secret:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className="flex md:min-h-screen justify-center items-center relative flex-col-reverse md:flex-row gap-2 container mx-auto">
			<div className="w-full px-3 md:px-0 md:mt-0 mt-10">
				{stripePromise && clientSecret ? (
					<Elements stripe={stripePromise} options={{ clientSecret }}>
						<CheckOut />
					</Elements>
				) : (
					<LoadingState />
				)}
			</div>
			<div className="bg-indigo-100 w-full relative text-indigo-900 rounded-md h-full p-6 rounded-t-none md:rounded-t-md max-w-2xl md:text-right text-center">
				<div className="w-fit space-y-10 ml-auto">
					<div className="font-semibold text-2xl">
						Co Working Sphere - Check Out
					</div>
					<div className="text-sm">
						Purchase Subscription for Co Working Sphere
					</div>
          <div className="w-full h-px bg-gradient-to-r from-indigo-100 via-indigo-900 to-transparent" />
					<div className="font-semibold flex items-center text-xl justify-between w-full max-w-md mr-auto">
						<div>Total: </div>
						<div>£199 / Month</div>
					</div>
				</div>
			</div>
		</section>
	);
}
