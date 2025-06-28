import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Swift Project Structure",
	description:
		"A scalable and maintainable folder structure for Swift applications",
	openGraph: {
		title: "Swift Project Structure",
		description:
			"Learn how to structure your Swift project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/swift",
				width: 1200,
				height: 630,
				alt: "Swift Project Structure Overview",
			},
		],
		url: "/swift",
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
		name: "MyApp",
		type: "folder",
		children: [
			{ name: "AppDelegate.swift", type: "file" },
			{ name: "SceneDelegate.swift", type: "file" },
			{ name: "ViewController.swift", type: "file" },
			{ name: "Main.storyboard", type: "file" },
			{ name: "LaunchScreen.storyboard", type: "file" },
			{ name: "Info.plist", type: "file" },
		],
	},
	{ name: "MyApp.xcodeproj", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "MyApp",
		type: "folder",
		children: [
			{ name: "AppDelegate.swift", type: "file" },
			{ name: "SceneDelegate.swift", type: "file" },
			{
				name: "ViewControllers",
				type: "folder",
				children: [
					{ name: "HomeViewController.swift", type: "file" },
					{ name: "ProfileViewController.swift", type: "file" },
				],
			},
			{
				name: "Models",
				type: "folder",
				children: [
					{ name: "User.swift", type: "file" },
					{ name: "Post.swift", type: "file" },
				],
			},
			{
				name: "Views",
				type: "folder",
				children: [
					{ name: "CustomButton.swift", type: "file" },
					{ name: "UserCell.swift", type: "file" },
				],
			},
			{
				name: "Storyboards",
				type: "folder",
				children: [
					{ name: "Main.storyboard", type: "file" },
					{ name: "LaunchScreen.storyboard", type: "file" },
				],
			},
			{
				name: "Resources",
				type: "folder",
				children: [
					{ name: "Assets.xcassets", type: "folder" },
					{ name: "Info.plist", type: "file" },
				],
			},
		],
	},
	{ name: "MyApp.xcodeproj", type: "file" },
	{ name: "Podfile", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "MyApp",
		type: "folder",
		children: [
			{ name: "AppDelegate.swift", type: "file" },
			{ name: "SceneDelegate.swift", type: "file" },
			{
				name: "Modules",
				type: "folder",
				children: [
					{
						name: "Home",
						type: "folder",
						children: [
							{ name: "HomeViewController.swift", type: "file" },
							{ name: "HomeViewModel.swift", type: "file" },
							{ name: "HomeView.swift", type: "file" },
						],
					},
					{
						name: "Profile",
						type: "folder",
						children: [
							{ name: "ProfileViewController.swift", type: "file" },
							{ name: "ProfileViewModel.swift", type: "file" },
							{ name: "ProfileView.swift", type: "file" },
						],
					},
				],
			},
			{
				name: "Core",
				type: "folder",
				children: [
					{ name: "Models", type: "folder" },
					{ name: "Services", type: "folder" },
					{ name: "Networking", type: "folder" },
					{ name: "Extensions", type: "folder" },
				],
			},
			{
				name: "UI",
				type: "folder",
				children: [
					{ name: "Components", type: "folder" },
					{ name: "Styles", type: "folder" },
				],
			},
			{
				name: "Resources",
				type: "folder",
				children: [
					{ name: "Assets.xcassets", type: "folder" },
					{ name: "Fonts", type: "folder" },
					{ name: "Localizable.strings", type: "file" },
					{ name: "Info.plist", type: "file" },
				],
			},
		],
	},
	{
		name: "MyAppTests",
		type: "folder",
		children: [
			{ name: "UnitTests", type: "folder" },
			{ name: "UITests", type: "folder" },
		],
	},
	{ name: "MyApp.xcodeproj", type: "file" },
	{ name: "MyApp.xcworkspace", type: "file" },
	{ name: "Podfile", type: "file" },
	{ name: "Package.swift", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "MyApp/",
		icon: "folder",
		description:
			"The main application target folder containing all Swift source files and resources.",
	},
	{
		title: "AppDelegate.swift",
		icon: "file",
		description:
			"The application delegate that handles app lifecycle events and configuration.",
	},
	{
		title: "SceneDelegate.swift",
		icon: "file",
		description:
			"Manages the app's UI scenes and handles scene lifecycle events (iOS 13+).",
	},
	{
		title: "ViewController.swift",
		icon: "file",
		description:
			"The main view controller containing the app's primary user interface logic.",
	},
	{
		title: "Main.storyboard",
		icon: "file",
		description:
			"The main storyboard file defining the app's user interface layout and navigation.",
	},
	{
		title: "Info.plist",
		icon: "file",
		description:
			"Property list file containing app configuration and metadata.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "ViewControllers/",
		icon: "folder",
		description:
			"Contains view controller classes organized by feature or screen.",
	},
	{
		title: "Models/",
		icon: "folder",
		description:
			"Contains data model classes and structures representing business entities.",
	},
	{
		title: "Views/",
		icon: "folder",
		description:
			"Contains custom view classes and UI components for reuse across the app.",
	},
	{
		title: "Storyboards/",
		icon: "folder",
		description:
			"Contains storyboard files organized by feature or section of the app.",
	},
	{
		title: "Resources/",
		icon: "folder",
		description:
			"Contains app resources like images, fonts, and configuration files.",
	},
	{
		title: "Assets.xcassets",
		icon: "folder",
		description:
			"Asset catalog containing images, colors, and other visual resources.",
	},
	{
		title: "Podfile",
		icon: "file",
		description:
			"CocoaPods dependency management file specifying third-party libraries.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "Modules/",
		icon: "folder",
		description:
			"Feature-based organization following MVVM or VIPER architecture patterns.",
	},
	{
		title: "Modules/Home/",
		icon: "folder",
		description:
			"Complete home feature module with view controller, view model, and view.",
	},
	{
		title: "Core/",
		icon: "folder",
		description:
			"Core functionality and infrastructure shared across the entire application.",
	},
	{
		title: "Core/Services/",
		icon: "folder",
		description:
			"Service classes handling business logic, API calls, and data management.",
	},
	{
		title: "Core/Networking/",
		icon: "folder",
		description:
			"Network layer implementation including API clients and request handling.",
	},
	{
		title: "Core/Extensions/",
		icon: "folder",
		description:
			"Swift extensions adding functionality to existing classes and types.",
	},
	{
		title: "UI/",
		icon: "folder",
		description:
			"User interface components and styling organized for reusability.",
	},
	{
		title: "UI/Components/",
		icon: "folder",
		description:
			"Reusable UI components and custom views used throughout the app.",
	},
	{
		title: "MyAppTests/",
		icon: "folder",
		description:
			"Test target containing unit tests and UI tests for the application.",
	},
	{
		title: "Package.swift",
		icon: "file",
		description:
			"Swift Package Manager manifest file for managing dependencies.",
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
	{ label: "Swift", href: "/swift" },
] as const;

export default function SwiftStructurePage() {
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
				title="Swift Project Structure"
				description="A scalable and maintainable folder structure for Swift applications"
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