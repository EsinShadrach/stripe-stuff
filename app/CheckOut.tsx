"use client";

import {
	PaymentElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

export function CheckOut() {
	const stripe = useStripe();
	const elements = useElements();

	const [message, setMessage] = useState<string | null>(null);
	const [isProcessing, setIsProcessing] = useState(false);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		setIsProcessing(true);

		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `${process.env.NEXT_PUBLIC_APP_URL!}/completion`,
			},
			redirect: "if_required",
		});

		if (error) {
			setMessage(error.message!);
		} else if (paymentIntent && paymentIntent.status === "succeeded") {
			setMessage("Payment succeeded!");
		} else {
			setMessage("Error Occurred");
		}

		setIsProcessing(false);
	};

	const handleColourState = () => {
		if (message?.includes("Error")) {
			return "text-red-950 hover:bg-red-400";
		} else if (message?.includes("succeeded")) {
			return "text-emerald-500 hover:bg-emerald-300/20";
		} else {
			return "text-amber-500 hover:bg-amber-300/20";
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="px-3 w-full max-w-md mx-auto space-y-5 border rounded-md py-3 bg-white hover:shadow-xl transition-all duration-300 focus-within:shadow-xl"
		>
			<div className="w-full max-w-md">
				<PaymentElement />
			</div>
			<button
				disabled={isProcessing}
				type="submit"
				className="w-full max-w-md py-1.5 bg-indigo-400 text-indigo-950 rounded-md font-semibold disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
			>
				{isProcessing ? "Processing..." : "Subscribe"}
			</button>
			{message && (
				<div
					className={`${handleColourState()} w-full max-w-md py-1.5 rounded-md font-semibold text-center transition-all duration-300`}
				>
					<small className="text-center">{message}</small>
				</div>
			)}
		</form>
	);
}
