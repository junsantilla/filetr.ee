import Link from "next/link";

export function AnnouncementBar() {
	return (
		<div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 text-center text-sm text-white">
			🌟 We are Open Source! Check out our repository on{" "}
			<Link
				href="https://github.com/junsantilla/filertr.ee"
				className="underline inline"
				target="_blank"
			>
				GitHub
			</Link>
		</div>
	);
}
