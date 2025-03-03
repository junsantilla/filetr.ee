import { Bug, Copyright, GitPullRequest } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="mt-auto border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
			<div className="mx-auto max-w-7xl px-4 py-6">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div className="text-sm text-neutral-500 dark:text-neutral-400">
						<p>
							<Bug className="inline-block w-4 h-4 mr-1" />
							Do you see a bug?{" "}
							<a
								href="https://github.com/junsantilla/filetr.ee/issues"
								className="underline"
								target="_blank"
								rel="noreferrer"
							>
								Open an issue on GitHub
							</a>
						</p>
						<p>
							<GitPullRequest className="inline-block w-4 h-4 mr-1" />
							Do you want to contribute?{" "}
							<a
								href="https://github.com/junsantilla/filetr.ee/pulls"
								className="underline"
								target="_blank"
								rel="noreferrer"
							>
								Pull request on Github
							</a>
						</p>

						<p>
							<Copyright className="inline-block w-4 h-4 mr-1" />
							2025 🌳Filetr.ee. All rights reserved.
						</p>
					</div>
					<div className="self-end flex gap-6 justify-center">
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
