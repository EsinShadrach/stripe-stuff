import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2022-11-15",
	typescript: true,
});

export async function POST(request: NextRequest, response: NextResponse) {
	const { amount } = await request.json();
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			currency: "GBP",
			amount: amount * 100 as number,
			automatic_payment_methods: { enabled: true },
		});

		// console.log("Payment Intents =>", paymentIntent);
		return new Response(
			JSON.stringify({ clientSecret: paymentIntent.client_secret }),
			{
				status: 200,
			}
		);
	} catch (error) {
		return new Response(`Error: ${error} \n`, {
			status: 500,
		});
	}
}

export async function GET(request: NextRequest, response: NextResponse) {
	return new Response("Invalid Method => GET", {
		status: 400,
	});
}
