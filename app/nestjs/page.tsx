import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "NestJS Project Structure",
	description:
		"A scalable and maintainable folder structure for NestJS applications",
	openGraph: {
		title: "NestJS Project Structure",
		description:
			"Learn how to structure your NestJS project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/nestjs",
				width: 1200,
				height: 630,
				alt: "NestJS Project Structure Overview",
			},
		],
		url: "/nestjs",
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
			{ name: "main.ts", type: "file" },
			{ name: "app.module.ts", type: "file" },
			{ name: "app.controller.ts", type: "file" },
			{ name: "app.service.ts", type: "file" },
			{
				name: "users",
				type: "folder",
				children: [
					{ name: "users.module.ts", type: "file" },
					{ name: "users.controller.ts", type: "file" },
					{ name: "users.service.ts", type: "file" },
				],
			},
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "nest-cli.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "main.ts", type: "file" },
			{ name: "app.module.ts", type: "file" },
			{ name: "app.controller.ts", type: "file" },
			{ name: "app.service.ts", type: "file" },
			{
				name: "users",
				type: "folder",
				children: [
					{ name: "users.module.ts", type: "file" },
					{ name: "users.controller.ts", type: "file" },
					{ name: "users.service.ts", type: "file" },
					{ name: "dto", type: "folder" },
					{ name: "entities", type: "folder" },
				],
			},
			{
				name: "auth",
				type: "folder",
				children: [
					{ name: "auth.module.ts", type: "file" },
					{ name: "auth.controller.ts", type: "file" },
					{ name: "auth.service.ts", type: "file" },
					{ name: "guards", type: "folder" },
				],
			},
			{
				name: "common",
				type: "folder",
				children: [
					{ name: "decorators", type: "folder" },
					{ name: "filters", type: "folder" },
					{ name: "guards", type: "folder" },
					{ name: "interceptors", type: "folder" },
				],
			},
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "nest-cli.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: ".env", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "main.ts", type: "file" },
			{ name: "app.module.ts", type: "file" },
			{ name: "app.controller.ts", type: "file" },
			{ name: "app.service.ts", type: "file" },
			{
				name: "modules",
				type: "folder",
				children: [
					{
						name: "users",
						type: "folder",
						children: [
							{ name: "users.module.ts", type: "file" },
							{ name: "users.controller.ts", type: "file" },
							{ name: "users.service.ts", type: "file" },
							{ name: "dto", type: "folder" },
							{ name: "entities", type: "folder" },
							{ name: "repositories", type: "folder" },
						],
					},
					{
						name: "auth",
						type: "folder",
						children: [
							{ name: "auth.module.ts", type: "file" },
							{ name: "auth.controller.ts", type: "file" },
							{ name: "auth.service.ts", type: "file" },
							{ name: "strategies", type: "folder" },
							{ name: "guards", type: "folder" },
						],
					},
				],
			},
			{
				name: "common",
				type: "folder",
				children: [
					{ name: "decorators", type: "folder" },
					{ name: "filters", type: "folder" },
					{ name: "guards", type: "folder" },
					{ name: "interceptors", type: "folder" },
					{ name: "pipes", type: "folder" },
					{ name: "middleware", type: "folder" },
				],
			},
			{
				name: "config",
				type: "folder",
				children: [
					{ name: "database.config.ts", type: "file" },
					{ name: "app.config.ts", type: "file" },
				],
			},
			{
				name: "database",
				type: "folder",
				children: [
					{ name: "migrations", type: "folder" },
					{ name: "seeds", type: "folder" },
				],
			},
		],
	},
	{
		name: "test",
		type: "folder",
		children: [
			{ name: "app.e2e-spec.ts", type: "file" },
			{ name: "jest-e2e.json", type: "file" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "nest-cli.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: "tsconfig.build.json", type: "file" },
	{ name: ".env", type: "file" },
	{ name: ".env.example", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all NestJS application code.",
	},
	{
		title: "src/main.ts",
		icon: "file",
		description:
			"The entry point of the NestJS application where the app is bootstrapped.",
	},
	{
		title: "src/app.module.ts",
		icon: "file",
		description:
			"The root module that organizes the application structure and imports other modules.",
	},
	{
		title: "src/app.controller.ts",
		icon: "file",
		description:
			"The main controller handling basic routes and application-level endpoints.",
	},
	{
		title: "src/app.service.ts",
		icon: "file",
		description:
			"The main service containing business logic for the application controller.",
	},
	{
		title: "src/users/",
		icon: "folder",
		description:
			"A feature module containing all user-related functionality.",
	},
	{
		title: "users/users.module.ts",
		icon: "file",
		description:
			"The users module that organizes user-related providers and controllers.",
	},
	{
		title: "users/users.controller.ts",
		icon: "file",
		description:
			"Controller handling HTTP requests for user-related operations.",
	},
	{
		title: "users/users.service.ts",
		icon: "file",
		description:
			"Service containing business logic for user operations.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/users/dto/",
		icon: "folder",
		description:
			"Data Transfer Objects for validating and typing request/response data.",
	},
	{
		title: "src/users/entities/",
		icon: "folder",
		description:
			"Database entities defining the structure of user data in the database.",
	},
	{
		title: "src/auth/",
		icon: "folder",
		description:
			"Authentication module handling login, registration, and security.",
	},
	{
		title: "auth/guards/",
		icon: "folder",
		description:
			"Authentication guards for protecting routes and checking permissions.",
	},
	{
		title: "src/common/",
		icon: "folder",
		description:
			"Shared utilities, decorators, and common functionality used across modules.",
	},
	{
		title: "common/decorators/",
		icon: "folder",
		description:
			"Custom decorators for enhancing controllers and methods.",
	},
	{
		title: "common/filters/",
		icon: "folder",
		description:
			"Exception filters for handling errors and formatting error responses.",
	},
	{
		title: "common/interceptors/",
		icon: "folder",
		description:
			"Interceptors for transforming requests/responses and adding cross-cutting concerns.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/modules/",
		icon: "folder",
		description:
			"Organized feature modules following domain-driven design principles.",
	},
	{
		title: "modules/users/repositories/",
		icon: "folder",
		description:
			"Repository pattern implementation for data access layer abstraction.",
	},
	{
		title: "modules/auth/strategies/",
		icon: "folder",
		description:
			"Passport strategies for different authentication methods (JWT, Local, etc.).",
	},
	{
		title: "src/common/pipes/",
		icon: "folder",
		description:
			"Validation pipes for transforming and validating input data.",
	},
	{
		title: "src/common/middleware/",
		icon: "folder",
		description:
			"Custom middleware for request processing and cross-cutting concerns.",
	},
	{
		title: "src/config/",
		icon: "folder",
		description:
			"Configuration modules for managing environment-specific settings.",
	},
	{
		title: "config/database.config.ts",
		icon: "file",
		description:
			"Database configuration including connection settings and TypeORM setup.",
	},
	{
		title: "src/database/",
		icon: "folder",
		description:
			"Database-related files including migrations and seed data.",
	},
	{
		title: "database/migrations/",
		icon: "folder",
		description:
			"Database migration files for version control of database schema.",
	},
	{
		title: "test/",
		icon: "folder",
		description:
			"End-to-end tests and testing configuration for the application.",
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
	{ label: "NestJS", href: "/nestjs" },
] as const;

export default function NestJsStructurePage() {
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
				title="NestJS Project Structure"
				description="A scalable and maintainable folder structure for NestJS applications"
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