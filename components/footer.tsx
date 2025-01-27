import Link from "next/link";

export function Footer() {
	return (
		<footer className="mt-auto border-t bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/80">
			<div className="mx-auto max-w-7xl px-4 py-12">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<p className="text-sm text-neutral-500 dark:text-neutral-400">
						© 2025 🌳Filetr.ee. All rights reserved.
					</p>
					<div className="flex gap-6">
						<Link
							href="/privacy"
							className="text-sm text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
						>
							Privacy
						</Link>
						<Link
							href="/terms"
							className="text-sm text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
						>
							Terms
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
