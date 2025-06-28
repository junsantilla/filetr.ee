import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Electron.js Apps Structure",
	description:
		"A scalable and maintainable folder structure for Electron.js applications",
	openGraph: {
		title: "Electron.js Apps Structure",
		description:
			"Learn how to structure your Electron.js app for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/electron-js-apps",
				width: 1200,
				height: 630,
				alt: "Electron.js Apps Structure Overview",
			},
		],
		url: "/electron-js-apps",
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
			{ name: "main.js", type: "file" },
			{ name: "renderer.js", type: "file" },
			{ name: "preload.js", type: "file" },
		],
	},
	{ name: "index.html", type: "file" },
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "main",
				type: "folder",
				children: [
					{ name: "main.js", type: "file" },
					{ name: "menu.js", type: "file" },
					{ name: "window.js", type: "file" },
				],
			},
			{
				name: "renderer",
				type: "folder",
				children: [
					{ name: "index.html", type: "file" },
					{ name: "renderer.js", type: "file" },
					{ name: "styles.css", type: "file" },
				],
			},
			{
				name: "preload",
				type: "folder",
				children: [
					{ name: "preload.js", type: "file" },
				],
			},
			{
				name: "shared",
				type: "folder",
				children: [
					{ name: "constants.js", type: "file" },
					{ name: "utils.js", type: "file" },
				],
			},
		],
	},
	{
		name: "assets",
		type: "folder",
		children: [
			{ name: "icons", type: "folder" },
			{ name: "images", type: "folder" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "electron-builder.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "main",
				type: "folder",
				children: [
					{ name: "main.js", type: "file" },
					{ name: "menu.js", type: "file" },
					{ name: "window-manager.js", type: "file" },
					{ name: "app-updater.js", type: "file" },
					{
						name: "services",
						type: "folder",
						children: [
							{ name: "file-service.js", type: "file" },
							{ name: "settings-service.js", type: "file" },
						],
					},
				],
			},
			{
				name: "renderer",
				type: "folder",
				children: [
					{
						name: "windows",
						type: "folder",
						children: [
							{ name: "main", type: "folder" },
							{ name: "settings", type: "folder" },
							{ name: "about", type: "folder" },
						],
					},
					{
						name: "components",
						type: "folder",
						children: [
							{ name: "sidebar.js", type: "file" },
							{ name: "toolbar.js", type: "file" },
						],
					},
					{
						name: "utils",
						type: "folder",
						children: [
							{ name: "ipc-renderer.js", type: "file" },
							{ name: "dom-utils.js", type: "file" },
						],
					},
				],
			},
			{
				name: "preload",
				type: "folder",
				children: [
					{ name: "main-preload.js", type: "file" },
					{ name: "settings-preload.js", type: "file" },
				],
			},
			{
				name: "shared",
				type: "folder",
				children: [
					{ name: "constants.js", type: "file" },
					{ name: "ipc-channels.js", type: "file" },
					{ name: "types.js", type: "file" },
				],
			},
		],
	},
	{
		name: "assets",
		type: "folder",
		children: [
			{
				name: "icons",
				type: "folder",
				children: [
					{ name: "app-icon.png", type: "file" },
					{ name: "tray-icon.png", type: "file" },
				],
			},
			{ name: "images", type: "folder" },
			{ name: "fonts", type: "folder" },
		],
	},
	{
		name: "build",
		type: "folder",
		children: [
			{ name: "icon.png", type: "file" },
			{ name: "background.png", type: "file" },
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "build.js", type: "file" },
			{ name: "dev.js", type: "file" },
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "main.test.js", type: "file" },
			{ name: "renderer.test.js", type: "file" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "electron-builder.json", type: "file" },
	{ name: "forge.config.js", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"Contains all source code for the Electron application including main and renderer processes.",
	},
	{
		title: "src/main.js",
		icon: "file",
		description:
			"Main process entry point that creates and manages application windows and handles system events.",
	},
	{
		title: "src/renderer.js",
		icon: "file",
		description:
			"Renderer process script that handles UI logic and user interactions in the browser window.",
	},
	{
		title: "src/preload.js",
		icon: "file",
		description:
			"Preload script that runs before the renderer process and provides secure communication between main and renderer.",
	},
	{
		title: "index.html",
		icon: "file",
		description:
			"Main HTML file that serves as the user interface for the Electron application.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/main/",
		icon: "folder",
		description:
			"Main process code organized into separate modules for better maintainability.",
	},
	{
		title: "main/menu.js",
		icon: "file",
		description:
			"Application menu configuration and menu item handlers.",
	},
	{
		title: "main/window.js",
		icon: "file",
		description:
			"Window creation and management utilities for the main process.",
	},
	{
		title: "src/renderer/",
		icon: "folder",
		description:
			"Renderer process code including HTML, CSS, and JavaScript for the user interface.",
	},
	{
		title: "src/shared/",
		icon: "folder",
		description:
			"Code shared between main and renderer processes including constants and utilities.",
	},
	{
		title: "assets/",
		icon: "folder",
		description:
			"Static assets like icons and images used throughout the application.",
	},
	{
		title: "electron-builder.json",
		icon: "file",
		description:
			"Configuration file for electron-builder to package and distribute the application.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "main/window-manager.js",
		icon: "file",
		description:
			"Advanced window management including multiple windows, window state persistence, and window communication.",
	},
	{
		title: "main/app-updater.js",
		icon: "file",
		description:
			"Auto-updater functionality for handling application updates and notifications.",
	},
	{
		title: "main/services/",
		icon: "folder",
		description:
			"Service layer for main process including file operations, settings management, and system integration.",
	},
	{
		title: "renderer/windows/",
		icon: "folder",
		description:
			"Multiple window implementations with each window having its own HTML, CSS, and JavaScript.",
	},
	{
		title: "renderer/components/",
		icon: "folder",
		description:
			"Reusable UI components for the renderer process.",
	},
	{
		title: "preload/main-preload.js",
		icon: "file",
		description:
			"Main window preload script with specific API exposure for the main window.",
	},
	{
		title: "shared/ipc-channels.js",
		icon: "file",
		description:
			"Centralized IPC channel definitions for communication between main and renderer processes.",
	},
	{
		title: "build/",
		icon: "folder",
		description:
			"Build-specific assets like application icons and installer backgrounds.",
	},
	{
		title: "scripts/",
		icon: "folder",
		description:
			"Build and development scripts for automation and workflow management.",
	},
	{
		title: "forge.config.js",
		icon: "file",
		description:
			"Electron Forge configuration for advanced packaging and distribution options.",
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
	{ label: "Electron.js Apps", href: "/electron-js-apps" },
] as const;

export default function ElectronJsAppsStructurePage() {
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
				title="Electron.js Apps Structure"
				description="A scalable and maintainable folder structure for Electron.js applications"
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