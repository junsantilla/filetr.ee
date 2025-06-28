import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Rust Project Structure",
	description:
		"A scalable and maintainable folder structure for Rust applications",
	openGraph: {
		title: "Rust Project Structure",
		description:
			"Learn how to structure your Rust project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/rust",
				width: 1200,
				height: 630,
				alt: "Rust Project Structure Overview",
			},
		],
		url: "/rust",
	},
};

interface FileTreeItem {
	name: string;
	type: "file" | "folder";
	children?: FileTreeItem[];
}

interface ExplanationItem {
	title: string;
	icon: "folder" | "file";
	description: string;
}

const basicStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "main.rs", type: "file" },
			{ name: "lib.rs", type: "file" },
		],
	},
	{ name: "Cargo.toml", type: "file" },
	{ name: "Cargo.lock", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "main.rs", type: "file" },
			{ name: "lib.rs", type: "file" },
			{
				name: "modules",
				type: "folder",
				children: [
					{ name: "mod.rs", type: "file" },
					{ name: "user.rs", type: "file" },
					{ name: "config.rs", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "mod.rs", type: "file" },
					{ name: "helpers.rs", type: "file" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "integration_test.rs", type: "file" },
		],
	},
	{
		name: "examples",
		type: "folder",
		children: [
			{ name: "basic_usage.rs", type: "file" },
		],
	},
	{ name: "Cargo.toml", type: "file" },
	{ name: "Cargo.lock", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "main.rs", type: "file" },
			{ name: "lib.rs", type: "file" },
			{
				name: "api",
				type: "folder",
				children: [
					{ name: "mod.rs", type: "file" },
					{ name: "handlers.rs", type: "file" },
					{ name: "middleware.rs", type: "file" },
					{ name: "routes.rs", type: "file" },
				],
			},
			{
				name: "domain",
				type: "folder",
				children: [
					{ name: "mod.rs", type: "file" },
					{
						name: "user",
						type: "folder",
						children: [
							{ name: "mod.rs", type: "file" },
							{ name: "model.rs", type: "file" },
							{ name: "repository.rs", type: "file" },
							{ name: "service.rs", type: "file" },
						],
					},
				],
			},
			{
				name: "infrastructure",
				type: "folder",
				children: [
					{ name: "mod.rs", type: "file" },
					{ name: "database.rs", type: "file" },
					{ name: "cache.rs", type: "file" },
				],
			},
			{
				name: "config",
				type: "folder",
				children: [
					{ name: "mod.rs", type: "file" },
					{ name: "settings.rs", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "mod.rs", type: "file" },
					{ name: "error.rs", type: "file" },
					{ name: "validation.rs", type: "file" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "common", type: "folder" },
			{ name: "integration_test.rs", type: "file" },
			{ name: "api_test.rs", type: "file" },
		],
	},
	{
		name: "examples",
		type: "folder",
		children: [
			{ name: "basic_usage.rs", type: "file" },
			{ name: "advanced_usage.rs", type: "file" },
		],
	},
	{
		name: "benches",
		type: "folder",
		children: [
			{ name: "benchmark.rs", type: "file" },
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "api.md", type: "file" },
			{ name: "architecture.md", type: "file" },
		],
	},
	{
		name: "migrations",
		type: "folder",
		children: [
			{ name: "001_initial.sql", type: "file" },
		],
	},
	{ name: "Cargo.toml", type: "file" },
	{ name: "Cargo.lock", type: "file" },
	{ name: "build.rs", type: "file" },
	{ name: "Dockerfile", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"Contains all Rust source code for the project.",
	},
	{
		title: "src/main.rs",
		icon: "file",
		description:
			"The entry point for a binary crate containing the main function.",
	},
	{
		title: "src/lib.rs",
		icon: "file",
		description:
			"The root module for a library crate, defining the public API.",
	},
	{
		title: "Cargo.toml",
		icon: "file",
		description:
			"The manifest file containing metadata and dependencies for the Rust project.",
	},
	{
		title: "Cargo.lock",
		icon: "file",
		description:
			"Lock file ensuring reproducible builds by specifying exact dependency versions.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/modules/",
		icon: "folder",
		description:
			"Contains organized modules for different aspects of the application.",
	},
	{
		title: "modules/mod.rs",
		icon: "file",
		description:
			"Module declaration file that makes the directory a Rust module.",
	},
	{
		title: "modules/user.rs",
		icon: "file",
		description:
			"User-related functionality and data structures.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"Utility functions and helper modules used throughout the application.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Integration tests that test the public API of the crate.",
	},
	{
		title: "examples/",
		icon: "folder",
		description:
			"Example programs demonstrating how to use the library or application.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/api/",
		icon: "folder",
		description:
			"API layer containing HTTP handlers, middleware, and routing logic.",
	},
	{
		title: "api/handlers.rs",
		icon: "file",
		description:
			"HTTP request handlers that process incoming requests and return responses.",
	},
	{
		title: "api/middleware.rs",
		icon: "file",
		description:
			"Middleware functions for authentication, logging, and request processing.",
	},
	{
		title: "src/domain/",
		icon: "folder",
		description:
			"Domain layer containing business logic organized by domain entities.",
	},
	{
		title: "domain/user/",
		icon: "folder",
		description:
			"User domain module containing model, repository, and service logic.",
	},
	{
		title: "src/infrastructure/",
		icon: "folder",
		description:
			"Infrastructure layer containing database, cache, and external service implementations.",
	},
	{
		title: "infrastructure/database.rs",
		icon: "file",
		description:
			"Database connection and repository implementations.",
	},
	{
		title: "src/config/",
		icon: "folder",
		description:
			"Configuration management including settings and environment variables.",
	},
	{
		title: "utils/error.rs",
		icon: "file",
		description:
			"Custom error types and error handling utilities.",
	},
	{
		title: "benches/",
		icon: "folder",
		description:
			"Benchmark tests for performance measurement using Criterion.rs.",
	},
	{
		title: "migrations/",
		icon: "folder",
		description:
			"Database migration files for schema versioning and updates.",
	},
	{
		title: "build.rs",
		icon: "file",
		description:
			"Build script that runs before compilation for code generation or custom build steps.",
	},
];

function ExplanationSection({ title, icon, description }: ExplanationItem) {
	return (
		<div>
			<h3 className="mb-2 text-2xl text-neutral-950 dark:text-neutral-50">
				<Badge>
					{icon === "folder" ? (
						<Folder size={16} className="mr-1" />
					) : (
						<FileText size={16} className="mr-1" />
					)}
					{title}
				</Badge>
			</h3>
			<p>{description}</p>
		</div>
	);
}

const BREADCRUMB_ITEMS = [
	{ label: "Home", href: "/" },
	{ label: "Rust", href: "/rust" },
] as const;

export default function RustStructurePage() {
	const renderExplanations = (explanations: ExplanationItem[]) => (
		<>
			{explanations.map((item, index) => (
				<ExplanationSection key={index} {...item} />
			))}
		</>
	);

	return (
		<>
			<StructureTemplate
				title="Rust Project Structure"
				description="A scalable and maintainable folder structure for Rust applications"
				breadcrumbItems={[...BREADCRUMB_ITEMS]}
				structures={{
					basic: basicStructure,
					intermediate: intermediateStructure,
					advanced: advancedStructure,
				}}
				explanations={{
					basic: renderExplanations(basicExplanations),
					intermediate: renderExplanations(intermediateExplanations),
					advanced: renderExplanations(advancedExplanations),
				}}
			/>
		</>
	);
}