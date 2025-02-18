import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Next.js Project Structure",
	description:
		"A scalable and maintainable folder structure for Next.js applications",
	openGraph: {
		title: "Next.js Project Structure",
		description:
			"Learn how to structure your Next.js project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/next-js",
				width: 1200,
				height: 630,
				alt: "Next.js Project Structure Overview",
			},
		],
		url: "/next-js",
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
				name: "app",
				type: "folder",
				children: [
					{ name: "layout.tsx", type: "file" },
					{ name: "page.tsx", type: "file" },
					{ name: "loading.tsx", type: "file" },
					{ name: "error.tsx", type: "file" },
				],
			},
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Navbar.tsx", type: "file" },
					{ name: "Footer.tsx", type: "file" },
				],
			},
			{
				name: "styles",
				type: "folder",
				children: [
					{ name: "globals.css", type: "file" },
					{ name: "variables.css", type: "file" },
				],
			},
		],
	},
	{ name: "next.config.js", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "app",
				type: "folder",
				children: [
					{ name: "layout.tsx", type: "file" },
					{ name: "page.tsx", type: "file" },
					{ name: "loading.tsx", type: "file" },
					{ name: "error.tsx", type: "file" },
					{
						name: "dashboard",
						type: "folder",
						children: [
							{ name: "page.tsx", type: "file" },
							{ name: "layout.tsx", type: "file" },
							{ name: "loading.tsx", type: "file" },
							{ name: "error.tsx", type: "file" },
						],
					},
				],
			},
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Navbar.tsx", type: "file" },
					{ name: "Footer.tsx", type: "file" },
				],
			},
			{
				name: "hooks",
				type: "folder",
				children: [
					{ name: "useAuth.ts", type: "file" },
					{ name: "useFetch.ts", type: "file" },
				],
			},
			{
				name: "lib",
				type: "folder",
				children: [
					{ name: "api.ts", type: "file" },
					{ name: "auth.ts", type: "file" },
				],
			},
			{
				name: "styles",
				type: "folder",
				children: [
					{ name: "globals.css", type: "file" },
					{ name: "variables.css", type: "file" },
				],
			},
			{
				name: "middleware.ts",
				type: "file",
			},
		],
	},
	{
		name: "test",
		type: "folder",
		children: [
			{ name: "__mocks__", type: "folder" },
			{ name: "components", type: "folder" },
			{ name: "pages", type: "folder" },
		],
	},
	{ name: "next.config.js", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "app",
				type: "folder",
				children: [
					{ name: "layout.tsx", type: "file" },
					{ name: "page.tsx", type: "file" },
					{ name: "loading.tsx", type: "file" },
					{ name: "error.tsx", type: "file" },
					{
						name: "dashboard",
						type: "folder",
						children: [
							{ name: "page.tsx", type: "file" },
							{ name: "layout.tsx", type: "file" },
							{ name: "loading.tsx", type: "file" },
							{ name: "error.tsx", type: "file" },
						],
					},
				],
			},
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Navbar.tsx", type: "file" },
					{ name: "Footer.tsx", type: "file" },
				],
			},
			{
				name: "hooks",
				type: "folder",
				children: [
					{ name: "useAuth.ts", type: "file" },
					{ name: "useFetch.ts", type: "file" },
				],
			},
			{
				name: "lib",
				type: "folder",
				children: [
					{ name: "api.ts", type: "file" },
					{ name: "auth.ts", type: "file" },
				],
			},
			{
				name: "styles",
				type: "folder",
				children: [
					{ name: "globals.css", type: "file" },
					{ name: "variables.css", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
			},
			{
				name: "providers",
				type: "folder",
				children: [
					{ name: "ThemeProvider.tsx", type: "file" },
					{ name: "AuthProvider.tsx", type: "file" },
				],
			},
			{
				name: "middleware.ts",
				type: "file",
			},
		],
	},
	{
		name: "prisma",
		type: "folder",
		children: [
			{ name: "schema.prisma", type: "file" },
			{ name: "migrations", type: "folder" },
		],
	},
	{
		name: "test",
		type: "folder",
		children: [
			{ name: "__mocks__", type: "folder" },
			{ name: "components", type: "folder" },
			{ name: "pages", type: "folder" },
		],
	},
	{ name: ".env", type: "file" },
	{ name: ".eslintrc.json", type: "file" },
	{ name: ".prettierrc", type: "file" },
	{ name: "next.config.js", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"This folder contains the main application logic, including routes, components, styles, and utilities. It is recommended for better project organization, ensuring a clear separation between source code and configuration files.",
	},
	{
		title: "src/app/",
		icon: "folder",
		description:
			"This folder is a fundamental feature of Next.js 13+, where every folder inside it corresponds to a route. This directory follows the file-based routing system, meaning each folder and file structure reflects the application's URL paths.",
	},
	{
		title: "app/layout.tsx",
		icon: "file",
		description:
			"A special file in the App Router that acts as the root layout for all pages inside app/.",
	},
	{
		title: "app/page.tsx",
		icon: "file",
		description:
			"This file represents the main entry point of the application, typically corresponding to the home page (/).",
	},
	{
		title: "app/loading.tsx",
		icon: "file",
		description:
			"This file is a special feature in Next.js App Router that allows you to create a custom loading screen while a page or component is fetching data.",
	},
	{
		title: "app/error.tsx",
		icon: "file",
		description: "This file is used to handle errors at the route level.",
	},
	{
		title: "src/components",
		icon: "folder",
		description:
			"This folder is used to store reusable UI components that can be used across multiple pages and layouts.",
	},
	{
		title: "components/Navbar.tsx",
		icon: "file",
		description:
			"This file is typically included inside the layout.tsx file to provide consistent navigation across all pages.",
	},
	{
		title: "components/Footer.tsx",
		icon: "file",
		description:
			"This file is used to display important information such as copyright details, links, and contact information at the bottom of every page.",
	},
	{
		title: "src/styles",
		icon: "folder",
		description:
			"This folder contains global stylesheets that apply consistent styling across the entire application.",
	},
	{
		title: "styles/globals.css",
		icon: "file",
		description:
			"This file contains CSS rules that apply to all pages and components.",
	},
	{
		title: "styles/variables.css",
		icon: "file",
		description:
			"This file defines custom CSS variables for things like colors, fonts, spacing, and themes.",
	},
	{
		title: "next.config.js",
		icon: "file",
		description:
			"This file is used to configure Next.js settings, such as custom redirects, rewrites, environment variables, and image optimizations.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"This file contains metadata about the project, such as project name, version, dependencies, and scripts.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"This file serves as project documentation, providing instructions on how to set up and run the application.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"This folder contains the main application logic, including routes, components, styles, and utilities. It is recommended for better project organization, ensuring a clear separation between source code and configuration files.",
	},
	{
		title: "src/app/",
		icon: "folder",
		description:
			"This folder is a fundamental feature of Next.js 13+, where every folder inside it corresponds to a route. This directory follows the file-based routing system, meaning each folder and file structure reflects the application's URL paths.",
	},
	{
		title: "app/layout.tsx",
		icon: "file",
		description:
			"A special file in the App Router that acts as the root layout for all pages inside app/.",
	},
	{
		title: "app/page.tsx",
		icon: "file",
		description:
			"This file represents the main entry point of the application, typically corresponding to the home page (/).",
	},
	{
		title: "app/loading.tsx",
		icon: "file",
		description:
			"This file is a special feature in Next.js App Router that allows you to create a custom loading screen while a page or component is fetching data.",
	},
	{
		title: "app/error.tsx",
		icon: "file",
		description: "This file is used to handle errors at the route level.",
	},
	{
		title: "app/dashboard",
		icon: "folder",
		description: "This folder represents a nested route (/dashboard).",
	},
	{
		title: "src/components",
		icon: "folder",
		description:
			"This folder is used to store reusable UI components that can be used across multiple pages and layouts.",
	},
	{
		title: "components/Navbar.tsx",
		icon: "file",
		description:
			"This file is typically included inside the layout.tsx file to provide consistent navigation across all pages.",
	},
	{
		title: "components/Footer.tsx",
		icon: "file",
		description:
			"This file is used to display important information such as copyright details, links, and contact information at the bottom of every page.",
	},
	{
		title: "src/hooks",
		icon: "folder",
		description:
			"This folder is used to store custom React hooks, which encapsulate logic that can be reused across components.",
	},
	{
		title: "hooks/useAuth.ts",
		icon: "file",
		description: "This hook manages user authentication",
	},
	{
		title: "hooks/useFetch.ts",
		icon: "file",
		description:
			"A reusable data fetching hook that helps manage API requests efficiently.",
	},
	{
		title: "src/lib",
		icon: "folder",
		description:
			"This folder contains helper functions, API utilities, and configuration files.",
	},
	{
		title: "lib/api.ts",
		icon: "file",
		description: "Handles API requests to backend services.",
	},
	{
		title: "lib/auth.ts",
		icon: "file",
		description:
			"Manages authentication logic, including token management and user sessions.",
	},
	{
		title: "styles/globals.css",
		icon: "file",
		description:
			"This file contains CSS rules that apply to all pages and components.",
	},
	{
		title: "styles/variables.css",
		icon: "file",
		description:
			"This file defines custom CSS variables for things like colors, fonts, spacing, and themes.",
	},
	{
		title: "src/middleware.ts",
		icon: "file",
		description:
			"This file is used to define middleware logic for authentication, security, and redirects.",
	},
	{
		title: "next.config.js",
		icon: "file",
		description:
			"This file is used to configure Next.js settings, such as custom redirects, rewrites, environment variables, and image optimizations.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"This file contains metadata about the project, such as project name, version, dependencies, and scripts.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"This file serves as project documentation, providing instructions on how to set up and run the application.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"This folder contains the main application logic, including routes, components, styles, and utilities. It is recommended for better project organization, ensuring a clear separation between source code and configuration files.",
	},
	{
		title: "src/app/",
		icon: "folder",
		description:
			"This folder is a fundamental feature of Next.js 13+, where every folder inside it corresponds to a route. This directory follows the file-based routing system, meaning each folder and file structure reflects the application's URL paths.",
	},
	{
		title: "app/layout.tsx",
		icon: "file",
		description:
			"A special file in the App Router that acts as the root layout for all pages inside app/.",
	},
	{
		title: "app/page.tsx",
		icon: "file",
		description:
			"This file represents the main entry point of the application, typically corresponding to the home page (/).",
	},
	{
		title: "app/loading.tsx",
		icon: "file",
		description:
			"This file is a special feature in Next.js App Router that allows you to create a custom loading screen while a page or component is fetching data.",
	},
	{
		title: "app/error.tsx",
		icon: "file",
		description: "This file is used to handle errors at the route level.",
	},
	{
		title: "app/dashboard",
		icon: "folder",
		description: "This folder represents a nested route (/dashboard).",
	},
	{
		title: "src/components",
		icon: "folder",
		description:
			"This folder is used to store reusable UI components that can be used across multiple pages and layouts.",
	},
	{
		title: "components/Navbar.tsx",
		icon: "file",
		description:
			"This file is typically included inside the layout.tsx file to provide consistent navigation across all pages.",
	},
	{
		title: "components/Footer.tsx",
		icon: "file",
		description:
			"This file is used to display important information such as copyright details, links, and contact information at the bottom of every page.",
	},
	{
		title: "src/hooks",
		icon: "folder",
		description:
			"This folder is used to store custom React hooks, which encapsulate logic that can be reused across components.",
	},
	{
		title: "hooks/useAuth.ts",
		icon: "file",
		description: "This hook manages user authentication",
	},
	{
		title: "hooks/useFetch.ts",
		icon: "file",
		description:
			"A reusable data fetching hook that helps manage API requests efficiently.",
	},
	{
		title: "src/lib",
		icon: "folder",
		description:
			"This folder contains helper functions, API utilities, and configuration files.",
	},
	{
		title: "lib/api.ts",
		icon: "file",
		description: "Handles API requests to backend services.",
	},
	{
		title: "lib/auth.ts",
		icon: "file",
		description:
			"Manages authentication logic, including token management and user sessions.",
	},
	{
		title: "styles/globals.css",
		icon: "file",
		description:
			"This file contains CSS rules that apply to all pages and components.",
	},
	{
		title: "styles/variables.css",
		icon: "file",
		description:
			"This file defines custom CSS variables for things like colors, fonts, spacing, and themes.",
	},
	{
		title: "src/assets",
		icon: "folder",
		description:
			"This folder contains images, fonts, and other static assets.",
	},
	{
		title: "src/providers",
		icon: "folder",
		description:
			"This folder contains React context providers (e.g., ThemeProvider, AuthProvider) that manage global state and data.",
	},
	{
		title: "src/middleware.ts",
		icon: "file",
		description:
			"This file is used to define middleware logic for authentication, security, and redirects.",
	},
	{
		title: "src/prisma",
		icon: "folder",
		description:
			"This folder contains Prisma ORM schema and database migration files for database management.",
	},
	{
		title: "tests",
		icon: "folder",
		description:
			"This folder contains unit tests, integration tests, and mock data for testing the application.",
	},
	{
		title: "tests/__mocks__/",
		icon: "folder",
		description:
			"This folder contains mock data and utilities for testing purposes.",
	},
	{
		title: "tests/components/",
		icon: "folder",
		description:
			"This folder contains unit tests for React components and UI elements.",
	},
	{
		title: "tests/pages/",
		icon: "folder",
		description:
			"This folder contains integration tests for Next.js pages and routes.",
	},
	{
		title: "next.config.js",
		icon: "file",
		description:
			"This file is used to configure Next.js settings, such as custom redirects, rewrites, environment variables, and image optimizations.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"This file contains metadata about the project, such as project name, version, dependencies, and scripts.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"This file serves as project documentation, providing instructions on how to set up and run the application.",
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
	{ label: "Next.js", href: "/next-js" },
] as const;

export default function NextJsStructurePage() {
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
				title="Next.js Project Structure"
				description="A scalable and maintainable folder structure for Next.js applications"
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
