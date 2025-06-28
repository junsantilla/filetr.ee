import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "TypeScript Project Structure",
	description:
		"A scalable and maintainable folder structure for TypeScript applications",
	openGraph: {
		title: "TypeScript Project Structure",
		description:
			"Learn how to structure your TypeScript project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/typescript",
				width: 1200,
				height: 630,
				alt: "TypeScript Project Structure Overview",
			},
		],
		url: "/typescript",
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
			{ name: "index.ts", type: "file" },
			{ name: "app.ts", type: "file" },
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "helpers.ts", type: "file" },
					{ name: "constants.ts", type: "file" },
				],
			},
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.ts", type: "file" },
			{ name: "app.ts", type: "file" },
			{
				name: "controllers",
				type: "folder",
				children: [
					{ name: "UserController.ts", type: "file" },
					{ name: "AuthController.ts", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "User.ts", type: "file" },
					{ name: "Post.ts", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "UserService.ts", type: "file" },
					{ name: "AuthService.ts", type: "file" },
				],
			},
			{
				name: "types",
				type: "folder",
				children: [
					{ name: "api.ts", type: "file" },
					{ name: "common.ts", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "helpers.ts", type: "file" },
					{ name: "constants.ts", type: "file" },
					{ name: "validation.ts", type: "file" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "unit", type: "folder" },
			{ name: "integration", type: "folder" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: ".eslintrc.js", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.ts", type: "file" },
			{ name: "app.ts", type: "file" },
			{
				name: "core",
				type: "folder",
				children: [
					{ name: "config.ts", type: "file" },
					{ name: "database.ts", type: "file" },
					{ name: "logger.ts", type: "file" },
					{ name: "errors.ts", type: "file" },
				],
			},
			{
				name: "modules",
				type: "folder",
				children: [
					{
						name: "users",
						type: "folder",
						children: [
							{ name: "controllers", type: "folder" },
							{ name: "services", type: "folder" },
							{ name: "models", type: "folder" },
							{ name: "types", type: "folder" },
						],
					},
					{
						name: "auth",
						type: "folder",
						children: [
							{ name: "controllers", type: "folder" },
							{ name: "services", type: "folder" },
							{ name: "middleware", type: "folder" },
							{ name: "types", type: "folder" },
						],
					},
				],
			},
			{
				name: "shared",
				type: "folder",
				children: [
					{ name: "types", type: "folder" },
					{ name: "utils", type: "folder" },
					{ name: "constants", type: "folder" },
					{ name: "decorators", type: "folder" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "unit", type: "folder" },
			{ name: "integration", type: "folder" },
			{ name: "e2e", type: "folder" },
			{ name: "fixtures", type: "folder" },
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "api", type: "folder" },
			{ name: "guides", type: "folder" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: "tsconfig.build.json", type: "file" },
	{ name: ".eslintrc.js", type: "file" },
	{ name: ".prettierrc", type: "file" },
	{ name: "jest.config.js", type: "file" },
	{ name: ".env.example", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all TypeScript application code.",
	},
	{
		title: "src/index.ts",
		icon: "file",
		description:
			"The entry point of the TypeScript application where execution begins.",
	},
	{
		title: "src/app.ts",
		icon: "file",
		description:
			"The main application file containing core application logic and setup.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"Contains utility functions and helper methods used throughout the application.",
	},
	{
		title: "utils/helpers.ts",
		icon: "file",
		description:
			"General helper functions for common operations and data manipulation.",
	},
	{
		title: "utils/constants.ts",
		icon: "file",
		description:
			"Application-wide constants and configuration values.",
	},
	{
		title: "tsconfig.json",
		icon: "file",
		description:
			"TypeScript compiler configuration file defining compilation options and paths.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/controllers/",
		icon: "folder",
		description:
			"Contains controller classes that handle HTTP requests and coordinate between services.",
	},
	{
		title: "controllers/UserController.ts",
		icon: "file",
		description:
			"Controller handling user-related HTTP endpoints and request processing.",
	},
	{
		title: "src/models/",
		icon: "folder",
		description:
			"Contains data model classes and interfaces that represent business entities.",
	},
	{
		title: "models/User.ts",
		icon: "file",
		description:
			"User model class or interface defining user data structure and methods.",
	},
	{
		title: "src/services/",
		icon: "folder",
		description:
			"Contains business logic and service layer implementations.",
	},
	{
		title: "services/UserService.ts",
		icon: "file",
		description:
			"Service class containing business logic for user-related operations.",
	},
	{
		title: "src/types/",
		icon: "folder",
		description:
			"Contains TypeScript type definitions and interfaces used throughout the application.",
	},
	{
		title: "types/api.ts",
		icon: "file",
		description:
			"Type definitions for API requests, responses, and related data structures.",
	},
	{
		title: ".eslintrc.js",
		icon: "file",
		description:
			"ESLint configuration for code quality and style enforcement.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/core/",
		icon: "folder",
		description:
			"Contains core infrastructure and foundational code used across the entire application.",
	},
	{
		title: "core/config.ts",
		icon: "file",
		description:
			"Application configuration management and environment variable handling.",
	},
	{
		title: "core/database.ts",
		icon: "file",
		description:
			"Database connection setup and configuration.",
	},
	{
		title: "core/logger.ts",
		icon: "file",
		description:
			"Logging configuration and utilities for application monitoring.",
	},
	{
		title: "core/errors.ts",
		icon: "file",
		description:
			"Custom error classes and error handling utilities.",
	},
	{
		title: "src/modules/",
		icon: "folder",
		description:
			"Feature-based organization where each module contains related functionality.",
	},
	{
		title: "modules/users/",
		icon: "folder",
		description:
			"Complete user module containing all user-related functionality organized by layers.",
	},
	{
		title: "modules/auth/",
		icon: "folder",
		description:
			"Authentication module containing login, registration, and security features.",
	},
	{
		title: "src/shared/",
		icon: "folder",
		description:
			"Shared utilities, types, and components used across multiple modules.",
	},
	{
		title: "shared/decorators/",
		icon: "folder",
		description:
			"Custom TypeScript decorators for cross-cutting concerns like validation and logging.",
	},
	{
		title: "tests/e2e/",
		icon: "folder",
		description:
			"End-to-end tests for testing complete user workflows and system integration.",
	},
	{
		title: "tests/fixtures/",
		icon: "folder",
		description:
			"Test data and mock objects used across different test suites.",
	},
	{
		title: "tsconfig.build.json",
		icon: "file",
		description:
			"TypeScript configuration specifically for production builds.",
	},
	{
		title: ".prettierrc",
		icon: "file",
		description:
			"Prettier configuration for consistent code formatting.",
	},
	{
		title: "jest.config.js",
		icon: "file",
		description:
			"Jest testing framework configuration for unit and integration tests.",
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
	{ label: "TypeScript", href: "/typescript" },
] as const;

export default function TypeScriptStructurePage() {
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
				title="TypeScript Project Structure"
				description="A scalable and maintainable folder structure for TypeScript applications"
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