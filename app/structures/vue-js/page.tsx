import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Vue.js Project Structure",
	description:
		"A scalable and maintainable folder structure for Vue.js applications",
	openGraph: {
		title: "Vue.js Project Structure",
		description:
			"Learn how to structure your Vue.js project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/vue-js",
				width: 1200,
				height: 630,
				alt: "Vue.js Project Structure Overview",
			},
		],
		url: "/structures/vue-js",
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
				name: "components",
				type: "folder",
				children: [
					{ name: "HelloWorld.vue", type: "file" },
					{ name: "TheNavbar.vue", type: "file" },
					{ name: "TheFooter.vue", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "main.css", type: "file" },
					{ name: "logo.svg", type: "file" },
				],
			},
			{ name: "App.vue", type: "file" },
			{ name: "main.ts", type: "file" },
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
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "HelloWorld.vue", type: "file" },
					{ name: "TheNavbar.vue", type: "file" },
					{ name: "TheFooter.vue", type: "file" },
				],
			},
			{
				name: "views",
				type: "folder",
				children: [
					{ name: "HomeView.vue", type: "file" },
					{ name: "AboutView.vue", type: "file" },
					{ name: "DashboardView.vue", type: "file" },
				],
			},
			{
				name: "router",
				type: "folder",
				children: [{ name: "index.ts", type: "file" }],
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
					{ name: "main.css", type: "file" },
					{ name: "logo.svg", type: "file" },
				],
			},
			{
				name: "composables",
				type: "folder",
				children: [
					{ name: "useAuth.ts", type: "file" },
					{ name: "useFetch.ts", type: "file" },
				],
			},
			{ name: "App.vue", type: "file" },
			{ name: "main.ts", type: "file" },
		],
	},
	{ name: "index.html", type: "file" },
	{ name: "vite.config.ts", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "components",
				type: "folder",
				children: [
					{
						name: "ui",
						type: "folder",
						children: [
							{ name: "Button.vue", type: "file" },
							{ name: "Input.vue", type: "file" },
							{ name: "Modal.vue", type: "file" },
						],
					},
					{
						name: "layout",
						type: "folder",
						children: [
							{ name: "TheNavbar.vue", type: "file" },
							{ name: "TheFooter.vue", type: "file" },
							{ name: "TheSidebar.vue", type: "file" },
						],
					},
					{
						name: "features",
						type: "folder",
						children: [
							{ name: "AuthForm.vue", type: "file" },
							{ name: "UserProfile.vue", type: "file" },
						],
					},
				],
			},
			{
				name: "views",
				type: "folder",
				children: [
					{ name: "HomeView.vue", type: "file" },
					{ name: "AboutView.vue", type: "file" },
					{ name: "DashboardView.vue", type: "file" },
				],
			},
			{
				name: "router",
				type: "folder",
				children: [
					{ name: "index.ts", type: "file" },
					{ name: "guards.ts", type: "file" },
				],
			},
			{
				name: "stores",
				type: "folder",
				children: [
					{ name: "counter.ts", type: "file" },
					{ name: "user.ts", type: "file" },
					{ name: "settings.ts", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "styles", type: "folder" },
					{ name: "images", type: "folder" },
				],
			},
			{
				name: "composables",
				type: "folder",
				children: [
					{ name: "useAuth.ts", type: "file" },
					{ name: "useFetch.ts", type: "file" },
					{ name: "useNotification.ts", type: "file" },
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
					{ name: "user.ts", type: "file" },
					{ name: "api.ts", type: "file" },
				],
			},
			{ name: "App.vue", type: "file" },
			{ name: "main.ts", type: "file" },
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "unit", type: "folder" },
			{ name: "e2e", type: "folder" },
		],
	},
	{ name: ".env", type: "file" },
	{ name: ".eslintrc.js", type: "file" },
	{ name: "vite.config.ts", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all Vue.js application code and assets.",
	},
	{
		title: "src/components/",
		icon: "folder",
		description:
			"Contains reusable Vue components that can be imported and used across the application. Following Vue.js best practices, component files use PascalCase names.",
	},
	{
		title: "components/HelloWorld.vue",
		icon: "file",
		description:
			"A sample component demonstrating Vue.js component structure with template, script, and style sections.",
	},
	{
		title: "components/TheNavbar.vue",
		icon: "file",
		description:
			"The main navigation component. The 'The' prefix indicates it's a single-instance component used at the app root level.",
	},
	{
		title: "components/TheFooter.vue",
		icon: "file",
		description:
			"The footer component. Like TheNavbar, it's a single-instance component used globally in the application.",
	},
	{
		title: "src/assets/",
		icon: "folder",
		description:
			"Contains static assets like stylesheets, images, and fonts used throughout the application.",
	},
	{
		title: "assets/main.css",
		icon: "file",
		description: "Global CSS styles that apply to the entire application.",
	},
	{
		title: "App.vue",
		icon: "file",
		description:
			"The root Vue component that serves as the application entry point. It typically includes the main layout and global components.",
	},
	{
		title: "main.ts",
		icon: "file",
		description:
			"The application's entry point where the Vue app is initialized, plugins are registered, and the app is mounted to the DOM.",
	},
	{
		title: "vite.config.ts",
		icon: "file",
		description:
			"Configuration file for Vite, the build tool. It includes settings for plugins, build options, and development server.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all Vue.js application code and assets.",
	},
	{
		title: "src/components/",
		icon: "folder",
		description:
			"Contains reusable Vue components that can be imported and used across the application. Following Vue.js best practices, component files use PascalCase names.",
	},
	{
		title: "src/components/HelloWorld.vue",
		icon: "file",
		description:
			"A sample component demonstrating Vue.js component structure with template, script, and style sections.",
	},
	{
		title: "src/components/TheNavbar.vue",
		icon: "file",
		description:
			"The main navigation component. The 'The' prefix indicates it's a single-instance component used at the app root level.",
	},
	{
		title: "src/views/",
		icon: "folder",
		description:
			"Contains Vue components that serve as pages or views, typically corresponding to different routes in the application.",
	},
	{
		title: "src/views/HomeView.vue",
		icon: "file",
		description:
			"The home page component, typically rendered at the root route (/).",
	},
	{
		title: "src/router/",
		icon: "folder",
		description:
			"Contains Vue Router configuration for handling client-side routing in the application.",
	},
	{
		title: "src/router/index.ts",
		icon: "file",
		description:
			"Defines route configurations, including path mappings to view components and navigation guards.",
	},
	{
		title: "src/stores/",
		icon: "folder",
		description:
			"Contains Pinia/Vuex stores for state management across the application.",
	},
	{
		title: "src/stores/counter.ts",
		icon: "file",
		description:
			"A Pinia/Vuex store module handling counter-related state and actions.",
	},
	{
		title: "src/stores/user.ts",
		icon: "file",
		description:
			"A Pinia/Vuex store module managing user-related state, including authentication and user data.",
	},
	{
		title: "src/composables/",
		icon: "folder",
		description:
			"Contains Vue 3 Composition API composables (hooks) that encapsulate and reuse stateful logic across components.",
	},
	{
		title: "src/composables/useAuth.ts",
		icon: "file",
		description:
			"A composable for handling authentication-related logic and state.",
	},
	{
		title: "src/composables/useFetch.ts",
		icon: "file",
		description:
			"A composable for making HTTP requests with built-in loading and error states.",
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
		title: "src/components/layout/",
		icon: "folder",
		description:
			"Contains layout components that define the structure and arrangement of pages.",
	},
	{
		title: "src/components/features/",
		icon: "folder",
		description:
			"Contains complex components that implement specific feature requirements.",
	},
	{
		title: "src/views/",
		icon: "folder",
		description:
			"Contains Vue components representing different pages or views in the application.",
	},
	{
		title: "src/router/",
		icon: "folder",
		description:
			"Manages client-side routing and navigation between different views using Vue Router.",
	},
	{
		title: "src/router/index.ts",
		icon: "file",
		description:
			"Defines application routes, linking views to their corresponding paths in Vue Router.",
	},
	{
		title: "src/router/guards.ts",
		icon: "file",
		description:
			"Contains Vue Router navigation guards for handling route-level authentication and authorization.",
	},
	{
		title: "src/stores/",
		icon: "folder",
		description:
			"Contains state management logic using Pinia to handle global state across the application.",
	},
	{
		title: "src/stores/counter.ts",
		icon: "file",
		description:
			"Implements a simple counter store for state management, likely used as an example or demo.",
	},
	{
		title: "src/stores/user.ts",
		icon: "file",
		description:
			"Manages user-related state, such as authentication status and user profile data.",
	},
	{
		title: "src/stores/settings.ts",
		icon: "file",
		description:
			"Handles application-wide settings and preferences, such as themes or language selection.",
	},
	{
		title: "src/assets/",
		icon: "folder",
		description:
			"Contains static assets like images and stylesheets used throughout the application.",
	},
	{
		title: "src/composables/",
		icon: "folder",
		description:
			"Contains reusable Vue composition functions (composables) that encapsulate logic for reusability.",
	},
	{
		title: "src/composables/useAuth.ts",
		icon: "file",
		description:
			"Encapsulates authentication logic, including login, logout, and user session management.",
	},
	{
		title: "src/composables/useFetch.ts",
		icon: "file",
		description:
			"Provides a reusable function for making API requests with fetch, including error handling.",
	},
	{
		title: "src/composables/useNotification.ts",
		icon: "file",
		description:
			"Manages notification logic, such as displaying success, error, or warning messages.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"Contains utility functions and helper methods used across the application.",
	},
	{
		title: "src/utils/api.ts",
		icon: "file",
		description:
			"Centralizes API-related functionality, including request handling and response processing.",
	},
	{
		title: "src/utils/validation.ts",
		icon: "file",
		description: "Contains form validation rules and helper functions.",
	},
	{
		title: "src/utils/formatting.ts",
		icon: "file",
		description:
			"Includes functions for formatting dates, numbers, and other display values.",
	},
	{
		title: "src/types/",
		icon: "folder",
		description:
			"Contains TypeScript type definitions and interfaces used throughout the application.",
	},
	{
		title: "src/types/user.ts",
		icon: "file",
		description:
			"Defines TypeScript interfaces and types for user-related data structures.",
	},
	{
		title: "src/types/api.ts",
		icon: "file",
		description:
			"Defines TypeScript interfaces and types for API responses and request payloads.",
	},
	{
		title: "src/App.vue",
		icon: "file",
		description:
			"The root Vue component that serves as the entry point for the application UI.",
	},
	{
		title: "src/main.ts",
		icon: "file",
		description:
			"Bootstraps the Vue application, initializes plugins, and mounts the root component.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Contains all test-related files, including unit and end-to-end tests.",
	},
	{
		title: "tests/unit/",
		icon: "folder",
		description:
			"Contains unit tests for individual components and functions using Vitest or Jest.",
	},
	{
		title: "tests/e2e/",
		icon: "folder",
		description:
			"Contains end-to-end tests using tools like Cypress or Playwright to test the application as a whole.",
	},
	{
		title: ".env",
		icon: "file",
		description:
			"Environment variables file storing sensitive configuration values such as API keys.",
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
	{ label: "Structures", href: "/structures" },
	{ label: "Vue.js", href: "/structures/vue-js" },
] as const;

export default function VueJsStructurePage() {
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
				title="Vue.js Project Structure"
				description="A scalable and maintainable folder structure for Vue.js applications"
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
