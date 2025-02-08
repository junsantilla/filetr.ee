import { StructureTemplate } from "@/components/structure-template";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "React.js Project Structure",
	description:
		"A scalable and maintainable folder structure for React.js applications",
	openGraph: {
		title: "React.js Project Structure",
		description:
			"Learn how to structure your React.js project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/next-js",
				width: 1200,
				height: 630,
				alt: "Next.js Project Structure Overview",
			},
		],

		url: "/structures/next-js",
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
			{ name: "App.js", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [{ name: "Header.js", type: "file" }],
			},
			{
				name: "assets",
				type: "folder",
				children: [{ name: "logo.svg", type: "file" }],
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
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.js", type: "file" },
			{ name: "App.js", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Header.js", type: "file" },
					{ name: "Footer.js", type: "file" },
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{ name: "Home.js", type: "file" },
					{ name: "About.js", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "logo.svg", type: "file" },
					{
						name: "styles",
						type: "folder",
						children: [{ name: "index.css", type: "file" }],
					},
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
	{ name: "README.md", type: "file" },
	{ name: ".gitignore", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.js", type: "file" },
			{ name: "App.js", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Header.js", type: "file" },
					{ name: "Footer.js", type: "file" },
					{
						name: "ui",
						type: "folder",
						children: [{ name: "Button.js", type: "file" }],
					},
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{ name: "Home.js", type: "file" },
					{ name: "About.js", type: "file" },
					{ name: "Dashboard.js", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "logo.svg", type: "file" },
					{
						name: "styles",
						type: "folder",
						children: [
							{ name: "index.css", type: "file" },
							{ name: "variables.css", type: "file" },
						],
					},
				],
			},
			{
				name: "hooks",
				type: "folder",
				children: [{ name: "useAuth.js", type: "file" }],
			},
			{
				name: "context",
				type: "folder",
				children: [{ name: "AuthContext.js", type: "file" }],
			},
			{
				name: "services",
				type: "folder",
				children: [{ name: "api.js", type: "file" }],
			},
			{
				name: "utils",
				type: "folder",
				children: [{ name: "helpers.js", type: "file" }],
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
	{ name: "README.md", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: ".env", type: "file" },
	{ name: "jsconfig.json", type: "file" },
	{ name: ".eslintrc.js", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"This folder contains the main source code for the React application. All the application's core logic, components, and assets are placed here.",
	},
	{
		title: "src/index.js",
		icon: "file",
		description:
			"The entry point of the React application. This file renders the root component (usually App) and attaches it to the DOM.",
	},
	{
		title: "src/App.js",
		icon: "file",
		description:
			"The root component of the application. It typically includes the main layout and routing logic.",
	},
	{
		title: "src/components/",
		icon: "folder",
		description:
			"This folder contains reusable React components. Components in this folder are smaller units of the UI that can be used in different parts of the application.",
	},
	{
		title: "src/assets/",
		icon: "folder",
		description:
			"This folder is used for storing static assets like images, fonts, or global styles that will be processed by the build tool.",
	},
	{
		title: "public/",
		icon: "folder",
		description:
			"This folder contains static assets that are served directly. It includes the main HTML file and other assets like the favicon.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"This folder contains the main source code for the React application. It now includes additional directories for better organization as the project grows.",
	},
	{
		title: "src/index.js",
		icon: "file",
		description:
			"The entry point of the React application. This file renders the root component (usually App) and attaches it to the DOM.",
	},
	{
		title: "src/App.js",
		icon: "file",
		description:
			"The root component of the application. It typically includes the main layout and routing logic.",
	},
	{
		title: "src/components/",
		icon: "folder",
		description:
			"This folder contains reusable React components. Components like Header.js and Footer.js can be used across different pages of the application.",
	},
	{
		title: "src/pages/",
		icon: "folder",
		description:
			"This folder contains components that represent entire pages or views in your application. Each file typically corresponds to a route in your application.",
	},
	{
		title: "src/assets/",
		icon: "folder",
		description:
			"This folder is used for storing static assets like images, fonts, or global styles that will be processed by the build tool.",
	},
	{
		title: "src/assets/styles/",
		icon: "folder",
		description:
			"This subfolder in the assets directory is used for global styles. The index.css file can contain application-wide CSS rules.",
	},
	{
		title: "public/",
		icon: "folder",
		description:
			"This folder contains static assets that are served directly. It includes the main HTML file and other assets like the favicon.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"This folder contains the main source code for the React application. It now includes several additional directories for a more complex application structure.",
	},
	{
		title: "src/index.js",
		icon: "file",
		description:
			"The entry point of the React application. This file renders the root component (usually App) and attaches it to the DOM.",
	},
	{
		title: "src/App.js",
		icon: "file",
		description:
			"The root component of the application. It typically includes the main layout and routing logic.",
	},
	{
		title: "src/components/",
		icon: "folder",
		description:
			"This folder contains reusable React components. Components like Header.js and Footer.js can be used across different pages of the application.",
	},
	{
		title: "src/components/ui/",
		icon: "folder",
		description:
			"This subfolder contains low-level UI components like buttons, inputs, etc., that are used across the application. These components form the building blocks for more complex components and pages.",
	},
	{
		title: "src/pages/",
		icon: "folder",
		description:
			"This folder contains components that represent entire pages or views in your application. Each file typically corresponds to a route in your application.",
	},
	{
		title: "src/assets/",
		icon: "folder",
		description:
			"This folder is used for storing static assets like images, fonts, or global styles that will be processed by the build tool.",
	},
	{
		title: "src/assets/styles/",
		icon: "folder",
		description:
			"This subfolder in the assets directory is used for global styles. The index.css file can contain application-wide CSS rules.",
	},
	{
		title: "src/hooks/",
		icon: "folder",
		description:
			"This folder contains custom React hooks. These are reusable pieces of logic that can be shared across components.",
	},
	{
		title: "src/context/",
		icon: "folder",
		description:
			"This folder contains React context providers. These are used for state management across the application.",
	},
	{
		title: "src/services/",
		icon: "folder",
		description:
			"This folder contains service files, such as API calls or other external service integrations.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"This folder contains utility functions and helper methods used throughout the application.",
	},
	{
		title: "public/",
		icon: "folder",
		description:
			"This folder contains static assets that are served directly. It includes the main HTML file and other assets like the favicon.",
	},
	{
		title: ".env",
		icon: "file",
		description:
			"This file is used to store environment variables for the application. It's important for managing configuration across different environments.",
	},
	{
		title: "jsconfig.json",
		icon: "file",
		description:
			"This file is used to configure the JavaScript language service in your editor, providing better IntelliSense and module resolution.",
	},
	{
		title: ".eslintrc.js",
		icon: "file",
		description:
			"This file contains ESLint configuration for maintaining code quality and consistency across the project.",
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
	{ label: "React.js", href: "/structures/react-js" },
] as const;

export default function ReactJsStructurePage() {
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
				title="React.js Project Structure"
				description="A scalable and maintainable folder structure for React.js applications"
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
