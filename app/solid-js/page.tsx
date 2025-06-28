import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Solid.js Project Structure",
	description:
		"A scalable and maintainable folder structure for Solid.js applications",
	openGraph: {
		title: "Solid.js Project Structure",
		description:
			"Learn how to structure your Solid.js project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/solid-js",
				width: 1200,
				height: 630,
				alt: "Solid.js Project Structure Overview",
			},
		],
		url: "/solid-js",
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
			{ name: "index.tsx", type: "file" },
			{ name: "App.tsx", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Counter.tsx", type: "file" },
					{ name: "Header.tsx", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "logo.svg", type: "file" },
					{ name: "index.css", type: "file" },
				],
			},
		],
	},
	{ name: "index.html", type: "file" },
	{ name: "vite.config.ts", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.tsx", type: "file" },
			{ name: "App.tsx", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Counter.tsx", type: "file" },
					{ name: "Header.tsx", type: "file" },
					{ name: "Footer.tsx", type: "file" },
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{ name: "Home.tsx", type: "file" },
					{ name: "About.tsx", type: "file" },
					{ name: "Contact.tsx", type: "file" },
				],
			},
			{
				name: "stores",
				type: "folder",
				children: [
					{ name: "counter.ts", type: "file" },
					{ name: "user.ts", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "logo.svg", type: "file" },
					{ name: "index.css", type: "file" },
					{ name: "variables.css", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "api.ts", type: "file" },
					{ name: "helpers.ts", type: "file" },
				],
			},
		],
	},
	{ name: "index.html", type: "file" },
	{ name: "vite.config.ts", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.tsx", type: "file" },
			{ name: "App.tsx", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{
						name: "ui",
						type: "folder",
						children: [
							{ name: "Button.tsx", type: "file" },
							{ name: "Input.tsx", type: "file" },
							{ name: "Modal.tsx", type: "file" },
						],
					},
					{
						name: "layout",
						type: "folder",
						children: [
							{ name: "Header.tsx", type: "file" },
							{ name: "Footer.tsx", type: "file" },
							{ name: "Sidebar.tsx", type: "file" },
						],
					},
					{
						name: "features",
						type: "folder",
						children: [
							{ name: "AuthForm.tsx", type: "file" },
							{ name: "UserProfile.tsx", type: "file" },
						],
					},
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{ name: "Home.tsx", type: "file" },
					{ name: "About.tsx", type: "file" },
					{ name: "Dashboard.tsx", type: "file" },
					{ name: "Settings.tsx", type: "file" },
				],
			},
			{
				name: "stores",
				type: "folder",
				children: [
					{ name: "counter.ts", type: "file" },
					{ name: "user.ts", type: "file" },
					{ name: "theme.ts", type: "file" },
					{ name: "settings.ts", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{
						name: "styles",
						type: "folder",
						children: [
							{ name: "index.css", type: "file" },
							{ name: "variables.css", type: "file" },
							{ name: "components.css", type: "file" },
						],
					},
					{
						name: "images",
						type: "folder",
						children: [
							{ name: "logo.svg", type: "file" },
						],
					},
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "api.ts", type: "file" },
					{ name: "helpers.ts", type: "file" },
					{ name: "validation.ts", type: "file" },
					{ name: "formatting.ts", type: "file" },
				],
			},
			{
				name: "types",
				type: "folder",
				children: [
					{ name: "api.ts", type: "file" },
					{ name: "user.ts", type: "file" },
					{ name: "common.ts", type: "file" },
				],
			},
			{
				name: "hooks",
				type: "folder",
				children: [
					{ name: "useAuth.ts", type: "file" },
					{ name: "useFetch.ts", type: "file" },
					{ name: "useLocalStorage.ts", type: "file" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "components", type: "folder" },
			{ name: "utils", type: "folder" },
			{ name: "setup.ts", type: "file" },
		],
	},
	{ name: "index.html", type: "file" },
	{ name: "vite.config.ts", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: ".env", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all Solid.js application code and assets.",
	},
	{
		title: "src/index.tsx",
		icon: "file",
		description:
			"The entry point of the Solid.js application where the app is rendered to the DOM using Solid's render function.",
	},
	{
		title: "src/App.tsx",
		icon: "file",
		description:
			"The root component of the application that serves as the main container for all other components.",
	},
	{
		title: "src/components/",
		icon: "folder",
		description:
			"Contains reusable Solid.js components that can be imported and used throughout the application.",
	},
	{
		title: "components/Counter.tsx",
		icon: "file",
		description:
			"A sample component demonstrating Solid.js reactivity with signals and effects.",
	},
	{
		title: "components/Header.tsx",
		icon: "file",
		description:
			"A header component typically used for navigation and branding across the application.",
	},
	{
		title: "src/assets/",
		icon: "folder",
		description:
			"Contains static assets like stylesheets, images, and other resources used throughout the application.",
	},
	{
		title: "assets/logo.svg",
		icon: "file",
		description: "The application logo in SVG format for scalability.",
	},
	{
		title: "assets/index.css",
		icon: "file",
		description: "Global CSS styles that apply to the entire application.",
	},
	{
		title: "index.html",
		icon: "file",
		description:
			"The main HTML file that serves as the entry point for the application in the browser.",
	},
	{
		title: "vite.config.ts",
		icon: "file",
		description:
			"Configuration file for Vite, the build tool used with Solid.js for development and production builds.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"Defines project metadata, dependencies, and scripts for running and building the application.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all Solid.js application code, now organized into more specific folders.",
	},
	{
		title: "src/index.tsx",
		icon: "file",
		description:
			"The entry point of the Solid.js application where the app is rendered to the DOM using Solid's render function.",
	},
	{
		title: "src/App.tsx",
		icon: "file",
		description:
			"The root component that typically includes routing logic and global providers for the application.",
	},
	{
		title: "src/components/",
		icon: "folder",
		description:
			"Contains reusable Solid.js components that can be shared across different pages and features.",
	},
	{
		title: "src/pages/",
		icon: "folder",
		description:
			"Contains components that represent entire pages or views, typically corresponding to different routes.",
	},
	{
		title: "pages/Home.tsx",
		icon: "file",
		description:
			"The home page component, usually the landing page of the application.",
	},
	{
		title: "pages/About.tsx",
		icon: "file",
		description:
			"The about page component containing information about the application or organization.",
	},
	{
		title: "src/stores/",
		icon: "folder",
		description:
			"Contains Solid.js stores for global state management using signals and stores.",
	},
	{
		title: "stores/counter.ts",
		icon: "file",
		description:
			"A store managing counter state, demonstrating Solid.js reactive primitives.",
	},
	{
		title: "stores/user.ts",
		icon: "file",
		description:
			"A store for managing user-related state such as authentication and profile data.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"Contains utility functions and helper methods used throughout the application.",
	},
	{
		title: "utils/api.ts",
		icon: "file",
		description:
			"Utility functions for making API calls and handling HTTP requests.",
	},
	{
		title: "utils/helpers.ts",
		icon: "file",
		description:
			"General helper functions for common operations like data formatting and validation.",
	},
	{
		title: "assets/variables.css",
		icon: "file",
		description:
			"CSS custom properties (variables) for consistent theming and styling across the application.",
	},
	{
		title: "tsconfig.json",
		icon: "file",
		description:
			"TypeScript configuration file for type checking and compilation settings.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/components/ui/",
		icon: "folder",
		description:
			"Contains base UI components that form the foundation of the application's design system.",
	},
	{
		title: "components/ui/Button.tsx",
		icon: "file",
		description:
			"A reusable button component with various styles and states for consistent UI.",
	},
	{
		title: "components/ui/Input.tsx",
		icon: "file",
		description:
			"A form input component with validation and styling capabilities.",
	},
	{
		title: "components/ui/Modal.tsx",
		icon: "file",
		description:
			"A modal component for displaying overlay content and dialogs.",
	},
	{
		title: "src/components/layout/",
		icon: "folder",
		description:
			"Contains layout components that define the structure and arrangement of pages.",
	},
	{
		title: "src/components/features/",
		icon: "folder",
		description:
			"Contains complex components that implement specific business logic and features.",
	},
	{
		title: "src/pages/",
		icon: "folder",
		description:
			"Contains all page components representing different views in the application.",
	},
	{
		title: "pages/Dashboard.tsx",
		icon: "file",
		description:
			"A dashboard page component typically showing user-specific data and analytics.",
	},
	{
		title: "pages/Settings.tsx",
		icon: "file",
		description:
			"A settings page component for user preferences and application configuration.",
	},
	{
		title: "src/stores/",
		icon: "folder",
		description:
			"Contains Solid.js stores for managing global application state using reactive primitives.",
	},
	{
		title: "stores/theme.ts",
		icon: "file",
		description:
			"A store for managing theme preferences and dark/light mode switching.",
	},
	{
		title: "stores/settings.ts",
		icon: "file",
		description:
			"A store for managing application-wide settings and user preferences.",
	},
	{
		title: "src/assets/styles/",
		icon: "folder",
		description:
			"Organized CSS files for different aspects of the application styling.",
	},
	{
		title: "assets/styles/components.css",
		icon: "file",
		description:
			"CSS styles specific to components, following a modular approach to styling.",
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
		title: "types/user.ts",
		icon: "file",
		description:
			"Type definitions for user-related data structures and interfaces.",
	},
	{
		title: "types/common.ts",
		icon: "file",
		description:
			"Common type definitions used across multiple parts of the application.",
	},
	{
		title: "src/hooks/",
		icon: "folder",
		description:
			"Contains custom hooks (composable functions) that encapsulate reusable logic.",
	},
	{
		title: "hooks/useAuth.ts",
		icon: "file",
		description:
			"A custom hook for handling authentication logic and state management.",
	},
	{
		title: "hooks/useFetch.ts",
		icon: "file",
		description:
			"A custom hook for making HTTP requests with loading and error states.",
	},
	{
		title: "hooks/useLocalStorage.ts",
		icon: "file",
		description:
			"A custom hook for managing localStorage with reactive updates.",
	},
	{
		title: "src/utils/validation.ts",
		icon: "file",
		description:
			"Utility functions for form validation and data validation throughout the application.",
	},
	{
		title: "src/utils/formatting.ts",
		icon: "file",
		description:
			"Utility functions for formatting dates, numbers, and other display values.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Contains test files for components, utilities, and other application logic.",
	},
	{
		title: "tests/setup.ts",
		icon: "file",
		description:
			"Test setup configuration for testing framework initialization and global test utilities.",
	},
	{
		title: ".env",
		icon: "file",
		description:
			"Environment variables file for storing configuration values and API keys.",
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
	{ label: "Solid.js", href: "/solid-js" },
] as const;

export default function SolidJsStructurePage() {
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
				title="Solid.js Project Structure"
				description="A scalable and maintainable folder structure for Solid.js applications"
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