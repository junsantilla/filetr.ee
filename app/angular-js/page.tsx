import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Angular.js Project Structure",
	description:
		"A scalable and maintainable folder structure for Angular.js applications",
	openGraph: {
		title: "Angular.js Project Structure",
		description:
			"Learn how to structure your Angular.js project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/angular-js",
				width: 1200,
				height: 630,
				alt: "Angular.js Project Structure Overview",
			},
		],
		url: "/angular-js",
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
		name: "app",
		type: "folder",
		children: [
			{ name: "app.js", type: "file" },
			{ name: "app.css", type: "file" },
			{ name: "index.html", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "home.js", type: "file" },
					{ name: "about.js", type: "file" },
				],
			},
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "app",
		type: "folder",
		children: [
			{ name: "app.js", type: "file" },
			{ name: "app.css", type: "file" },
			{ name: "index.html", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{
						name: "home",
						type: "folder",
						children: [
							{ name: "home.js", type: "file" },
							{ name: "home.html", type: "file" },
						],
					},
					{
						name: "about",
						type: "folder",
						children: [
							{ name: "about.js", type: "file" },
							{ name: "about.html", type: "file" },
						],
					},
				],
			},
			{
				name: "services",
				type: "folder",
				children: [{ name: "data.service.js", type: "file" }],
			},
			{
				name: "filters",
				type: "folder",
				children: [{ name: "custom.filter.js", type: "file" }],
			},
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "bower.json", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "app",
		type: "folder",
		children: [
			{ name: "app.module.js", type: "file" },
			{ name: "app.config.js", type: "file" },
			{ name: "app.routes.js", type: "file" },
			{ name: "index.html", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{
						name: "home",
						type: "folder",
						children: [
							{ name: "home.component.js", type: "file" },
							{ name: "home.controller.js", type: "file" },
							{ name: "home.html", type: "file" },
							{ name: "home.css", type: "file" },
						],
					},
					{
						name: "about",
						type: "folder",
						children: [
							{ name: "about.component.js", type: "file" },
							{ name: "about.controller.js", type: "file" },
							{ name: "about.html", type: "file" },
							{ name: "about.css", type: "file" },
						],
					},
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "data.service.js", type: "file" },
					{ name: "auth.service.js", type: "file" },
				],
			},
			{
				name: "filters",
				type: "folder",
				children: [{ name: "custom.filter.js", type: "file" }],
			},
			{
				name: "directives",
				type: "folder",
				children: [{ name: "custom.directive.js", type: "file" }],
			},
			{
				name: "shared",
				type: "folder",
				children: [
					{ name: "shared.module.js", type: "file" },
					{ name: "constants.js", type: "file" },
				],
			},
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
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "unit", type: "folder" },
			{ name: "e2e", type: "folder" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "bower.json", type: "file" },
	{ name: "gulpfile.js", type: "file" },
	{ name: "karma.conf.js", type: "file" },
	{ name: "protractor.conf.js", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "app/",
		icon: "folder",
		description:
			"The main application folder containing all Angular.js related files.",
	},
	{
		title: "app/app.js",
		icon: "file",
		description:
			"The main Angular.js application file where the app is initialized and configured.",
	},
	{
		title: "app/app.css",
		icon: "file",
		description: "The main CSS file for global styles in the application.",
	},
	{
		title: "app/index.html",
		icon: "file",
		description:
			"The main HTML file that serves as the entry point for the Angular.js application.",
	},
	{
		title: "app/components/",
		icon: "folder",
		description: "Contains individual components of the application.",
	},
	{
		title: "app/components/home.js",
		icon: "file",
		description: "Component file for the home page of the application.",
	},
	{
		title: "app/components/about.js",
		icon: "file",
		description: "Component file for the about page of the application.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"Defines the project dependencies and scripts for Node.js and npm.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Documentation file providing an overview and instructions for the project.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "app/",
		icon: "folder",
		description:
			"The main application folder containing all Angular.js related files and folders.",
	},
	{
		title: "app/app.js",
		icon: "file",
		description:
			"The main Angular.js application file where the app is initialized and configured.",
	},
	{
		title: "app/app.css",
		icon: "file",
		description: "The main CSS file for global styles in the application.",
	},
	{
		title: "app/index.html",
		icon: "file",
		description:
			"The main HTML file that serves as the entry point for the Angular.js application.",
	},
	{
		title: "app/components/",
		icon: "folder",
		description:
			"Contains individual components of the application, each with its own folder for better organization.",
	},
	{
		title: "app/components/home/",
		icon: "folder",
		description:
			"Folder for the home component, containing its JavaScript and HTML files.",
	},
	{
		title: "app/components/home/home.js",
		icon: "file",
		description:
			"JavaScript file for the home component, containing its logic and controller.",
	},
	{
		title: "app/components/home/home.html",
		icon: "file",
		description: "HTML template file for the home component.",
	},
	{
		title: "app/components/about/",
		icon: "folder",
		description:
			"Folder for the about component, containing its JavaScript and HTML files.",
	},
	{
		title: "app/components/about/about.js",
		icon: "file",
		description:
			"JavaScript file for the about component, containing its logic and controller.",
	},
	{
		title: "app/components/about/about.html",
		icon: "file",
		description: "HTML template file for the about component.",
	},
	{
		title: "app/services/",
		icon: "folder",
		description:
			"Houses service files that handle data and business logic separate from components.",
	},
	{
		title: "app/services/data.service.js",
		icon: "file",
		description: "Service file for handling data operations.",
	},
	{
		title: "app/filters/",
		icon: "folder",
		description:
			"Contains custom Angular.js filters used for data transformation in views.",
	},
	{
		title: "app/filters/custom.filter.js",
		icon: "file",
		description: "Custom filter for data transformation in views.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"Defines the project dependencies and scripts for Node.js and npm.",
	},
	{
		title: "bower.json",
		icon: "file",
		description:
			"Specifies frontend dependencies managed by Bower (commonly used in Angular.js projects).",
	},
	{
		title: ".gitignore",
		icon: "file",
		description:
			"Specifies files and directories that should be ignored by Git version control.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Documentation file providing an overview and instructions for the project.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "app/",
		icon: "folder",
		description:
			"The main application folder containing all Angular.js related files and folders.",
	},
	{
		title: "app/app.module.js",
		icon: "file",
		description: "Defines the main Angular.js module and its dependencies.",
	},
	{
		title: "app/app.config.js",
		icon: "file",
		description:
			"Contains configuration settings for the Angular.js application.",
	},
	{
		title: "app/app.routes.js",
		icon: "file",
		description:
			"Defines the routes for the application using UI-Router or ngRoute.",
	},
	{
		title: "app/index.html",
		icon: "file",
		description:
			"The main HTML file that serves as the entry point for the Angular.js application.",
	},
	{
		title: "app/components/",
		icon: "folder",
		description:
			"Contains individual components of the application, each with its own folder and multiple files.",
	},
	{
		title: "app/components/home/",
		icon: "folder",
		description:
			"Folder for the home component, containing its JavaScript, HTML, and CSS files.",
	},
	{
		title: "app/components/home/home.component.js",
		icon: "file",
		description: "Component definition for the home page.",
	},
	{
		title: "app/components/home/home.controller.js",
		icon: "file",
		description: "Controller logic for the home component.",
	},
	{
		title: "app/components/home/home.html",
		icon: "file",
		description: "HTML template for the home component.",
	},
	{
		title: "app/components/home/home.css",
		icon: "file",
		description: "CSS styles specific to the home component.",
	},
	{
		title: "app/components/about/",
		icon: "folder",
		description:
			"Folder for the about component, containing its JavaScript, HTML, and CSS files.",
	},
	{
		title: "app/components/about/about.component.js",
		icon: "file",
		description: "Component definition for the about page.",
	},
	{
		title: "app/components/about/about.controller.js",
		icon: "file",
		description: "Controller logic for the about component.",
	},
	{
		title: "app/components/about/about.html",
		icon: "file",
		description: "HTML template for the about component.",
	},
	{
		title: "app/components/about/about.css",
		icon: "file",
		description: "CSS styles specific to the about component.",
	},
	{
		title: "app/services/",
		icon: "folder",
		description:
			"Houses service files that handle data and business logic separate from components.",
	},
	{
		title: "app/services/data.service.js",
		icon: "file",
		description: "Service file for handling data operations.",
	},
	{
		title: "app/services/auth.service.js",
		icon: "file",
		description:
			"Service file for handling authentication-related operations.",
	},
	{
		title: "app/filters/",
		icon: "folder",
		description:
			"Contains custom Angular.js filters used for data transformation in views.",
	},
	{
		title: "app/filters/custom.filter.js",
		icon: "file",
		description: "Custom filter for data transformation in views.",
	},
	{
		title: "app/directives/",
		icon: "folder",
		description:
			"Stores custom Angular.js directives for extending HTML with new attributes and elements.",
	},
	{
		title: "app/directives/custom.directive.js",
		icon: "file",
		description: "Custom directive for extending HTML functionality.",
	},
	{
		title: "app/shared/",
		icon: "folder",
		description:
			"Contains shared modules, constants, and other common utilities used across the application.",
	},
	{
		title: "app/shared/shared.module.js",
		icon: "file",
		description: "Defines a shared module with common dependencies.",
	},
	{
		title: "app/shared/constants.js",
		icon: "file",
		description: "Defines constant values used throughout the application.",
	},
	{
		title: "assets/",
		icon: "folder",
		description: "Stores static assets like images and fonts.",
	},
	{
		title: "assets/images/",
		icon: "folder",
		description: "Contains image files used in the application.",
	},
	{
		title: "assets/fonts/",
		icon: "folder",
		description: "Stores custom fonts used in the application.",
	},
	{
		title: "tests/",
		icon: "folder",
		description: "Contains unit and end-to-end tests for the application.",
	},
	{
		title: "tests/unit/",
		icon: "folder",
		description:
			"Houses unit tests for individual components and services.",
	},
	{
		title: "tests/e2e/",
		icon: "folder",
		description:
			"Contains end-to-end tests for testing the application as a whole.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"Defines the project dependencies and scripts for Node.js and npm.",
	},
	{
		title: "bower.json",
		icon: "file",
		description: "Specifies frontend dependencies managed by Bower.",
	},
	{
		title: "gulpfile.js",
		icon: "file",
		description:
			"Configuration file for Gulp, a task runner often used in Angular.js projects for automation.",
	},
	{
		title: "karma.conf.js",
		icon: "file",
		description:
			"Configuration file for Karma, the test runner for unit tests.",
	},
	{
		title: "protractor.conf.js",
		icon: "file",
		description:
			"Configuration file for Protractor, used for end-to-end testing.",
	},
	{
		title: ".gitignore",
		icon: "file",
		description:
			"Specifies files and directories that should be ignored by Git version control.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Documentation file providing an overview and instructions for the project.",
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
	{ label: "Angular.js", href: "/angular-js" },
] as const;

export default function AngularJsStructurePage() {
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
				title="Angular.js Project Structure"
				description="A scalable and maintainable folder structure for Angular.js applications"
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
