import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "PHP Project Structure",
	description:
		"A scalable and maintainable folder structure for PHP applications",
	openGraph: {
		title: "PHP Project Structure",
		description:
			"Learn how to structure your PHP project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/php",
				width: 1200,
				height: 630,
				alt: "PHP Project Structure Overview",
			},
		],
		url: "/php",
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
			{ name: "index.php", type: "file" },
			{ name: "config.php", type: "file" },
			{
				name: "includes",
				type: "folder",
				children: [
					{ name: "functions.php", type: "file" },
					{ name: "database.php", type: "file" },
				],
			},
		],
	},
	{
		name: "public",
		type: "folder",
		children: [
			{ name: "css", type: "folder" },
			{ name: "js", type: "folder" },
			{ name: "images", type: "folder" },
		],
	},
	{ name: "composer.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.php", type: "file" },
			{ name: "config.php", type: "file" },
			{
				name: "controllers",
				type: "folder",
				children: [
					{ name: "HomeController.php", type: "file" },
					{ name: "UserController.php", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "User.php", type: "file" },
					{ name: "Database.php", type: "file" },
				],
			},
			{
				name: "views",
				type: "folder",
				children: [
					{ name: "home.php", type: "file" },
					{ name: "user", type: "folder" },
					{ name: "layouts", type: "folder" },
				],
			},
			{
				name: "includes",
				type: "folder",
				children: [
					{ name: "functions.php", type: "file" },
					{ name: "database.php", type: "file" },
				],
			},
		],
	},
	{
		name: "public",
		type: "folder",
		children: [
			{ name: "index.php", type: "file" },
			{ name: "css", type: "folder" },
			{ name: "js", type: "folder" },
			{ name: "images", type: "folder" },
		],
	},
	{
		name: "vendor",
		type: "folder",
	},
	{ name: "composer.json", type: "file" },
	{ name: ".htaccess", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "App",
				type: "folder",
				children: [
					{
						name: "Controllers",
						type: "folder",
						children: [
							{ name: "HomeController.php", type: "file" },
							{ name: "UserController.php", type: "file" },
							{ name: "ApiController.php", type: "file" },
						],
					},
					{
						name: "Models",
						type: "folder",
						children: [
							{ name: "User.php", type: "file" },
							{ name: "Post.php", type: "file" },
							{ name: "BaseModel.php", type: "file" },
						],
					},
					{
						name: "Services",
						type: "folder",
						children: [
							{ name: "UserService.php", type: "file" },
							{ name: "EmailService.php", type: "file" },
						],
					},
					{
						name: "Middleware",
						type: "folder",
						children: [
							{ name: "AuthMiddleware.php", type: "file" },
							{ name: "CorsMiddleware.php", type: "file" },
						],
					},
				],
			},
			{
				name: "Core",
				type: "folder",
				children: [
					{ name: "Router.php", type: "file" },
					{ name: "Database.php", type: "file" },
					{ name: "Application.php", type: "file" },
				],
			},
			{
				name: "Config",
				type: "folder",
				children: [
					{ name: "database.php", type: "file" },
					{ name: "app.php", type: "file" },
				],
			},
		],
	},
	{
		name: "resources",
		type: "folder",
		children: [
			{
				name: "views",
				type: "folder",
				children: [
					{ name: "home.php", type: "file" },
					{ name: "layouts", type: "folder" },
					{ name: "partials", type: "folder" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "css", type: "folder" },
					{ name: "js", type: "folder" },
					{ name: "images", type: "folder" },
				],
			},
		],
	},
	{
		name: "public",
		type: "folder",
		children: [
			{ name: "index.php", type: "file" },
			{ name: "assets", type: "folder" },
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "Unit", type: "folder" },
			{ name: "Feature", type: "folder" },
			{ name: "TestCase.php", type: "file" },
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
	{
		name: "vendor",
		type: "folder",
	},
	{ name: "composer.json", type: "file" },
	{ name: "phpunit.xml", type: "file" },
	{ name: ".env.example", type: "file" },
	{ name: ".htaccess", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all PHP application code and logic.",
	},
	{
		title: "index.php",
		icon: "file",
		description:
			"The main entry point of the PHP application where requests are handled.",
	},
	{
		title: "config.php",
		icon: "file",
		description:
			"Configuration file containing application settings and constants.",
	},
	{
		title: "includes/",
		icon: "folder",
		description:
			"Contains reusable PHP files that can be included across the application.",
	},
	{
		title: "includes/functions.php",
		icon: "file",
		description:
			"Common utility functions used throughout the application.",
	},
	{
		title: "public/",
		icon: "folder",
		description:
			"Contains publicly accessible files like CSS, JavaScript, and images.",
	},
	{
		title: "composer.json",
		icon: "file",
		description:
			"Composer configuration file for managing PHP dependencies and autoloading.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "controllers/",
		icon: "folder",
		description:
			"Contains controller classes that handle HTTP requests and coordinate between models and views.",
	},
	{
		title: "models/",
		icon: "folder",
		description:
			"Contains model classes that represent data and business logic.",
	},
	{
		title: "views/",
		icon: "folder",
		description:
			"Contains view templates for rendering HTML output to users.",
	},
	{
		title: "views/layouts/",
		icon: "folder",
		description:
			"Contains layout templates that provide consistent structure across pages.",
	},
	{
		title: "public/index.php",
		icon: "file",
		description:
			"Front controller that routes all requests through the application.",
	},
	{
		title: "vendor/",
		icon: "folder",
		description:
			"Contains third-party dependencies installed via Composer.",
	},
	{
		title: ".htaccess",
		icon: "file",
		description:
			"Apache configuration file for URL rewriting and server directives.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/App/",
		icon: "folder",
		description:
			"Main application namespace containing controllers, models, and services organized by functionality.",
	},
	{
		title: "App/Services/",
		icon: "folder",
		description:
			"Service classes that encapsulate business logic separate from controllers.",
	},
	{
		title: "App/Middleware/",
		icon: "folder",
		description:
			"Middleware classes for processing requests before they reach controllers.",
	},
	{
		title: "src/Core/",
		icon: "folder",
		description:
			"Core framework components like routing, database, and application bootstrap.",
	},
	{
		title: "Core/Router.php",
		icon: "file",
		description:
			"Routing system that maps URLs to controller actions.",
	},
	{
		title: "src/Config/",
		icon: "folder",
		description:
			"Configuration files organized by concern (database, application, etc.).",
	},
	{
		title: "resources/",
		icon: "folder",
		description:
			"Contains views and raw assets that are processed during build.",
	},
	{
		title: "resources/views/partials/",
		icon: "folder",
		description:
			"Reusable view components that can be included in multiple templates.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Contains unit and feature tests organized by test type.",
	},
	{
		title: "database/",
		icon: "folder",
		description:
			"Database-related files including migrations and seed data.",
	},
	{
		title: "phpunit.xml",
		icon: "file",
		description:
			"PHPUnit configuration for running tests and code coverage.",
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
	{ label: "PHP", href: "/php" },
] as const;

export default function PhpStructurePage() {
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
				title="PHP Project Structure"
				description="A scalable and maintainable folder structure for PHP applications"
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