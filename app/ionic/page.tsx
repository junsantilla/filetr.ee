import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Ionic Project Structure",
	description:
		"A scalable and maintainable folder structure for Ionic applications",
	openGraph: {
		title: "Ionic Project Structure",
		description:
			"Learn how to structure your Ionic project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/ionic",
				width: 1200,
				height: 630,
				alt: "Ionic Project Structure Overview",
			},
		],
		url: "/ionic",
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
			{ name: "index.html", type: "file" },
			{ name: "main.ts", type: "file" },
			{
				name: "app",
				type: "folder",
				children: [
					{ name: "app.component.ts", type: "file" },
					{ name: "app.component.html", type: "file" },
					{ name: "app.module.ts", type: "file" },
					{ name: "app-routing.module.ts", type: "file" },
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{
						name: "home",
						type: "folder",
						children: [
							{ name: "home.page.ts", type: "file" },
							{ name: "home.page.html", type: "file" },
							{ name: "home.page.scss", type: "file" },
						],
					},
				],
			},
		],
	},
	{ name: "ionic.config.json", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.html", type: "file" },
			{ name: "main.ts", type: "file" },
			{
				name: "app",
				type: "folder",
				children: [
					{ name: "app.component.ts", type: "file" },
					{ name: "app.component.html", type: "file" },
					{ name: "app.module.ts", type: "file" },
					{ name: "app-routing.module.ts", type: "file" },
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{
						name: "home",
						type: "folder",
						children: [
							{ name: "home.page.ts", type: "file" },
							{ name: "home.page.html", type: "file" },
							{ name: "home.page.scss", type: "file" },
							{ name: "home.module.ts", type: "file" },
						],
					},
					{
						name: "profile",
						type: "folder",
						children: [
							{ name: "profile.page.ts", type: "file" },
							{ name: "profile.page.html", type: "file" },
							{ name: "profile.page.scss", type: "file" },
							{ name: "profile.module.ts", type: "file" },
						],
					},
				],
			},
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "header", type: "folder" },
					{ name: "footer", type: "folder" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "api.service.ts", type: "file" },
					{ name: "auth.service.ts", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "images", type: "folder" },
					{ name: "fonts", type: "folder" },
				],
			},
		],
	},
	{ name: "ionic.config.json", type: "file" },
	{ name: "angular.json", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.html", type: "file" },
			{ name: "main.ts", type: "file" },
			{
				name: "app",
				type: "folder",
				children: [
					{ name: "app.component.ts", type: "file" },
					{ name: "app.component.html", type: "file" },
					{ name: "app.module.ts", type: "file" },
					{ name: "app-routing.module.ts", type: "file" },
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{
						name: "home",
						type: "folder",
						children: [
							{ name: "home.page.ts", type: "file" },
							{ name: "home.page.html", type: "file" },
							{ name: "home.page.scss", type: "file" },
							{ name: "home.module.ts", type: "file" },
							{ name: "home-routing.module.ts", type: "file" },
						],
					},
					{
						name: "tabs",
						type: "folder",
						children: [
							{ name: "tabs.page.ts", type: "file" },
							{ name: "tabs.page.html", type: "file" },
							{ name: "tabs.page.scss", type: "file" },
							{ name: "tabs.module.ts", type: "file" },
							{ name: "tabs-routing.module.ts", type: "file" },
						],
					},
				],
			},
			{
				name: "components",
				type: "folder",
				children: [
					{
						name: "shared",
						type: "folder",
						children: [
							{ name: "header", type: "folder" },
							{ name: "footer", type: "folder" },
							{ name: "loading", type: "folder" },
						],
					},
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "api.service.ts", type: "file" },
					{ name: "auth.service.ts", type: "file" },
					{ name: "storage.service.ts", type: "file" },
				],
			},
			{
				name: "guards",
				type: "folder",
				children: [
					{ name: "auth.guard.ts", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "user.model.ts", type: "file" },
					{ name: "api.model.ts", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "constants.ts", type: "file" },
					{ name: "helpers.ts", type: "file" },
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
		name: "e2e",
		type: "folder",
		children: [
			{ name: "src", type: "folder" },
		],
	},
	{ name: "ionic.config.json", type: "file" },
	{ name: "angular.json", type: "file" },
	{ name: "capacitor.config.ts", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
	{ name: "karma.conf.js", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory containing all Ionic application code and assets.",
	},
	{
		title: "src/index.html",
		icon: "file",
		description:
			"The main HTML file that serves as the entry point for the Ionic application.",
	},
	{
		title: "src/main.ts",
		icon: "file",
		description:
			"The main TypeScript file that bootstraps the Angular/Ionic application.",
	},
	{
		title: "src/app/",
		icon: "folder",
		description:
			"Contains the root app component and main application configuration.",
	},
	{
		title: "app/app.component.ts",
		icon: "file",
		description:
			"The root component class that serves as the main application container.",
	},
	{
		title: "app/app.module.ts",
		icon: "file",
		description:
			"The root module that configures and bootstraps the Ionic application.",
	},
	{
		title: "src/pages/",
		icon: "folder",
		description:
			"Contains page components that represent different screens in the mobile app.",
	},
	{
		title: "ionic.config.json",
		icon: "file",
		description:
			"Ionic CLI configuration file defining project settings and build options.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "pages/home/home.module.ts",
		icon: "file",
		description:
			"Angular module for the home page, defining its dependencies and routing.",
	},
	{
		title: "src/components/",
		icon: "folder",
		description:
			"Contains reusable UI components that can be shared across different pages.",
	},
	{
		title: "src/services/",
		icon: "folder",
		description:
			"Contains Angular services for handling business logic, API calls, and data management.",
	},
	{
		title: "services/api.service.ts",
		icon: "file",
		description:
			"Service for making HTTP requests and handling API communication.",
	},
	{
		title: "services/auth.service.ts",
		icon: "file",
		description:
			"Service for handling user authentication and session management.",
	},
	{
		title: "src/assets/",
		icon: "folder",
		description:
			"Contains static assets like images, fonts, and other resources used in the app.",
	},
	{
		title: "angular.json",
		icon: "file",
		description:
			"Angular CLI configuration file defining build and development settings.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "pages/home/home-routing.module.ts",
		icon: "file",
		description:
			"Routing module for the home page defining child routes and navigation.",
	},
	{
		title: "components/shared/",
		icon: "folder",
		description:
			"Shared components organized by functionality for reuse across the application.",
	},
	{
		title: "src/guards/",
		icon: "folder",
		description:
			"Contains Angular route guards for protecting routes and handling navigation logic.",
	},
	{
		title: "guards/auth.guard.ts",
		icon: "file",
		description:
			"Route guard for protecting authenticated routes and handling authorization.",
	},
	{
		title: "src/models/",
		icon: "folder",
		description:
			"Contains TypeScript interfaces and models for type safety and data structure.",
	},
	{
		title: "models/user.model.ts",
		icon: "file",
		description:
			"TypeScript interface defining the structure of user data throughout the app.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"Contains utility functions, constants, and helper methods used across the app.",
	},
	{
		title: "utils/constants.ts",
		icon: "file",
		description:
			"Application-wide constants including API endpoints and configuration values.",
	},
	{
		title: "capacitor.config.ts",
		icon: "file",
		description:
			"Capacitor configuration for native mobile app functionality and plugins.",
	},
	{
		title: "e2e/",
		icon: "folder",
		description:
			"End-to-end testing directory containing tests for complete user workflows.",
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
	{ label: "Ionic", href: "/ionic" },
] as const;

export default function IonicStructurePage() {
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
				title="Ionic Project Structure"
				description="A scalable and maintainable folder structure for Ionic applications"
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