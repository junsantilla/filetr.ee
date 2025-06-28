import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Flutter Project Structure",
	description:
		"A scalable and maintainable folder structure for Flutter applications",
	openGraph: {
		title: "Flutter Project Structure",
		description:
			"Learn how to structure your Flutter project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/flutter",
				width: 1200,
				height: 630,
				alt: "Flutter Project Structure Overview",
			},
		],
		url: "/flutter",
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
		name: "lib",
		type: "folder",
		children: [
			{ name: "main.dart", type: "file" },
			{
				name: "screens",
				type: "folder",
				children: [
					{ name: "home_screen.dart", type: "file" },
					{ name: "profile_screen.dart", type: "file" },
				],
			},
			{
				name: "widgets",
				type: "folder",
				children: [
					{ name: "custom_button.dart", type: "file" },
					{ name: "custom_card.dart", type: "file" },
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
	{ name: "pubspec.yaml", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "lib",
		type: "folder",
		children: [
			{ name: "main.dart", type: "file" },
			{
				name: "screens",
				type: "folder",
				children: [
					{ name: "home_screen.dart", type: "file" },
					{ name: "profile_screen.dart", type: "file" },
					{ name: "login_screen.dart", type: "file" },
				],
			},
			{
				name: "widgets",
				type: "folder",
				children: [
					{ name: "custom_button.dart", type: "file" },
					{ name: "custom_card.dart", type: "file" },
					{ name: "loading_widget.dart", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "user.dart", type: "file" },
					{ name: "post.dart", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "api_service.dart", type: "file" },
					{ name: "auth_service.dart", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "constants.dart", type: "file" },
					{ name: "helpers.dart", type: "file" },
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
			{ name: "icons", type: "folder" },
		],
	},
	{ name: "pubspec.yaml", type: "file" },
	{ name: "analysis_options.yaml", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "lib",
		type: "folder",
		children: [
			{ name: "main.dart", type: "file" },
			{
				name: "core",
				type: "folder",
				children: [
					{ name: "constants", type: "folder" },
					{ name: "errors", type: "folder" },
					{ name: "network", type: "folder" },
					{ name: "usecases", type: "folder" },
				],
			},
			{
				name: "features",
				type: "folder",
				children: [
					{
						name: "authentication",
						type: "folder",
						children: [
							{ name: "data", type: "folder" },
							{ name: "domain", type: "folder" },
							{ name: "presentation", type: "folder" },
						],
					},
					{
						name: "home",
						type: "folder",
						children: [
							{ name: "data", type: "folder" },
							{ name: "domain", type: "folder" },
							{ name: "presentation", type: "folder" },
						],
					},
				],
			},
			{
				name: "shared",
				type: "folder",
				children: [
					{ name: "widgets", type: "folder" },
					{ name: "utils", type: "folder" },
					{ name: "themes", type: "folder" },
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
			{ name: "icons", type: "folder" },
			{ name: "animations", type: "folder" },
		],
	},
	{
		name: "test",
		type: "folder",
		children: [
			{ name: "unit", type: "folder" },
			{ name: "widget", type: "folder" },
			{ name: "integration", type: "folder" },
		],
	},
	{ name: "pubspec.yaml", type: "file" },
	{ name: "analysis_options.yaml", type: "file" },
	{ name: "flutter_launcher_icons.yaml", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "lib/",
		icon: "folder",
		description:
			"The main source directory containing all Dart code for the Flutter application.",
	},
	{
		title: "lib/main.dart",
		icon: "file",
		description:
			"The entry point of the Flutter application where the app is initialized and run.",
	},
	{
		title: "lib/screens/",
		icon: "folder",
		description:
			"Contains the main screen widgets that represent different pages in the app.",
	},
	{
		title: "screens/home_screen.dart",
		icon: "file",
		description:
			"The home screen widget, typically the main landing page of the application.",
	},
	{
		title: "lib/widgets/",
		icon: "folder",
		description:
			"Contains reusable custom widgets that can be used across different screens.",
	},
	{
		title: "widgets/custom_button.dart",
		icon: "file",
		description:
			"A custom button widget with consistent styling and behavior.",
	},
	{
		title: "assets/",
		icon: "folder",
		description:
			"Contains static assets like images, fonts, and other resources used in the app.",
	},
	{
		title: "pubspec.yaml",
		icon: "file",
		description:
			"The package configuration file that defines dependencies, assets, and metadata.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "lib/models/",
		icon: "folder",
		description:
			"Contains data model classes that represent the structure of data used in the app.",
	},
	{
		title: "models/user.dart",
		icon: "file",
		description:
			"User model class defining the structure and methods for user data.",
	},
	{
		title: "lib/services/",
		icon: "folder",
		description:
			"Contains service classes that handle business logic and external API calls.",
	},
	{
		title: "services/api_service.dart",
		icon: "file",
		description:
			"Service class for making HTTP requests and handling API communication.",
	},
	{
		title: "services/auth_service.dart",
		icon: "file",
		description:
			"Service class for handling authentication logic and user sessions.",
	},
	{
		title: "lib/utils/",
		icon: "folder",
		description:
			"Contains utility classes and helper functions used throughout the application.",
	},
	{
		title: "utils/constants.dart",
		icon: "file",
		description:
			"Defines app-wide constants like colors, strings, and configuration values.",
	},
	{
		title: "analysis_options.yaml",
		icon: "file",
		description:
			"Configuration file for Dart analyzer to enforce code quality and style rules.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "lib/core/",
		icon: "folder",
		description:
			"Contains core functionality and infrastructure code used across the entire application.",
	},
	{
		title: "core/constants/",
		icon: "folder",
		description:
			"App-wide constants including API endpoints, colors, and configuration values.",
	},
	{
		title: "core/errors/",
		icon: "folder",
		description:
			"Error handling classes and custom exceptions for consistent error management.",
	},
	{
		title: "core/network/",
		icon: "folder",
		description:
			"Network layer implementation including HTTP clients and API configuration.",
	},
	{
		title: "lib/features/",
		icon: "folder",
		description:
			"Feature-based organization following Clean Architecture principles.",
	},
	{
		title: "features/authentication/",
		icon: "folder",
		description:
			"Complete authentication feature including data, domain, and presentation layers.",
	},
	{
		title: "authentication/data/",
		icon: "folder",
		description:
			"Data layer containing repositories, data sources, and models for authentication.",
	},
	{
		title: "authentication/domain/",
		icon: "folder",
		description:
			"Domain layer containing entities, use cases, and repository interfaces.",
	},
	{
		title: "authentication/presentation/",
		icon: "folder",
		description:
			"Presentation layer containing screens, widgets, and state management for authentication.",
	},
	{
		title: "lib/shared/",
		icon: "folder",
		description:
			"Shared components and utilities used across multiple features.",
	},
	{
		title: "shared/widgets/",
		icon: "folder",
		description:
			"Reusable widgets that can be used across different features and screens.",
	},
	{
		title: "shared/themes/",
		icon: "folder",
		description:
			"Theme configuration including colors, typography, and styling definitions.",
	},
	{
		title: "test/",
		icon: "folder",
		description:
			"Contains all test files organized by test type (unit, widget, integration).",
	},
	{
		title: "flutter_launcher_icons.yaml",
		icon: "file",
		description:
			"Configuration file for generating app icons for different platforms.",
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
	{ label: "Flutter", href: "/flutter" },
] as const;

export default function FlutterStructurePage() {
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
				title="Flutter Project Structure"
				description="A scalable and maintainable folder structure for Flutter applications"
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