"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, FolderTree, Github, BookOpen } from "lucide-react";
import { FileTreeComponent, type FileTreeItem } from "@/components/file-tree";
import Giscus from "@giscus/react";

interface StructureTemplateProps {
	title: string;
	description: string;
	breadcrumbItems: { label: string; href: string }[];
	structures: {
		basic: FileTreeItem[];
		intermediate: FileTreeItem[];
		advanced: FileTreeItem[];
	};
	explanations: {
		basic: React.ReactNode;
		intermediate: React.ReactNode;
		advanced: React.ReactNode;
	};
}

const TABS = [
	{ label: "Basic", value: "basic" as const },
	{ label: "Intermediate", value: "intermediate" as const },
	{ label: "Advanced", value: "advanced" as const },
];

export function StructureTemplate({
	title,
	description,
	breadcrumbItems,
	structures,
	explanations,
}: StructureTemplateProps) {
	const [activeTab, setActiveTab] =
		useState<(typeof TABS)[number]["value"]>("basic");

	const hasContent =
		structures[activeTab].length > 0 && explanations[activeTab];

	return (
		<>
			{/* Hero / header */}
			<section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-10 md:py-14">
					{/* Breadcrumbs */}
					<nav
						aria-label="Breadcrumb"
						className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400"
					>
						{breadcrumbItems.map((item, index) => (
							<div key={index} className="flex items-center gap-1.5">
								{index > 0 && (
									<ChevronRight className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-600" />
								)}
								<Link
									href={item.href}
									className={`transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 ${
										index === breadcrumbItems.length - 1
											? "font-medium text-neutral-900 dark:text-neutral-100"
											: ""
									}`}
								>
									{item.label}
								</Link>
							</div>
						))}
					</nav>

					<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
						<div className="max-w-3xl">
							<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
								<FolderTree className="h-3.5 w-3.5" />
								<span>Project structure guide</span>
							</div>
							<h1 className="mb-3 text-balance text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 md:text-4xl lg:text-5xl">
								{title}
							</h1>
							<p className="max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
								{description}
							</p>
						</div>

						{/* Segmented complexity tabs */}
						<div
							role="tablist"
							aria-label="Complexity level"
							className="inline-flex w-full max-w-md shrink-0 items-center gap-1 rounded-lg border border-neutral-200 bg-neutral-100/60 p-1 dark:border-neutral-800 dark:bg-neutral-900/60 md:w-auto"
						>
							{TABS.map((tab) => {
								const isActive = activeTab === tab.value;
								return (
									<button
										key={tab.value}
										role="tab"
										aria-selected={isActive}
										onClick={() => setActiveTab(tab.value)}
										className={`flex-1 rounded-md px-4 py-1.5 text-sm font-medium transition-colors md:flex-none ${
											isActive
												? "bg-white text-neutral-950 shadow-sm dark:bg-neutral-950 dark:text-neutral-50"
												: "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
										}`}
									>
										{tab.label}
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{hasContent ? (
				<main className="mx-auto max-w-7xl px-4 py-12 md:py-16">
					<div className="grid gap-8 lg:grid-cols-[minmax(0,_22rem)_1fr] lg:gap-10">
						{/* File tree — terminal-style card, sticky on desktop */}
						<aside className="lg:sticky lg:top-6 lg:self-start">
							<div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
								<div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-100/80 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900/60">
									<div className="flex items-center gap-1.5">
										<span className="h-3 w-3 rounded-full bg-red-400/80" />
										<span className="h-3 w-3 rounded-full bg-amber-400/80" />
										<span className="h-3 w-3 rounded-full bg-emerald-400/80" />
									</div>
									<div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
										<FolderTree className="h-3.5 w-3.5" />
										<span className="font-mono">
											{TABS.find((t) => t.value === activeTab)?.label.toLowerCase()}
										</span>
									</div>
									<span className="text-xs text-neutral-400 dark:text-neutral-500">
										tree
									</span>
								</div>
								<div className="px-3 py-4">
									<FileTreeComponent items={structures[activeTab]} />
								</div>
							</div>

							<p className="mt-4 px-1 text-xs leading-relaxed text-neutral-500 dark:text-neutral-500">
								Click folders to collapse or expand. Each item is
								documented on the right.
							</p>
						</aside>

						{/* Explanations */}
						<section>
							<div className="mb-6 flex items-center gap-2">
								<BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
								<h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
									Directory breakdown
								</h2>
							</div>
							<div className="space-y-6 text-neutral-600 dark:text-neutral-400 [&_h3]:!mb-2 [&_p]:text-sm [&_p]:leading-relaxed">
								{explanations[activeTab]}
							</div>
						</section>
					</div>
				</main>
			) : (
				<div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
					<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
						<FolderTree className="h-7 w-7" />
					</div>
					<h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 md:text-4xl">
						Coming Soon
					</h2>
					<p className="mb-8 text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
						This structure isn&apos;t available just yet — but we&apos;re working
						hard to bring it to you. Filetr.ee is open source, so you&apos;re
						welcome to contribute it yourself.
					</p>
					<Link
						href="https://github.com/junsantilla/filetr.ee"
						target="_blank"
						className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-600/90 dark:bg-emerald-500 dark:text-neutral-950 dark:hover:bg-emerald-500/90"
					>
						<Github className="h-4 w-4" />
						Contribute on GitHub
					</Link>
				</div>
			)}

			{/* Comments */}
			<section className="mx-auto max-w-7xl px-4 pb-16">
				<div className="border-t border-neutral-200 pt-10 dark:border-neutral-800">
					<h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
						Discussion
					</h2>
					<Giscus
						id="comments"
						repo="junsantilla/filetr.ee"
						repoId="R_kgDONwLoyQ"
						category="General"
						categoryId="DIC_kwDONwLoyc4CqgY6"
						mapping="pathname"
						term="Welcome to @giscus/react component!"
						reactionsEnabled="1"
						emitMetadata="0"
						inputPosition="top"
						theme="transparent_dark"
						lang="en"
						loading="lazy"
					/>
				</div>
			</section>
		</>
	);
}
