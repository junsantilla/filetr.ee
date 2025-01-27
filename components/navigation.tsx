import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
	return (
		<header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
				<div className="flex items-center gap-6">
					<Link href="/" className="text-xl font-bold">
						🌳Filetr.ee
					</Link>
					<div className="hidden items-center gap-6 md:flex">
						<Link
							href="https://github.com/junsantilla/filertr.ee/graphs/contributors"
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
						href="https://github.com/junsantilla/filertr.ee/stargazers"
						target="_blank"
					>
						<Button variant="outline" size="sm">
							<Github className="mr-2 h-4 w-4" />
							Stargazers
						</Button>
					</Link>
				</div>
			</nav>
		</header>
	);
}
