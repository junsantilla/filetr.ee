import Link from "next/link";
import { Star } from "lucide-react";

export function AnnouncementBar() {
	return (
		<div className="border-b border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-center text-xs text-emerald-800 dark:text-emerald-300">
			<span className="inline-flex items-center gap-2">
				<Star className="h-3.5 w-3.5" />
				<span>
					Filetr.ee is open source.{" "}
					<Link
						href="https://github.com/junsantilla/filetr.ee"
						className="font-medium underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-200"
						target="_blank"
					>
						Star us on GitHub
					</Link>
				</span>
			</span>
		</div>
	);
}
