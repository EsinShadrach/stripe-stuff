export function LoadingState() {
	return (
		<div className="w-full max-w-md border rounded-md p-3 bg-white space-y-1 text-sm">
			<div>
				<div className="text-sm">Card number</div>
				<div className="border rounded-md p-2 w-full shadow-sm flex items-center justify-between">
					<div className="skeleton h-5 w-2/3" />
					<div className="flex items-center gap-1">
						<div className="skeleton rounded-md h-6 w-8" />
						<div className="skeleton rounded-md h-6 w-8" />
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between gap-3">
				<div className="w-full">
					<div className="mb-1">Expiry</div>
					<div className="border p-2 w-full rounded-md">
						<div className="skeleton h-5 w-1/3" />
					</div>
				</div>
				<div className="w-full">
					<div className="mb-1">CVC</div>
					<div className="border p-2 w-full rounded-md flex items-center justify-between">
						<div className="skeleton h-5 w-1/3" />
						<div className="skeleton rounded-md h-6 w-8" />
					</div>
				</div>
			</div>
			<div>
				<div className="text-sm mb-1">Country</div>
				<div className="border rounded-md p-2 w-full shadow-sm flex items-center justify-between">
					<div className="skeleton h-5 w-2/3" />
					<ChevronDown />
				</div>
			</div>
			<div className="pt-4">
				<button
					disabled
					type="submit"
					className="w-full max-w-md py-1.5 skeleton text-emerald-950/30 rounded-md font-semibold "
				>
					Pay
				</button>
			</div>
		</div>
	);
}

export function ChevronDown() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 8.25l-7.5 7.5-7.5-7.5"
			/>
		</svg>
	);
}
