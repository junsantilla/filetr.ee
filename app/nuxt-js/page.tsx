import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Nuxt.js Project Structure",
	description:
		"A scalable and maintainable folder structure for Nuxt.js applications",
	openGraph: {
		title: "Nuxt.js Project Structure",
		description:
			"Learn how to structure your Nuxt.js project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/nuxt-js",
				width: 1200,
				height: 630,
				alt: "Nuxt.js Project Structure Overview",
			},
		],
		url: "/nuxt-js",
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
		name: "pages",
		type: "folder",
		children: [
			{ name: "index.vue", type: "file" },
			{ name: "about.vue", type: "file" },
		],
	},
	{
		name: "components",
		type: "folder",
		children: [
			{ name: "AppHeader.vue", type: "file" },
			{ name: "AppFooter.vue", type: "file" },
		],
	},
	{
		name: "layouts",
		type: "folder",
		children: [
			{ name: "default.vue", type: "file" },
		],
	},
	{
		name: "assets",
		type: "folder",
		children: [
			{ name: "css", type: "folder" },
			{ name: "images", type: "folder" },
		],
	},
	{
		name: "static",
		type: "folder",
		children: [
			{ name: "favicon.ico", type: "file" },
		],
	},
	{ name: "nuxt.config.ts", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "pages",
		type: "folder",
		children: [
			{ name: "index.vue", type: "file" },
			{ name: "about.vue", type: "file" },
			{
				name: "blog",
				type: "folder",
				children: [
					{ name: "index.vue", type: "file" },
					{ name: "[slug].vue", type: "file" },
				],
			},
		],
	},
	{
		name: "components",
		type: "folder",
		children: [
			{ name: "AppHeader.vue", type: "file" },
			{ name: "AppFooter.vue", type: "file" },
			{ name: "BlogCard.vue", type: "file" },
		],
	},
	{
		name: "layouts",
		type: "folder",
		children: [
			{ name: "default.vue", type: "file" },
			{ name: "blog.vue", type: "file" },
		],
	},
	{
		name: "middleware",
		type: "folder",
		children: [
			{ name: "auth.ts", type: "file" },
		],
	},
	{
		name: "plugins",
		type: "folder",
		children: [
			{ name: "client.ts", type: "file" },
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
	{
		name: "server",
		type: "folder",
		children: [
			{
				name: "api",
				type: "folder",
				children: [
					{ name: "users.get.ts", type: "file" },
				],
			},
		],
	},
	{
		name: "assets",
		type: "folder",
		children: [
			{ name: "css", type: "folder" },
			{ name: "images", type: "folder" },
		],
	},
	{
		name: "static",
		type: "folder",
		children: [
			{ name: "favicon.ico", type: "file" },
		],
	},
	{ name: "nuxt.config.ts", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "pages",
		type: "folder",
		children: [
			{ name: "index.vue", type: "file" },
			{ name: "about.vue", type: "file" },
			{
				name: "blog",
				type: "folder",
				children: [
					{ name: "index.vue", type: "file" },
					{ name: "[slug].vue", type: "file" },
				],
			},
			{
				name: "admin",
				type: "folder",
				children: [
					{ name: "index.vue", type: "file" },
					{ name: "dashboard.vue", type: "file" },
				],
			},
		],
	},
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
					{ name: "AppHeader.vue", type: "file" },
					{ name: "AppFooter.vue", type: "file" },
					{ name: "AppSidebar.vue", type: "file" },
				],
			},
			{
				name: "features",
				type: "folder",
				children: [
					{ name: "BlogCard.vue", type: "file" },
					{ name: "UserProfile.vue", type: "file" },
				],
			},
		],
	},
	{
		name: "layouts",
		type: "folder",
		children: [
			{ name: "default.vue", type: "file" },
			{ name: "blog.vue", type: "file" },
			{ name: "admin.vue", type: "file" },
		],
	},
	{
		name: "middleware",
		type: "folder",
		children: [
			{ name: "auth.ts", type: "file" },
			{ name: "admin.ts", type: "file" },
		],
	},
	{
		name: "plugins",
		type: "folder",
		children: [
			{ name: "client.ts", type: "file" },
			{ name: "server.ts", type: "file" },
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
		name: "server",
		type: "folder",
		children: [
			{
				name: "api",
				type: "folder",
				children: [
					{ name: "users.get.ts", type: "file" },
					{ name: "auth.post.ts", type: "file" },
				],
			},
			{
				name: "middleware",
				type: "folder",
				children: [
					{ name: "cors.ts", type: "file" },
				],
			},
		],
	},
	{
		name: "stores",
		type: "folder",
		children: [
			{ name: "user.ts", type: "file" },
			{ name: "blog.ts", type: "file" },
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
	{
		name: "assets",
		type: "folder",
		children: [
			{ name: "css", type: "folder" },
			{ name: "images", type: "folder" },
		],
	},
	{
		name: "static",
		type: "folder",
		children: [
			{ name: "favicon.ico", type: "file" },
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
	{ name: "nuxt.config.ts", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "pages/",
		icon: "folder",
		description:
			"Contains Vue.js files that are automatically turned into routes. Each .vue file in this directory becomes a route based on its filename.",
	},
	{
		title: "pages/index.vue",
		icon: "file",
		description:
			"The homepage of your application. This file corresponds to the root route (/).",
	},
	{
		title: "components/",
		icon: "folder",
		description:
			"Contains reusable Vue.js components that can be imported and used across pages and other components.",
	},
	{
		title: "components/AppHeader.vue",
		icon: "file",
		description:
			"A global header component typically used across multiple pages for consistent navigation.",
	},
	{
		title: "layouts/",
		icon: "folder",
		description:
			"Contains layout components that wrap around pages. Layouts define the common structure for groups of pages.",
	},
	{
		title: "layouts/default.vue",
		icon: "file",
		description:
			"The default layout used by pages unless they specify a different layout. It typically includes common elements like headers and footers.",
	},
	{
		title: "assets/",
		icon: "folder",
		description:
			"Contains uncompiled assets like SCSS, LESS, or JavaScript files that will be processed by the build tool.",
	},
	{
		title: "static/",
		icon: "folder",
		description:
			"Contains files that should be served as-is without any processing. Files in this directory are mapped to the root URL.",
	},
	{
		title: "nuxt.config.ts",
		icon: "file",
		description:
			"The main configuration file for your Nuxt.js application. It contains modules, build settings, and other configuration options.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "pages/",
		icon: "folder",
		description:
			"File-based routing system where each .vue file automatically becomes a route. Supports dynamic routes using square brackets [slug].vue.",
	},
	{
		title: "pages/blog/[slug].vue",
		icon: "file",
		description:
			"A dynamic route that captures the slug parameter from the URL. Used for blog posts with dynamic URLs like /blog/my-post.",
	},
	{
		title: "components/",
		icon: "folder",
		description:
			"Auto-imported Vue components that can be used anywhere in your application without explicit imports.",
	},
	{
		title: "layouts/",
		icon: "folder",
		description:
			"Layout components that define the structure around page content. Pages can specify which layout to use.",
	},
	{
		title: "middleware/",
		icon: "folder",
		description:
			"Contains functions that run before rendering pages or groups of pages. Useful for authentication, redirects, and guards.",
	},
	{
		title: "middleware/auth.ts",
		icon: "file",
		description:
			"Authentication middleware that checks if a user is logged in before allowing access to protected pages.",
	},
	{
		title: "plugins/",
		icon: "folder",
		description:
			"Contains JavaScript plugins that run before the Vue.js application is instantiated. Used for third-party libraries and global functionality.",
	},
	{
		title: "composables/",
		icon: "folder",
		description:
			"Auto-imported Vue 3 Composition API functions that encapsulate and reuse stateful logic across components.",
	},
	{
		title: "composables/useAuth.ts",
		icon: "file",
		description:
			"A composable that provides authentication-related functionality like login, logout, and user state management.",
	},
	{
		title: "server/",
		icon: "folder",
		description:
			"Contains server-side code including API routes, middleware, and plugins that run on the Nuxt.js server.",
	},
	{
		title: "server/api/users.get.ts",
		icon: "file",
		description:
			"A server API route that handles GET requests to /api/users. The filename determines the HTTP method and route.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "pages/",
		icon: "folder",
		description:
			"Advanced file-based routing with nested routes, dynamic parameters, and catch-all routes for complex navigation structures.",
	},
	{
		title: "pages/admin/",
		icon: "folder",
		description:
			"Nested routes for admin functionality. Creates /admin/* routes with shared layout and middleware.",
	},
	{
		title: "components/ui/",
		icon: "folder",
		description:
			"Base UI components that form the foundation of the application's design system and component library.",
	},
	{
		title: "components/layout/",
		icon: "folder",
		description:
			"Layout-specific components like headers, footers, and sidebars that are used in layout files.",
	},
	{
		title: "components/features/",
		icon: "folder",
		description:
			"Feature-specific components that implement complex business logic and user interface requirements.",
	},
	{
		title: "layouts/",
		icon: "folder",
		description:
			"Multiple layout options for different sections of the application, each with distinct structures and styling.",
	},
	{
		title: "middleware/",
		icon: "folder",
		description:
			"Route protection and request processing logic that runs before page rendering and API requests.",
	},
	{
		title: "middleware/admin.ts",
		icon: "file",
		description:
			"Admin-specific middleware that checks for admin privileges before allowing access to admin routes.",
	},
	{
		title: "plugins/",
		icon: "folder",
		description:
			"Client-side and server-side plugins for third-party integrations, global configurations, and application bootstrapping.",
	},
	{
		title: "composables/",
		icon: "folder",
		description:
			"Reusable composition functions that encapsulate complex state management and business logic across the application.",
	},
	{
		title: "composables/useNotification.ts",
		icon: "file",
		description:
			"A composable for managing toast notifications, alerts, and user feedback throughout the application.",
	},
	{
		title: "server/",
		icon: "folder",
		description:
			"Full-stack server functionality with API routes, middleware, and server-side logic integrated into the Nuxt.js application.",
	},
	{
		title: "server/api/",
		icon: "folder",
		description:
			"RESTful API endpoints with file-based routing. Supports all HTTP methods and automatic TypeScript inference.",
	},
	{
		title: "server/middleware/",
		icon: "folder",
		description:
			"Server-side middleware that runs on every request, useful for logging, CORS, authentication, and request processing.",
	},
	{
		title: "stores/",
		icon: "folder",
		description:
			"Pinia stores for state management, providing reactive global state that can be shared across components and pages.",
	},
	{
		title: "stores/user.ts",
		icon: "file",
		description:
			"User state management including authentication status, user profile data, and user-related actions.",
	},
	{
		title: "utils/",
		icon: "folder",
		description:
			"Auto-imported utility functions and helper methods that can be used throughout the application without explicit imports.",
	},
	{
		title: "utils/api.ts",
		icon: "file",
		description:
			"Centralized API client configuration and helper functions for making HTTP requests with error handling.",
	},
	{
		title: "utils/validation.ts",
		icon: "file",
		description:
			"Form validation utilities and rules that can be reused across different forms in the application.",
	},
	{
		title: "types/",
		icon: "folder",
		description:
			"TypeScript type definitions and interfaces that provide type safety throughout the application.",
	},
	{
		title: "types/user.ts",
		icon: "file",
		description:
			"TypeScript interfaces and types for user-related data structures and API responses.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Comprehensive testing setup including unit tests for components and functions, and end-to-end tests for user workflows.",
	},
	{
		title: "tests/unit/",
		icon: "folder",
		description:
			"Unit tests for individual components, composables, and utility functions using Vitest or Jest.",
	},
	{
		title: "tests/e2e/",
		icon: "folder",
		description:
			"End-to-end tests using Playwright or Cypress to test complete user journeys and application workflows.",
	},
	{
		title: ".env",
		icon: "file",
		description:
			"Environment variables for sensitive configuration like API keys, database URLs, and feature flags.",
	},
	{
		title: "nuxt.config.ts",
		icon: "file",
		description:
			"Comprehensive Nuxt.js configuration with modules, build optimizations, SEO settings, and development tools.",
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
	{ label: "Nuxt.js", href: "/nuxt-js" },
] as const;

export default function NuxtJsStructurePage() {
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
				title="Nuxt.js Project Structure"
				description="A scalable and maintainable folder structure for Nuxt.js applications"
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