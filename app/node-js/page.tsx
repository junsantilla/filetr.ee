import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Node.js Project Structure",
	description:
		"A scalable and maintainable folder structure for Node.js applications",
	openGraph: {
		title: "Node.js Project Structure",
		description:
			"Learn how to structure your Node.js project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/node-js",
				width: 1200,
				height: 630,
				alt: "Node.js Project Structure Overview",
			},
		],
		url: "/node-js",
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
			{ name: "index.js", type: "file" },
			{ name: "app.js", type: "file" },
			{
				name: "routes",
				type: "folder",
				children: [
					{ name: "users.js", type: "file" },
					{ name: "auth.js", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "User.js", type: "file" },
				],
			},
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.js", type: "file" },
			{ name: "app.js", type: "file" },
			{
				name: "controllers",
				type: "folder",
				children: [
					{ name: "userController.js", type: "file" },
					{ name: "authController.js", type: "file" },
				],
			},
			{
				name: "routes",
				type: "folder",
				children: [
					{ name: "users.js", type: "file" },
					{ name: "auth.js", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "User.js", type: "file" },
					{ name: "Post.js", type: "file" },
				],
			},
			{
				name: "middleware",
				type: "folder",
				children: [
					{ name: "auth.js", type: "file" },
					{ name: "validation.js", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "database.js", type: "file" },
					{ name: "helpers.js", type: "file" },
				],
			},
		],
	},
	{
		name: "config",
		type: "folder",
		children: [
			{ name: "database.js", type: "file" },
			{ name: "env.js", type: "file" },
		],
	},
	{ name: ".env", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.js", type: "file" },
			{ name: "app.js", type: "file" },
			{
				name: "controllers",
				type: "folder",
				children: [
					{ name: "userController.js", type: "file" },
					{ name: "authController.js", type: "file" },
					{ name: "postController.js", type: "file" },
				],
			},
			{
				name: "routes",
				type: "folder",
				children: [
					{ name: "index.js", type: "file" },
					{ name: "users.js", type: "file" },
					{ name: "auth.js", type: "file" },
					{ name: "posts.js", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "User.js", type: "file" },
					{ name: "Post.js", type: "file" },
					{ name: "Comment.js", type: "file" },
				],
			},
			{
				name: "middleware",
				type: "folder",
				children: [
					{ name: "auth.js", type: "file" },
					{ name: "validation.js", type: "file" },
					{ name: "errorHandler.js", type: "file" },
					{ name: "rateLimiter.js", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "userService.js", type: "file" },
					{ name: "emailService.js", type: "file" },
					{ name: "authService.js", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "database.js", type: "file" },
					{ name: "helpers.js", type: "file" },
					{ name: "logger.js", type: "file" },
					{ name: "validation.js", type: "file" },
				],
			},
		],
	},
	{
		name: "config",
		type: "folder",
		children: [
			{ name: "database.js", type: "file" },
			{ name: "env.js", type: "file" },
			{ name: "cors.js", type: "file" },
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "unit", type: "folder" },
			{ name: "integration", type: "folder" },
			{ name: "setup.js", type: "file" },
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "api.md", type: "file" },
		],
	},
	{ name: ".env", type: "file" },
	{ name: ".env.example", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all Node.js application code.",
	},
	{
		title: "src/index.js",
		icon: "file",
		description:
			"The entry point of the Node.js application where the server is started.",
	},
	{
		title: "src/app.js",
		icon: "file",
		description:
			"The main application file where Express is configured and middleware is set up.",
	},
	{
		title: "src/routes/",
		icon: "folder",
		description:
			"Contains route definitions that handle different API endpoints.",
	},
	{
		title: "routes/users.js",
		icon: "file",
		description:
			"Route handlers for user-related endpoints like registration and profile management.",
	},
	{
		title: "src/models/",
		icon: "folder",
		description:
			"Contains data models that define the structure of database entities.",
	},
	{
		title: "models/User.js",
		icon: "file",
		description:
			"User model defining the schema and methods for user data.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/controllers/",
		icon: "folder",
		description:
			"Contains controller functions that handle business logic for different routes.",
	},
	{
		title: "controllers/userController.js",
		icon: "file",
		description:
			"Controller handling user-related operations like CRUD operations.",
	},
	{
		title: "src/middleware/",
		icon: "folder",
		description:
			"Contains middleware functions that process requests before they reach controllers.",
	},
	{
		title: "middleware/auth.js",
		icon: "file",
		description:
			"Authentication middleware for protecting routes and verifying tokens.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"Contains utility functions and helper methods used throughout the application.",
	},
	{
		title: "utils/database.js",
		icon: "file",
		description:
			"Database connection and configuration utilities.",
	},
	{
		title: "config/",
		icon: "folder",
		description:
			"Contains configuration files for different aspects of the application.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/services/",
		icon: "folder",
		description:
			"Contains service layer that handles complex business logic separate from controllers.",
	},
	{
		title: "services/userService.js",
		icon: "file",
		description:
			"Service handling user-related business logic and data operations.",
	},
	{
		title: "services/emailService.js",
		icon: "file",
		description:
			"Service for handling email sending and email-related operations.",
	},
	{
		title: "middleware/errorHandler.js",
		icon: "file",
		description:
			"Global error handling middleware for catching and processing errors.",
	},
	{
		title: "middleware/rateLimiter.js",
		icon: "file",
		description:
			"Rate limiting middleware to prevent abuse and control API usage.",
	},
	{
		title: "utils/logger.js",
		icon: "file",
		description:
			"Logging utility for tracking application events and debugging.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Contains unit and integration tests for the application.",
	},
	{
		title: "docs/",
		icon: "folder",
		description:
			"Contains API documentation and other project documentation.",
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
	{ label: "Node.js", href: "/node-js" },
] as const;

export default function NodeJsStructurePage() {
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
				title="Node.js Project Structure"
				description="A scalable and maintainable folder structure for Node.js applications"
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