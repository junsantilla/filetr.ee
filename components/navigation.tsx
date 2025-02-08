"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Navigation() {
	// Fetch the number of stars on the GitHub repository
	const { data } = useSWR(
		"https://api.github.com/repos/junsantilla/filetr.ee",
		fetcher
	);

	const stars = data?.stargazers_count ?? "—";

	return (
		<header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
				<div className="flex items-center gap-6">
					<Link href="/" className="text-xl font-bold">
						🌳Filetr.ee
					</Link>
					<div className="hidden items-center gap-6 md:flex">
						<Link
							href="https://github.com/junsantilla/filetr.ee/graphs/contributors"
							className="text-sm text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
							target="_blank"
						>
							Contributors
						</Link>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<ThemeToggle />
					<Link
						href="https://github.com/junsantilla/filetr.ee/stargazers"
						target="_blank"
					>
						<Button variant="outline" size="sm">
							<Github className="h-4 w-4" />
							{stars} Stargazers
						</Button>
					</Link>
				</div>
			</nav>
		</header>
	);
}
