import Link from "next/link";
import {
	ArrowRight,
	Layout,
	Server,
	Smartphone,
	Code2,
	BrainCircuit,
	Gamepad2,
	Cloud,
	Boxes,
	Github,
	Sparkles,
	FolderTree,
	Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Filetr.ee - Developer Folder & File Structures",
	description:
		"Curated folder structures for programming languages and frameworks at filetr.ee. Find scalable and maintainable project structures for React, Next.js, Vue, Angular, Python, Node.js, and 40+ more technologies.",
	openGraph: {
		title: "Filetr.ee - Developer Folder & File Structures",
		description:
			"Curated folder structures for programming languages and frameworks. Find scalable project structures for React, Next.js, Vue, Angular, Python, Node.js, and 40+ more technologies.",
		url: "https://filetr.ee",
		siteName: "Filetr.ee",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Filetr.ee - Developer Folder & File Structures",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Filetr.ee - Developer Folder & File Structures",
		description:
			"Curated folder structures for programming languages and frameworks. Find scalable project structures for 40+ technologies.",
		images: ["/opengraph-image"],
	},
	keywords: [
		"project structure",
		"folder structure",
		"programming",
		"development",
		"react",
		"nextjs",
		"vue",
		"angular",
		"python",
		"nodejs",
		"typescript",
		"javascript",
		"best practices",
		"scalable architecture",
	],
};

const categories = [
	{
		title: "Frontend Frameworks",
		description: "UI libraries and SPA frameworks for the browser.",
		icon: Layout,
		items: [
			"React.js",
			"Next.js",
			"Vue.js",
			"Angular.js",
			"Svelte",
			"Solid.js",
		],
	},
	{
		title: "Backend Frameworks",
		description: "Server-side frameworks for APIs and web apps.",
		icon: Server,
		items: [
			"Node.js",
			"Express.js",
			"NestJS",
			"Django",
			"Flask",
			"Laravel",
			"Ruby on Rails",
			"ASP.NET",
		],
	},
	{
		title: "Mobile Development",
		description: "Native and cross-platform mobile app structures.",
		icon: Smartphone,
		items: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
	},
	{
		title: "Programming Languages",
		description: "Idiomatic layouts for general-purpose languages.",
		icon: Code2,
		items: [
			"Python",
			"TypeScript",
			"JavaScript",
			"Java",
			"C#",
			"C++",
			"PHP",
			"Go",
			"Rust",
			"Ruby",
		],
	},
	{
		title: "Data Science & ML",
		description: "Notebook, training and inference project layouts.",
		icon: BrainCircuit,
		items: ["Jupyter Notebooks (Python)", "R", "TensorFlow", "PyTorch"],
	},
	{
		title: "Game Development",
		description: "Engines and tooling for shipping games.",
		icon: Gamepad2,
		items: ["Unity (C#)", "Unreal Engine (C++)", "Godot"],
	},
	{
		title: "DevOps & Cloud",
		description: "Containers, orchestration, and serverless layouts.",
		icon: Cloud,
		items: [
			"Docker Projects",
			"Kubernetes Configurations",
			"AWS Lambda",
		],
	},
	{
		title: "Miscellaneous",
		description: "Plugins, desktop and platform-specific apps.",
		icon: Boxes,
		items: [
			"WordPress Plugin Development",
			"Electron.js Apps",
			"Shopify App Development",
		],
	},
];

const totalTechnologies = categories.reduce(
	(sum, c) => sum + c.items.length,
	0
);

const slugify = (s: string) => s.toLowerCase().replace(/[\s.()#]/g, "-");

export default function Home() {
	return (
		<>
			{/* Hero */}
			<section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
				{/* Subtle grid background */}
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.06)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
				/>
				<div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
					<div className="flex flex-col items-start">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
							<Sparkles className="h-3.5 w-3.5" />
							<span>
								{totalTechnologies}+ curated technologies
							</span>
						</div>

						<h1 className="mb-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl lg:text-6xl">
							Project structures,{" "}
							<span className="text-emerald-600 dark:text-emerald-400">
								done right.
							</span>
						</h1>

						<p className="mb-8 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
							Filetr.ee is a curated library of scalable folder
							and file structures for every major language,
							framework, and tool. Stop bikeshedding —{" "}
							<span className="text-neutral-900 dark:text-neutral-100">
								start with a layout that scales.
							</span>
						</p>

						<div className="flex flex-col gap-3 sm:flex-row">
							<Button
								asChild
								size="lg"
								className="bg-emerald-600 text-white shadow-sm hover:bg-emerald-600/90 dark:bg-emerald-500 dark:text-neutral-950 dark:hover:bg-emerald-500/90"
							>
								<Link href="#browse">
									Browse structures
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
							>
								<Link
									href="https://github.com/junsantilla/filetr.ee"
									target="_blank"
								>
									<Github className="h-4 w-4" />
									Star on GitHub
								</Link>
							</Button>
						</div>

						{/* Trust row */}
						<dl className="mt-12 grid w-full max-w-md grid-cols-3 gap-6 border-t border-neutral-200 pt-6 dark:border-neutral-800">
							<div>
								<dt className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
									Stacks
								</dt>
								<dd className="mt-1 text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
									{totalTechnologies}+
								</dd>
							</div>
							<div>
								<dt className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
									Categories
								</dt>
								<dd className="mt-1 text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
									{categories.length}
								</dd>
							</div>
							<div>
								<dt className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
									License
								</dt>
								<dd className="mt-1 text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
									MIT
								</dd>
							</div>
						</dl>
					</div>

					{/* Terminal-style preview card */}
					<div className="relative">
						<div className="absolute -inset-4 -z-10 rounded-2xl bg-emerald-500/10 blur-3xl" />
						<div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
							<div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-100/80 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900/60">
								<div className="flex items-center gap-1.5">
									<span className="h-3 w-3 rounded-full bg-red-400/80" />
									<span className="h-3 w-3 rounded-full bg-amber-400/80" />
									<span className="h-3 w-3 rounded-full bg-emerald-400/80" />
								</div>
								<div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
									<FolderTree className="h-3.5 w-3.5" />
									<span>next-js / structure</span>
								</div>
								<span className="text-xs text-neutral-400 dark:text-neutral-500">
									main
								</span>
							</div>
							<pre className="overflow-x-auto px-5 py-5 text-left text-[13px] leading-6 text-neutral-700 dark:text-neutral-300">
								<code className="font-mono">
									<span className="text-emerald-600 dark:text-emerald-400">
										my-app/
									</span>
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										├──{" "}
									</span>
									<span className="text-emerald-600 dark:text-emerald-400">
										app/
									</span>
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										│   ├──{" "}
									</span>
									layout.tsx
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										│   ├──{" "}
									</span>
									page.tsx
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										│   └──{" "}
									</span>
									<span className="text-emerald-600 dark:text-emerald-400">
										(routes)/
									</span>
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										├──{" "}
									</span>
									<span className="text-emerald-600 dark:text-emerald-400">
										components/
									</span>
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										│   ├──{" "}
									</span>
									ui/
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										│   └──{" "}
									</span>
									shared/
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										├──{" "}
									</span>
									<span className="text-emerald-600 dark:text-emerald-400">
										lib/
									</span>
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										│   ├──{" "}
									</span>
									utils.ts
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										│   └──{" "}
									</span>
									db.ts
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										├──{" "}
									</span>
									<span className="text-emerald-600 dark:text-emerald-400">
										public/
									</span>
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										├──{" "}
									</span>
									package.json
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										├──{" "}
									</span>
									tsconfig.json
									{"\n"}
									<span className="text-neutral-400 dark:text-neutral-500">
										└──{" "}
									</span>
									next.config.mjs
								</code>
							</pre>
						</div>
					</div>
				</div>
			</section>

			{/* Browse */}
			<section
				id="browse"
				className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20"
			>
				<div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
					<div>
						<p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
							Browse the library
						</p>
						<h2 className="text-balance text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 md:text-4xl">
							Pick your stack. Steal a structure.
						</h2>
					</div>
					<p className="max-w-md text-pretty text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
						Every layout is community-reviewed and built around
						real-world conventions — not theoretical ideals.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
					{categories.map((category) => {
						const Icon = category.icon;
						return (
							<div
								key={category.title}
								className="group rounded-xl border border-neutral-200 bg-white p-6 transition-colors hover:border-emerald-500/40 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-emerald-500/40"
							>
								<div className="mb-5 flex items-start justify-between gap-4">
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
											<Icon className="h-5 w-5" />
										</div>
										<div>
											<h3 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
												{category.title}
											</h3>
											<p className="text-xs text-neutral-500 dark:text-neutral-400">
												{category.items.length}{" "}
												structures
											</p>
										</div>
									</div>
								</div>

								<p className="mb-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
									{category.description}
								</p>

								<ul className="flex flex-wrap gap-2">
									{category.items.map((item) => (
										<li key={item}>
											<Link
												href={`/${slugify(item)}`}
												className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:text-emerald-400"
											>
												{item}
												<ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
											</Link>
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
			</section>

			{/* Contribute CTA */}
			<section className="mx-auto max-w-7xl px-4 pb-24">
				<div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-12 dark:border-neutral-800 dark:bg-neutral-900/40 md:px-12 md:py-16">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_60%)]"
					/>
					<div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
						<div className="max-w-2xl">
							<h2 className="mb-3 text-balance text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 md:text-3xl">
								Missing a stack? Add it.
							</h2>
							<p className="text-pretty text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
								Filetr.ee is open source and built by
								developers. Open a pull request to add a new
								structure, refine an existing one, or fix a
								typo.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row">
							<Button
								asChild
								size="lg"
								className="bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90"
							>
								<Link
									href="https://github.com/junsantilla/filetr.ee"
									target="_blank"
								>
									<Github className="h-4 w-4" />
									Contribute on GitHub
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
