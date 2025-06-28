import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Python Project Structure",
	description:
		"A scalable and maintainable folder structure for Python applications",
	openGraph: {
		title: "Python Project Structure",
		description:
			"Learn how to structure your Python project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/python",
				width: 1200,
				height: 630,
				alt: "Python Project Structure Overview",
			},
		],
		url: "/python",
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
			{ name: "__init__.py", type: "file" },
			{ name: "main.py", type: "file" },
			{
				name: "modules",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "utils.py", type: "file" },
					{ name: "helpers.py", type: "file" },
				],
			},
		],
	},
	{ name: "requirements.txt", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "main.py", type: "file" },
			{
				name: "core",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "config.py", type: "file" },
					{ name: "database.py", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "user.py", type: "file" },
					{ name: "base.py", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "user_service.py", type: "file" },
					{ name: "auth_service.py", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "helpers.py", type: "file" },
					{ name: "validators.py", type: "file" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "test_main.py", type: "file" },
			{ name: "test_utils.py", type: "file" },
		],
	},
	{ name: "requirements.txt", type: "file" },
	{ name: "setup.py", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "main.py", type: "file" },
			{
				name: "core",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "config.py", type: "file" },
					{ name: "database.py", type: "file" },
					{ name: "exceptions.py", type: "file" },
					{ name: "logging.py", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "user.py", type: "file" },
					{ name: "post.py", type: "file" },
					{ name: "base.py", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "user_service.py", type: "file" },
					{ name: "auth_service.py", type: "file" },
					{ name: "email_service.py", type: "file" },
				],
			},
			{
				name: "repositories",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "user_repository.py", type: "file" },
					{ name: "base_repository.py", type: "file" },
				],
			},
			{
				name: "api",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "routes.py", type: "file" },
					{ name: "middleware.py", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "helpers.py", type: "file" },
					{ name: "validators.py", type: "file" },
					{ name: "decorators.py", type: "file" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "conftest.py", type: "file" },
			{
				name: "unit",
				type: "folder",
				children: [
					{ name: "test_services.py", type: "file" },
					{ name: "test_models.py", type: "file" },
				],
			},
			{
				name: "integration",
				type: "folder",
				children: [
					{ name: "test_api.py", type: "file" },
					{ name: "test_database.py", type: "file" },
				],
			},
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "api.md", type: "file" },
			{ name: "installation.md", type: "file" },
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "migrate.py", type: "file" },
			{ name: "seed_data.py", type: "file" },
		],
	},
	{ name: "requirements.txt", type: "file" },
	{ name: "requirements-dev.txt", type: "file" },
	{ name: "setup.py", type: "file" },
	{ name: "pyproject.toml", type: "file" },
	{ name: ".env.example", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all Python application code.",
	},
	{
		title: "src/__init__.py",
		icon: "file",
		description:
			"Makes the src directory a Python package, allowing imports from it.",
	},
	{
		title: "src/main.py",
		icon: "file",
		description:
			"The entry point of the Python application where execution begins.",
	},
	{
		title: "src/modules/",
		icon: "folder",
		description:
			"Contains modular Python files that can be imported and reused.",
	},
	{
		title: "modules/utils.py",
		icon: "file",
		description:
			"Utility functions and helper methods used throughout the application.",
	},
	{
		title: "requirements.txt",
		icon: "file",
		description:
			"Lists all Python dependencies required to run the application.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/core/",
		icon: "folder",
		description:
			"Contains core functionality and configuration for the application.",
	},
	{
		title: "core/config.py",
		icon: "file",
		description:
			"Configuration settings and environment variable management.",
	},
	{
		title: "core/database.py",
		icon: "file",
		description:
			"Database connection and configuration setup.",
	},
	{
		title: "src/models/",
		icon: "folder",
		description:
			"Contains data model classes that represent business entities.",
	},
	{
		title: "models/user.py",
		icon: "file",
		description:
			"User model class defining user data structure and methods.",
	},
	{
		title: "src/services/",
		icon: "folder",
		description:
			"Contains business logic and service layer implementations.",
	},
	{
		title: "services/user_service.py",
		icon: "file",
		description:
			"Service class handling user-related business operations.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Contains unit tests and testing utilities for the application.",
	},
	{
		title: "setup.py",
		icon: "file",
		description:
			"Package setup script for installing the application as a Python package.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "core/exceptions.py",
		icon: "file",
		description:
			"Custom exception classes for handling application-specific errors.",
	},
	{
		title: "core/logging.py",
		icon: "file",
		description:
			"Logging configuration and setup for application monitoring.",
	},
	{
		title: "src/repositories/",
		icon: "folder",
		description:
			"Data access layer implementing the repository pattern for database operations.",
	},
	{
		title: "repositories/user_repository.py",
		icon: "file",
		description:
			"Repository class for user data access and database operations.",
	},
	{
		title: "src/api/",
		icon: "folder",
		description:
			"API layer containing routes and HTTP request handling.",
	},
	{
		title: "api/routes.py",
		icon: "file",
		description:
			"API route definitions and endpoint handlers.",
	},
	{
		title: "api/middleware.py",
		icon: "file",
		description:
			"Middleware functions for request processing and authentication.",
	},
	{
		title: "utils/decorators.py",
		icon: "file",
		description:
			"Custom decorators for cross-cutting concerns like authentication and logging.",
	},
	{
		title: "tests/conftest.py",
		icon: "file",
		description:
			"Pytest configuration and shared test fixtures.",
	},
	{
		title: "tests/unit/",
		icon: "folder",
		description:
			"Unit tests for individual components and functions.",
	},
	{
		title: "tests/integration/",
		icon: "folder",
		description:
			"Integration tests for testing component interactions.",
	},
	{
		title: "docs/",
		icon: "folder",
		description:
			"Project documentation including API docs and installation guides.",
	},
	{
		title: "scripts/",
		icon: "folder",
		description:
			"Utility scripts for database migrations, data seeding, and maintenance.",
	},
	{
		title: "pyproject.toml",
		icon: "file",
		description:
			"Modern Python project configuration file for build tools and dependencies.",
	},
	{
		title: "requirements-dev.txt",
		icon: "file",
		description:
			"Development dependencies separate from production requirements.",
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
	{ label: "Python", href: "/python" },
] as const;

export default function PythonStructurePage() {
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
				title="Python Project Structure"
				description="A scalable and maintainable folder structure for Python applications"
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