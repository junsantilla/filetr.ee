import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-[calc(100vh-300px)] p-4">
			<h1 className="text-4xl font-bold mb-4">😲 404 - Page Not Found</h1>
			<p className="text-lg mb-4">
				Sorry, the page you are looking for does not exist or not yet
				available.
			</p>
			<p>
				Filetr.ee is an open-source project. If you want to contribute,
				please check our{" "}
				<Link
					href="https://github.com/junsantilla/filetr.ee"
					className="underline"
					target="_blank"
				>
					GitHub repository
				</Link>
				.
			</p>
		</div>
	);
};

export default NotFound;
