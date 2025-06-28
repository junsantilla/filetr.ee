import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "WordPress Plugin Development Structure",
	description:
		"A scalable and maintainable folder structure for WordPress plugin development",
	openGraph: {
		title: "WordPress Plugin Development Structure",
		description:
			"Learn how to structure your WordPress plugin for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/wordpress-plugin-development",
				width: 1200,
				height: 630,
				alt: "WordPress Plugin Development Structure Overview",
			},
		],
		url: "/wordpress-plugin-development",
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
	{ name: "my-plugin.php", type: "file" },
	{
		name: "includes",
		type: "folder",
		children: [
			{ name: "class-my-plugin.php", type: "file" },
			{ name: "functions.php", type: "file" },
		],
	},
	{
		name: "admin",
		type: "folder",
		children: [
			{ name: "admin-page.php", type: "file" },
		],
	},
	{
		name: "public",
		type: "folder",
		children: [
			{ name: "css", type: "folder" },
			{ name: "js", type: "folder" },
		],
	},
	{ name: "readme.txt", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{ name: "my-plugin.php", type: "file" },
	{ name: "uninstall.php", type: "file" },
	{
		name: "includes",
		type: "folder",
		children: [
			{ name: "class-my-plugin.php", type: "file" },
			{ name: "class-activator.php", type: "file" },
			{ name: "class-deactivator.php", type: "file" },
			{ name: "functions.php", type: "file" },
		],
	},
	{
		name: "admin",
		type: "folder",
		children: [
			{ name: "class-admin.php", type: "file" },
			{ name: "admin-page.php", type: "file" },
			{ name: "css", type: "folder" },
			{ name: "js", type: "folder" },
		],
	},
	{
		name: "public",
		type: "folder",
		children: [
			{ name: "class-public.php", type: "file" },
			{ name: "css", type: "folder" },
			{ name: "js", type: "folder" },
		],
	},
	{
		name: "languages",
		type: "folder",
		children: [
			{ name: "my-plugin.pot", type: "file" },
		],
	},
	{ name: "readme.txt", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{ name: "my-plugin.php", type: "file" },
	{ name: "uninstall.php", type: "file" },
	{
		name: "includes",
		type: "folder",
		children: [
			{ name: "class-my-plugin.php", type: "file" },
			{ name: "class-loader.php", type: "file" },
			{ name: "class-activator.php", type: "file" },
			{ name: "class-deactivator.php", type: "file" },
			{
				name: "core",
				type: "folder",
				children: [
					{ name: "class-database.php", type: "file" },
					{ name: "class-settings.php", type: "file" },
				],
			},
			{
				name: "api",
				type: "folder",
				children: [
					{ name: "class-rest-api.php", type: "file" },
					{ name: "endpoints", type: "folder" },
				],
			},
		],
	},
	{
		name: "admin",
		type: "folder",
		children: [
			{ name: "class-admin.php", type: "file" },
			{
				name: "pages",
				type: "folder",
				children: [
					{ name: "settings.php", type: "file" },
					{ name: "dashboard.php", type: "file" },
				],
			},
			{
				name: "partials",
				type: "folder",
				children: [
					{ name: "admin-display.php", type: "file" },
				],
			},
			{ name: "css", type: "folder" },
			{ name: "js", type: "folder" },
		],
	},
	{
		name: "public",
		type: "folder",
		children: [
			{ name: "class-public.php", type: "file" },
			{
				name: "partials",
				type: "folder",
				children: [
					{ name: "public-display.php", type: "file" },
				],
			},
			{ name: "css", type: "folder" },
			{ name: "js", type: "folder" },
		],
	},
	{
		name: "templates",
		type: "folder",
		children: [
			{ name: "single-custom-post.php", type: "file" },
			{ name: "archive-custom-post.php", type: "file" },
		],
	},
	{
		name: "widgets",
		type: "folder",
		children: [
			{ name: "class-custom-widget.php", type: "file" },
		],
	},
	{
		name: "shortcodes",
		type: "folder",
		children: [
			{ name: "class-shortcodes.php", type: "file" },
		],
	},
	{
		name: "languages",
		type: "folder",
		children: [
			{ name: "my-plugin.pot", type: "file" },
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
	{ name: "readme.txt", type: "file" },
	{ name: "CHANGELOG.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "my-plugin.php",
		icon: "file",
		description:
			"Main plugin file containing the plugin header and initialization code.",
	},
	{
		title: "includes/",
		icon: "folder",
		description:
			"Contains core plugin classes and functions that are loaded on both admin and public sides.",
	},
	{
		title: "includes/class-my-plugin.php",
		icon: "file",
		description:
			"Main plugin class that orchestrates the plugin functionality and initialization.",
	},
	{
		title: "admin/",
		icon: "folder",
		description:
			"Contains admin-specific functionality including admin pages and backend features.",
	},
	{
		title: "public/",
		icon: "folder",
		description:
			"Contains public-facing functionality including frontend styles and scripts.",
	},
	{
		title: "readme.txt",
		icon: "file",
		description:
			"WordPress plugin repository readme file with plugin information and installation instructions.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "uninstall.php",
		icon: "file",
		description:
			"Cleanup script that runs when the plugin is deleted, removing plugin data and options.",
	},
	{
		title: "includes/class-activator.php",
		icon: "file",
		description:
			"Handles plugin activation tasks like creating database tables and setting default options.",
	},
	{
		title: "includes/class-deactivator.php",
		icon: "file",
		description:
			"Handles plugin deactivation tasks and cleanup when the plugin is disabled.",
	},
	{
		title: "admin/class-admin.php",
		icon: "file",
		description:
			"Admin class that manages all admin-specific functionality and hooks.",
	},
	{
		title: "public/class-public.php",
		icon: "file",
		description:
			"Public class that manages all frontend functionality and public-facing features.",
	},
	{
		title: "languages/",
		icon: "folder",
		description:
			"Contains translation files for internationalization and localization support.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "includes/class-loader.php",
		icon: "file",
		description:
			"Loader class that manages hooks and filters registration for the plugin.",
	},
	{
		title: "includes/core/",
		icon: "folder",
		description:
			"Core plugin functionality including database operations and settings management.",
	},
	{
		title: "includes/api/",
		icon: "folder",
		description:
			"REST API functionality for exposing plugin data and operations via WordPress REST API.",
	},
	{
		title: "admin/pages/",
		icon: "folder",
		description:
			"Individual admin page files for different sections of the plugin admin interface.",
	},
	{
		title: "admin/partials/",
		icon: "folder",
		description:
			"Reusable admin template parts and partial views for the admin interface.",
	},
	{
		title: "public/partials/",
		icon: "folder",
		description:
			"Reusable frontend template parts and partial views for public display.",
	},
	{
		title: "templates/",
		icon: "folder",
		description:
			"Custom template files for post types and archives that override theme templates.",
	},
	{
		title: "widgets/",
		icon: "folder",
		description:
			"Custom WordPress widget classes for adding plugin functionality to widget areas.",
	},
	{
		title: "shortcodes/",
		icon: "folder",
		description:
			"Shortcode functionality for embedding plugin features in posts and pages.",
	},
	{
		title: "assets/",
		icon: "folder",
		description:
			"Static assets like images and fonts used by the plugin.",
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
	{ label: "WordPress Plugin Development", href: "/wordpress-plugin-development" },
] as const;

export default function WordPressPluginDevelopmentStructurePage() {
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
				title="WordPress Plugin Development Structure"
				description="A scalable and maintainable folder structure for WordPress plugin development"
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