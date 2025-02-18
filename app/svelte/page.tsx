import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Svelte Project Structure",
	description:
		"A scalable and maintainable folder structure for Svelte applications",
	openGraph: {
		title: "Svelte Project Structure",
		description:
			"Learn how to structure your Svelte project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/svelte",
				width: 1200,
				height: 630,
				alt: "Svelte Project Structure Overview",
			},
		],
		url: "/svelte",
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
			{
				name: "lib",
				type: "folder",
				children: [
					{ name: "components", type: "folder" },
					{ name: "stores", type: "folder" },
				],
			},
			{
				name: "routes",
				type: "folder",
				children: [
					{ name: "+page.svelte", type: "file" },
					{ name: "+layout.svelte", type: "file" },
					{ name: "+error.svelte", type: "file" },
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
			{
				name: "lib",
				type: "folder",
				children: [
					{
						name: "components",
						type: "folder",
						children: [
							{ name: "Navbar.svelte", type: "file" },
							{ name: "Footer.svelte", type: "file" },
						],
					},
					{
						name: "stores",
						type: "folder",
						children: [
							{ name: "auth.ts", type: "file" },
							{ name: "theme.ts", type: "file" },
						],
					},
					{
						name: "utils",
						type: "folder",
						children: [
							{ name: "api.ts", type: "file" },
							{ name: "validation.ts", type: "file" },
						],
					},
				],
			},
			{
				name: "routes",
				type: "folder",
				children: [
					{ name: "+page.svelte", type: "file" },
					{ name: "+layout.svelte", type: "file" },
					{ name: "+error.svelte", type: "file" },
					{
						name: "dashboard",
						type: "folder",
						children: [
							{ name: "+page.svelte", type: "file" },
							{ name: "+layout.svelte", type: "file" },
						],
					},
				],
			},
		],
	},
	{ name: "static", type: "folder" },
	{ name: "tests", type: "folder" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "lib",
				type: "folder",
				children: [
					{
						name: "components",
						type: "folder",
						children: [
							{ name: "ui", type: "folder" },
							{ name: "features", type: "folder" },
							{ name: "layouts", type: "folder" },
						],
					},
					{
						name: "stores",
						type: "folder",
						children: [
							{ name: "auth.ts", type: "file" },
							{ name: "theme.ts", type: "file" },
							{ name: "settings.ts", type: "file" },
						],
					},
					{
						name: "utils",
						type: "folder",
						children: [
							{ name: "api.ts", type: "file" },
							{ name: "validation.ts", type: "file" },
							{ name: "formatting.ts", type: "file" },
						],
					},
					{
						name: "types",
						type: "folder",
						children: [
							{ name: "api.ts", type: "file" },
							{ name: "models.ts", type: "file" },
						],
					},
				],
			},
			{
				name: "routes",
				type: "folder",
				children: [
					{ name: "+page.svelte", type: "file" },
					{ name: "+layout.svelte", type: "file" },
					{ name: "+error.svelte", type: "file" },
					{
						name: "dashboard",
						type: "folder",
						children: [
							{ name: "+page.svelte", type: "file" },
							{ name: "+layout.svelte", type: "file" },
							{
								name: "settings",
								type: "folder",
								children: [
									{ name: "+page.svelte", type: "file" },
								],
							},
						],
					},
				],
			},
		],
	},
	{ name: "static", type: "folder" },
	{ name: "tests", type: "folder" },
	{ name: "svelte.config.js", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all application code. This is where most of your development work will happen.",
	},
	{
		title: "src/lib",
		icon: "folder",
		description:
			"A special directory in SvelteKit for reusable code that can be imported using the $lib alias. Contains components, utilities, and stores.",
	},
	{
		title: "src/lib/components",
		icon: "folder",
		description:
			"Contains reusable Svelte components that can be shared across multiple pages and features.",
	},
	{
		title: "src/lib/stores",
		icon: "folder",
		description:
			"Contains Svelte stores for state management, using Svelte's built-in store mechanism for reactive state handling.",
	},
	{
		title: "src/routes",
		icon: "folder",
		description:
			"The routes directory that defines your application's page structure using SvelteKit's file-based routing system.",
	},
	{
		title: "+page.svelte",
		icon: "file",
		description:
			"Defines a page component in SvelteKit. The '+' prefix indicates it's a SvelteKit route file.",
	},
	{
		title: "+layout.svelte",
		icon: "file",
		description:
			"Defines a layout component that wraps pages, providing consistent UI elements across routes.",
	},
	{
		title: "+error.svelte",
		icon: "file",
		description:
			"A special component for handling and displaying error states when they occur in your application.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"Defines project metadata, dependencies, and scripts for running, building, and testing the application.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Documentation file containing project information, setup instructions, and other important details.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all application code. This is where most of your development work will happen.",
	},
	{
		title: "src/lib",
		icon: "folder",
		description:
			"A special directory in SvelteKit for reusable code that can be imported using the $lib alias. Contains components, utilities, and stores.",
	},
	{
		title: "src/lib/components",
		icon: "folder",
		description:
			"Contains reusable Svelte components that can be shared across multiple pages and features.",
	},
	{
		title: "src/lib/components/Navbar.svelte",
		icon: "file",
		description:
			"Navigation component typically placed in the layout for consistent site-wide navigation.",
	},
	{
		title: "src/lib/components/Footer.svelte",
		icon: "file",
		description:
			"Footer component containing site-wide information like copyright, links, and contact details.",
	},
	{
		title: "src/lib/stores",
		icon: "folder",
		description:
			"Contains Svelte stores for state management, using Svelte's built-in store mechanism for reactive state handling.",
	},
	{
		title: "src/lib/stores/auth.ts",
		icon: "file",
		description:
			"Store for managing authentication state, user sessions, and related functionality.",
	},
	{
		title: "src/lib/stores/theme.ts",
		icon: "file",
		description:
			"Store for managing theme preferences and application-wide styling states.",
	},
	{
		title: "src/lib/utils",
		icon: "folder",
		description:
			"Contains utility functions and helper methods used throughout the application.",
	},
	{
		title: "src/lib/utils/api.ts",
		icon: "file",
		description:
			"Utility functions for making API calls and handling API-related operations.",
	},
	{
		title: "src/lib/utils/validation.ts",
		icon: "file",
		description:
			"Functions for form validation and data validation throughout the application.",
	},
	{
		title: "src/routes",
		icon: "folder",
		description:
			"The routes directory that defines your application's page structure using SvelteKit's file-based routing system.",
	},
	{
		title: "src/routes/+page.svelte",
		icon: "file",
		description:
			"Defines a page component in SvelteKit. The '+' prefix indicates it's a SvelteKit route file.",
	},
	{
		title: "src/routes/+layout.svelte",
		icon: "file",
		description:
			"Defines a layout component that wraps pages, providing consistent UI elements across routes.",
	},
	{
		title: "src/routes/+error.svelte",
		icon: "file",
		description:
			"A special component for handling and displaying error states when they occur in your application.",
	},
	{
		title: "src/routes/dashboard",
		icon: "folder",
		description:
			"Route directory for dashboard-related pages and functionality.",
	},
	{
		title: "static",
		icon: "folder",
		description:
			"Directory for static assets that will be served directly by the server, such as images and fonts.",
	},
	{
		title: "tests",
		icon: "folder",
		description:
			"Contains test files for components, utilities, and integration tests using testing frameworks like Vitest.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"Defines project metadata, dependencies, and scripts for running, building, and testing the application.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Documentation file containing project information, setup instructions, and other important details.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all application code. This is where most of your development work will happen.",
	},
	{
		title: "src/lib",
		icon: "folder",
		description:
			"A special directory in SvelteKit for reusable code that can be imported using the $lib alias. Contains components, utilities, and stores.",
	},
	{
		title: "src/lib/components",
		icon: "folder",
		description:
			"Contains reusable Svelte components that can be shared across multiple pages and features.",
	},
	{
		title: "src/lib/components/ui",
		icon: "folder",
		description:
			"Contains base UI components like buttons, inputs, and cards that form the foundation of your application's design system.",
	},
	{
		title: "src/lib/components/features",
		icon: "folder",
		description:
			"Contains larger, feature-specific components that combine multiple UI components for specific functionality.",
	},
	{
		title: "src/lib/components/layouts",
		icon: "folder",
		description:
			"Contains different layout components for various sections or types of pages in your application.",
	},
	{
		title: "src/lib/stores",
		icon: "folder",
		description:
			"Contains Svelte stores for state management, using Svelte's built-in store mechanism for reactive state handling.",
	},
	{
		title: "src/lib/stores/auth.ts",
		icon: "file",
		description:
			"Store for managing authentication state, user sessions, and related functionality.",
	},
	{
		title: "src/lib/stores/theme.ts",
		icon: "file",
		description:
			"Store for managing theme preferences and application-wide styling states.",
	},
	{
		title: "src/lib/stores/settings.ts",
		icon: "file",
		description:
			"Store for managing application-wide settings and user preferences.",
	},
	{
		title: "src/lib/utils",
		icon: "folder",
		description:
			"Contains utility functions and helper methods used throughout the application.",
	},
	{
		title: "src/lib/utils/api.ts",
		icon: "file",
		description:
			"Utility functions for making API calls and handling API-related operations.",
	},
	{
		title: "src/lib/utils/validation.ts",
		icon: "file",
		description:
			"Functions for form validation and data validation throughout the application.",
	},
	{
		title: "src/lib/utils/formatting.ts",
		icon: "file",
		description:
			"Utility functions for formatting data, dates, numbers, and other content consistently.",
	},
	{
		title: "src/lib/types",
		icon: "folder",
		description:
			"Contains TypeScript type definitions and interfaces used throughout the application.",
	},
	{
		title: "src/lib/types/api.ts",
		icon: "file",
		description:
			"Type definitions for API requests, responses, and related data structures.",
	},
	{
		title: "src/lib/types/models.ts",
		icon: "file",
		description:
			"Type definitions for data models and business logic interfaces.",
	},
	{
		title: "src/routes",
		icon: "folder",
		description:
			"The routes directory that defines your application's page structure using SvelteKit's file-based routing system.",
	},
	{
		title: "src/routes/+page.svelte",
		icon: "file",
		description:
			"Defines a page component in SvelteKit. The '+' prefix indicates it's a SvelteKit route file.",
	},
	{
		title: "src/routes/+layout.svelte",
		icon: "file",
		description:
			"Defines a layout component that wraps pages, providing consistent UI elements across routes.",
	},
	{
		title: "src/routes/+error.svelte",
		icon: "file",
		description:
			"A special component for handling and displaying error states when they occur in your application.",
	},
	{
		title: "src/routes/dashboard",
		icon: "folder",
		description:
			"Route directory for dashboard-related pages and functionality.",
	},
	{
		title: "src/routes/dashboard/settings",
		icon: "folder",
		description:
			"Route directory specifically for dashboard settings pages and related functionality.",
	},
	{
		title: "static",
		icon: "folder",
		description:
			"Directory for static assets that will be served directly by the server, such as images and fonts.",
	},
	{
		title: "tests",
		icon: "folder",
		description:
			"Contains test files for components, utilities, and integration tests using testing frameworks like Vitest.",
	},
	{
		title: "svelte.config.js",
		icon: "file",
		description:
			"Configuration file for Svelte compiler options and SvelteKit settings.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"Defines project metadata, dependencies, and scripts for running, building, and testing the application.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Documentation file containing project information, setup instructions, and other important details.",
	},
];

const BREADCRUMB_ITEMS = [
	{ label: "Home", href: "/" },
	{ label: "Svelte", href: "/svelte" },
] as const;

export default function SvelteStructurePage() {
	const renderExplanations = (explanations: ExplanationItem[]) => (
		<>
			{explanations.map((item, index) => (
				<div key={index}>
					<h3 className="mb-2 text-2xl text-neutral-950 dark:text-neutral-50">
						<Badge>
							{item.icon === "folder" ? (
								<Folder size={16} className="mr-1" />
							) : (
								<FileText size={16} className="mr-1" />
							)}
							{item.title}
						</Badge>
					</h3>
					<p>{item.description}</p>
				</div>
			))}
		</>
	);

	return (
		<>
			<StructureTemplate
				title="Svelte Project Structure"
				description="A scalable and maintainable folder structure for Svelte applications"
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
