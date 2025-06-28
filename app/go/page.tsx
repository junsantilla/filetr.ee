import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Go Project Structure",
	description:
		"A scalable and maintainable folder structure for Go applications",
	openGraph: {
		title: "Go Project Structure",
		description:
			"Learn how to structure your Go project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/go",
				width: 1200,
				height: 630,
				alt: "Go Project Structure Overview",
			},
		],
		url: "/go",
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
	{ name: "main.go", type: "file" },
	{ name: "utils.go", type: "file" },
	{ name: "go.mod", type: "file" },
	{ name: "go.sum", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "cmd",
		type: "folder",
		children: [
			{
				name: "myapp",
				type: "folder",
				children: [
					{ name: "main.go", type: "file" },
				],
			},
		],
	},
	{
		name: "internal",
		type: "folder",
		children: [
			{
				name: "handlers",
				type: "folder",
				children: [
					{ name: "user.go", type: "file" },
					{ name: "health.go", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "user.go", type: "file" },
				],
			},
			{
				name: "config",
				type: "folder",
				children: [
					{ name: "config.go", type: "file" },
				],
			},
		],
	},
	{
		name: "pkg",
		type: "folder",
		children: [
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "string.go", type: "file" },
				],
			},
		],
	},
	{ name: "go.mod", type: "file" },
	{ name: "go.sum", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "cmd",
		type: "folder",
		children: [
			{
				name: "api",
				type: "folder",
				children: [
					{ name: "main.go", type: "file" },
				],
			},
			{
				name: "worker",
				type: "folder",
				children: [
					{ name: "main.go", type: "file" },
				],
			},
		],
	},
	{
		name: "internal",
		type: "folder",
		children: [
			{
				name: "api",
				type: "folder",
				children: [
					{
						name: "handlers",
						type: "folder",
						children: [
							{ name: "user.go", type: "file" },
							{ name: "auth.go", type: "file" },
						],
					},
					{
						name: "middleware",
						type: "folder",
						children: [
							{ name: "auth.go", type: "file" },
							{ name: "cors.go", type: "file" },
						],
					},
					{
						name: "routes",
						type: "folder",
						children: [
							{ name: "routes.go", type: "file" },
						],
					},
				],
			},
			{
				name: "domain",
				type: "folder",
				children: [
					{
						name: "user",
						type: "folder",
						children: [
							{ name: "model.go", type: "file" },
							{ name: "repository.go", type: "file" },
							{ name: "service.go", type: "file" },
						],
					},
				],
			},
			{
				name: "infrastructure",
				type: "folder",
				children: [
					{
						name: "database",
						type: "folder",
						children: [
							{ name: "postgres.go", type: "file" },
							{ name: "migrations", type: "folder" },
						],
					},
					{
						name: "cache",
						type: "folder",
						children: [
							{ name: "redis.go", type: "file" },
						],
					},
				],
			},
			{
				name: "config",
				type: "folder",
				children: [
					{ name: "config.go", type: "file" },
					{ name: "database.go", type: "file" },
				],
			},
		],
	},
	{
		name: "pkg",
		type: "folder",
		children: [
			{
				name: "logger",
				type: "folder",
				children: [
					{ name: "logger.go", type: "file" },
				],
			},
			{
				name: "validator",
				type: "folder",
				children: [
					{ name: "validator.go", type: "file" },
				],
			},
		],
	},
	{
		name: "api",
		type: "folder",
		children: [
			{ name: "openapi.yaml", type: "file" },
		],
	},
	{
		name: "deployments",
		type: "folder",
		children: [
			{ name: "docker", type: "folder" },
			{ name: "kubernetes", type: "folder" },
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "build.sh", type: "file" },
			{ name: "test.sh", type: "file" },
		],
	},
	{
		name: "test",
		type: "folder",
		children: [
			{ name: "integration", type: "folder" },
			{ name: "fixtures", type: "folder" },
		],
	},
	{ name: "go.mod", type: "file" },
	{ name: "go.sum", type: "file" },
	{ name: "Dockerfile", type: "file" },
	{ name: "Makefile", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "main.go",
		icon: "file",
		description:
			"The entry point of the Go application containing the main function.",
	},
	{
		title: "utils.go",
		icon: "file",
		description:
			"Utility functions and helper methods used throughout the application.",
	},
	{
		title: "go.mod",
		icon: "file",
		description:
			"Go module file defining the module path and dependencies.",
	},
	{
		title: "go.sum",
		icon: "file",
		description:
			"Contains cryptographic checksums of module dependencies for security.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "cmd/",
		icon: "folder",
		description:
			"Contains main applications for this project, with each subdirectory representing a different executable.",
	},
	{
		title: "cmd/myapp/",
		icon: "folder",
		description:
			"Main application directory containing the entry point for the specific application.",
	},
	{
		title: "internal/",
		icon: "folder",
		description:
			"Private application and library code that cannot be imported by other applications or libraries.",
	},
	{
		title: "internal/handlers/",
		icon: "folder",
		description:
			"HTTP handlers that process incoming requests and return responses.",
	},
	{
		title: "internal/models/",
		icon: "folder",
		description:
			"Data models and structures representing business entities.",
	},
	{
		title: "internal/config/",
		icon: "folder",
		description:
			"Configuration management for the application including environment variables.",
	},
	{
		title: "pkg/",
		icon: "folder",
		description:
			"Library code that can be used by external applications and other projects.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "cmd/api/",
		icon: "folder",
		description:
			"API server application entry point for the REST API service.",
	},
	{
		title: "cmd/worker/",
		icon: "folder",
		description:
			"Background worker application for processing jobs and tasks.",
	},
	{
		title: "internal/api/",
		icon: "folder",
		description:
			"API-specific code including handlers, middleware, and routing logic.",
	},
	{
		title: "internal/api/middleware/",
		icon: "folder",
		description:
			"HTTP middleware for authentication, CORS, logging, and other cross-cutting concerns.",
	},
	{
		title: "internal/domain/",
		icon: "folder",
		description:
			"Domain-driven design structure with business logic organized by domain entities.",
	},
	{
		title: "internal/domain/user/",
		icon: "folder",
		description:
			"User domain containing model, repository interface, and service logic.",
	},
	{
		title: "internal/infrastructure/",
		icon: "folder",
		description:
			"Infrastructure layer containing database, cache, and external service implementations.",
	},
	{
		title: "infrastructure/database/",
		icon: "folder",
		description:
			"Database connection, repository implementations, and migration files.",
	},
	{
		title: "pkg/logger/",
		icon: "folder",
		description:
			"Reusable logging package that can be used across different applications.",
	},
	{
		title: "api/",
		icon: "folder",
		description:
			"API documentation and specifications including OpenAPI/Swagger files.",
	},
	{
		title: "deployments/",
		icon: "folder",
		description:
			"Deployment configurations for Docker, Kubernetes, and other platforms.",
	},
	{
		title: "test/",
		icon: "folder",
		description:
			"Additional test files including integration tests and test fixtures.",
	},
	{
		title: "Makefile",
		icon: "file",
		description:
			"Build automation with common tasks like build, test, and deploy.",
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
	{ label: "Go", href: "/go" },
] as const;

export default function GoStructurePage() {
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
				title="Go Project Structure"
				description="A scalable and maintainable folder structure for Go applications"
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