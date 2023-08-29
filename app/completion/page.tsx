export default function Completion() {
	return (
		<div className="min-h-screen w-full flex items-center justify-center font-semibold sm:text-3xl flex-wrap bg-emerald-400 text-emerald-950">
			<div className="text-center mx-auto">
				<p className="text-sm my-3">
					Your order has been placed successfully.
				</p>
				<div className="flex items-center gap-2">
					<CheckSvg /> | You can close this window now
				</div>
			</div>
		</div>
	);
}

function CheckSvg() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="w-10 h-10"
		>
			<path
				fillRule="evenodd"
				d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
