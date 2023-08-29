import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	try {
		const publishableKey: string = process.env.STRIPE_PUBLISH_KEY!;
		const data = {
			publishableKey: publishableKey,
		};

		return new Response(JSON.stringify(data), {
			status: 200,
		});
        
	} catch (error) {
		return new Response(`Error => ${error}`, {
			status: 500,
		});
	}
}
