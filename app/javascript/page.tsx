import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "JavaScript Project Structure",
	description:
		"A scalable and maintainable folder structure for JavaScript applications",
	openGraph: {
		title: "JavaScript Project Structure",
		description:
			"Learn how to structure your JavaScript project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/javascript",
				width: 1200,
				height: 630,
				alt: "JavaScript Project Structure Overview",
			},
		],
		url: "/javascript",
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
				name: "utils",
				type: "folder",
				children: [
					{ name: "helpers.js", type: "file" },
					{ name: "constants.js", type: "file" },
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
				name: "components",
				type: "folder",
				children: [
					{ name: "Header.js", type: "file" },
					{ name: "Footer.js", type: "file" },
				],
			},
			{
				name: "modules",
				type: "folder",
				children: [
					{ name: "auth.js", type: "file" },
					{ name: "api.js", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "helpers.js", type: "file" },
					{ name: "constants.js", type: "file" },
					{ name: "validation.js", type: "file" },
				],
			},
			{
				name: "styles",
				type: "folder",
				children: [
					{ name: "main.css", type: "file" },
					{ name: "components.css", type: "file" },
				],
			},
		],
	},
	{
		name: "public",
		type: "folder",
		children: [
			{ name: "index.html", type: "file" },
			{ name: "favicon.ico", type: "file" },
		],
	},
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
				name: "components",
				type: "folder",
				children: [
					{
						name: "ui",
						type: "folder",
						children: [
							{ name: "Button.js", type: "file" },
							{ name: "Modal.js", type: "file" },
						],
					},
					{
						name: "layout",
						type: "folder",
						children: [
							{ name: "Header.js", type: "file" },
							{ name: "Footer.js", type: "file" },
						],
					},
				],
			},
			{
				name: "modules",
				type: "folder",
				children: [
					{
						name: "auth",
						type: "folder",
						children: [
							{ name: "authService.js", type: "file" },
							{ name: "authHelpers.js", type: "file" },
						],
					},
					{
						name: "api",
						type: "folder",
						children: [
							{ name: "apiClient.js", type: "file" },
							{ name: "endpoints.js", type: "file" },
						],
					},
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "helpers.js", type: "file" },
					{ name: "constants.js", type: "file" },
					{ name: "validation.js", type: "file" },
					{ name: "formatters.js", type: "file" },
				],
			},
			{
				name: "styles",
				type: "folder",
				children: [
					{ name: "main.css", type: "file" },
					{ name: "variables.css", type: "file" },
					{ name: "components.css", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "images", type: "folder" },
					{ name: "fonts", type: "folder" },
					{ name: "icons", type: "folder" },
				],
			},
		],
	},
	{
		name: "public",
		type: "folder",
		children: [
			{ name: "index.html", type: "file" },
			{ name: "favicon.ico", type: "file" },
			{ name: "manifest.json", type: "file" },
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
			{ name: "components.md", type: "file" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "webpack.config.js", type: "file" },
	{ name: "babel.config.js", type: "file" },
	{ name: ".eslintrc.js", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all JavaScript application code.",
	},
	{
		title: "src/index.js",
		icon: "file",
		description:
			"The entry point of the JavaScript application where execution begins.",
	},
	{
		title: "src/app.js",
		icon: "file",
		description:
			"The main application file containing core application logic and initialization.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"Contains utility functions and helper methods used throughout the application.",
	},
	{
		title: "utils/helpers.js",
		icon: "file",
		description:
			"General helper functions for common operations and data manipulation.",
	},
	{
		title: "utils/constants.js",
		icon: "file",
		description:
			"Application-wide constants and configuration values.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/components/",
		icon: "folder",
		description:
			"Contains reusable JavaScript components or modules for UI elements.",
	},
	{
		title: "components/Header.js",
		icon: "file",
		description:
			"Header component containing navigation and branding elements.",
	},
	{
		title: "src/modules/",
		icon: "folder",
		description:
			"Contains feature-specific modules that encapsulate related functionality.",
	},
	{
		title: "modules/auth.js",
		icon: "file",
		description:
			"Authentication module handling login, logout, and user session management.",
	},
	{
		title: "modules/api.js",
		icon: "file",
		description:
			"API module for making HTTP requests and handling server communication.",
	},
	{
		title: "src/styles/",
		icon: "folder",
		description:
			"Contains CSS files for styling the application components and layout.",
	},
	{
		title: "public/",
		icon: "folder",
		description:
			"Contains static assets that are served directly by the web server.",
	},
	{
		title: "public/index.html",
		icon: "file",
		description:
			"The main HTML file that serves as the entry point for the web application.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/components/ui/",
		icon: "folder",
		description:
			"Contains basic UI components that form the foundation of the application's design system.",
	},
	{
		title: "components/ui/Button.js",
		icon: "file",
		description:
			"Reusable button component with consistent styling and behavior.",
	},
	{
		title: "src/components/layout/",
		icon: "folder",
		description:
			"Contains layout components that define the structure and arrangement of pages.",
	},
	{
		title: "src/modules/auth/",
		icon: "folder",
		description:
			"Authentication module organized with separate files for services and helpers.",
	},
	{
		title: "modules/auth/authService.js",
		icon: "file",
		description:
			"Service class handling authentication logic and API calls.",
	},
	{
		title: "src/modules/api/",
		icon: "folder",
		description:
			"API module with organized structure for client and endpoint management.",
	},
	{
		title: "modules/api/apiClient.js",
		icon: "file",
		description:
			"HTTP client configuration and request/response interceptors.",
	},
	{
		title: "utils/formatters.js",
		icon: "file",
		description:
			"Utility functions for formatting dates, numbers, and other display values.",
	},
	{
		title: "src/assets/",
		icon: "folder",
		description:
			"Contains static assets like images, fonts, and icons organized by type.",
	},
	{
		title: "styles/variables.css",
		icon: "file",
		description:
			"CSS custom properties (variables) for consistent theming and styling.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Contains unit and integration tests organized by test type.",
	},
	{
		title: "webpack.config.js",
		icon: "file",
		description:
			"Webpack configuration for bundling and building the application.",
	},
	{
		title: "babel.config.js",
		icon: "file",
		description:
			"Babel configuration for JavaScript transpilation and modern syntax support.",
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
	{ label: "JavaScript", href: "/javascript" },
] as const;

export default function JavaScriptStructurePage() {
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
				title="JavaScript Project Structure"
				description="A scalable and maintainable folder structure for JavaScript applications"
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