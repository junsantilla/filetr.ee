import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Kotlin Project Structure",
	description:
		"A scalable and maintainable folder structure for Kotlin applications",
	openGraph: {
		title: "Kotlin Project Structure",
		description:
			"Learn how to structure your Kotlin project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/kotlin",
				width: 1200,
				height: 630,
				alt: "Kotlin Project Structure Overview",
			},
		],
		url: "/kotlin",
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
			{
				name: "src",
				type: "folder",
				children: [
					{
						name: "main",
						type: "folder",
						children: [
							{
								name: "java",
								type: "folder",
								children: [
									{
										name: "com",
										type: "folder",
										children: [
											{
												name: "example",
												type: "folder",
												children: [
													{
														name: "myapp",
														type: "folder",
														children: [
															{ name: "MainActivity.kt", type: "file" },
														],
													},
												],
											},
										],
									},
								],
							},
							{
								name: "res",
								type: "folder",
								children: [
									{ name: "layout", type: "folder" },
									{ name: "values", type: "folder" },
								],
							},
							{ name: "AndroidManifest.xml", type: "file" },
						],
					},
				],
			},
			{ name: "build.gradle", type: "file" },
		],
	},
	{ name: "build.gradle", type: "file" },
	{ name: "settings.gradle", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "app",
		type: "folder",
		children: [
			{
				name: "src",
				type: "folder",
				children: [
					{
						name: "main",
						type: "folder",
						children: [
							{
								name: "java",
								type: "folder",
								children: [
									{
										name: "com",
										type: "folder",
										children: [
											{
												name: "example",
												type: "folder",
												children: [
													{
														name: "myapp",
														type: "folder",
														children: [
															{ name: "MainActivity.kt", type: "file" },
															{
																name: "ui",
																type: "folder",
																children: [
																	{ name: "HomeFragment.kt", type: "file" },
																	{ name: "ProfileFragment.kt", type: "file" },
																],
															},
															{
																name: "data",
																type: "folder",
																children: [
																	{ name: "User.kt", type: "file" },
																	{ name: "Repository.kt", type: "file" },
																],
															},
															{
																name: "utils",
																type: "folder",
																children: [
																	{ name: "Constants.kt", type: "file" },
																	{ name: "Extensions.kt", type: "file" },
																],
															},
														],
													},
												],
											},
										],
									},
								],
							},
							{
								name: "res",
								type: "folder",
								children: [
									{ name: "layout", type: "folder" },
									{ name: "values", type: "folder" },
									{ name: "drawable", type: "folder" },
								],
							},
							{ name: "AndroidManifest.xml", type: "file" },
						],
					},
					{
						name: "test",
						type: "folder",
						children: [
							{ name: "java", type: "folder" },
						],
					},
				],
			},
			{ name: "build.gradle", type: "file" },
		],
	},
	{ name: "build.gradle", type: "file" },
	{ name: "settings.gradle", type: "file" },
	{ name: "gradle.properties", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "app",
		type: "folder",
		children: [
			{
				name: "src",
				type: "folder",
				children: [
					{
						name: "main",
						type: "folder",
						children: [
							{
								name: "java",
								type: "folder",
								children: [
									{
										name: "com",
										type: "folder",
										children: [
											{
												name: "example",
												type: "folder",
												children: [
													{
														name: "myapp",
														type: "folder",
														children: [
															{ name: "MyApplication.kt", type: "file" },
															{ name: "MainActivity.kt", type: "file" },
															{
																name: "di",
																type: "folder",
																children: [
																	{ name: "AppModule.kt", type: "file" },
																	{ name: "NetworkModule.kt", type: "file" },
																],
															},
															{
																name: "features",
																type: "folder",
																children: [
																	{
																		name: "home",
																		type: "folder",
																		children: [
																			{ name: "presentation", type: "folder" },
																			{ name: "domain", type: "folder" },
																			{ name: "data", type: "folder" },
																		],
																	},
																	{
																		name: "profile",
																		type: "folder",
																		children: [
																			{ name: "presentation", type: "folder" },
																			{ name: "domain", type: "folder" },
																			{ name: "data", type: "folder" },
																		],
																	},
																],
															},
															{
																name: "core",
																type: "folder",
																children: [
																	{ name: "network", type: "folder" },
																	{ name: "database", type: "folder" },
																	{ name: "utils", type: "folder" },
																],
															},
														],
													},
												],
											},
										],
									},
								],
							},
							{
								name: "res",
								type: "folder",
								children: [
									{ name: "layout", type: "folder" },
									{ name: "values", type: "folder" },
									{ name: "drawable", type: "folder" },
									{ name: "navigation", type: "folder" },
								],
							},
							{ name: "AndroidManifest.xml", type: "file" },
						],
					},
					{
						name: "test",
						type: "folder",
						children: [
							{ name: "java", type: "folder" },
						],
					},
					{
						name: "androidTest",
						type: "folder",
						children: [
							{ name: "java", type: "folder" },
						],
					},
				],
			},
			{ name: "build.gradle.kts", type: "file" },
			{ name: "proguard-rules.pro", type: "file" },
		],
	},
	{
		name: "buildSrc",
		type: "folder",
		children: [
			{ name: "Dependencies.kt", type: "file" },
			{ name: "Versions.kt", type: "file" },
		],
	},
	{ name: "build.gradle.kts", type: "file" },
	{ name: "settings.gradle.kts", type: "file" },
	{ name: "gradle.properties", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "app/",
		icon: "folder",
		description:
			"The main application module containing all source code and resources.",
	},
	{
		title: "src/main/java/",
		icon: "folder",
		description:
			"Contains the main Kotlin source files organized by package structure.",
	},
	{
		title: "MainActivity.kt",
		icon: "file",
		description:
			"The main activity class that serves as the entry point for the Android app.",
	},
	{
		title: "src/main/res/",
		icon: "folder",
		description:
			"Contains Android resources like layouts, strings, and drawables.",
	},
	{
		title: "AndroidManifest.xml",
		icon: "file",
		description:
			"Manifest file declaring app components, permissions, and configuration.",
	},
	{
		title: "build.gradle",
		icon: "file",
		description:
			"Gradle build script defining dependencies and build configuration.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "ui/",
		icon: "folder",
		description:
			"Contains UI-related classes like activities, fragments, and view models.",
	},
	{
		title: "data/",
		icon: "folder",
		description:
			"Contains data models, repositories, and data access logic.",
	},
	{
		title: "utils/",
		icon: "folder",
		description:
			"Contains utility classes, extensions, and helper functions.",
	},
	{
		title: "Constants.kt",
		icon: "file",
		description:
			"Defines application-wide constants and configuration values.",
	},
	{
		title: "Extensions.kt",
		icon: "file",
		description:
			"Kotlin extension functions for enhancing existing classes.",
	},
	{
		title: "src/test/",
		icon: "folder",
		description:
			"Contains unit tests for testing business logic and utilities.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "di/",
		icon: "folder",
		description:
			"Dependency injection modules using Dagger/Hilt for managing dependencies.",
	},
	{
		title: "features/",
		icon: "folder",
		description:
			"Feature-based organization following Clean Architecture principles.",
	},
	{
		title: "features/home/presentation/",
		icon: "folder",
		description:
			"Presentation layer containing UI components, view models, and composables.",
	},
	{
		title: "features/home/domain/",
		icon: "folder",
		description:
			"Domain layer containing use cases, entities, and repository interfaces.",
	},
	{
		title: "features/home/data/",
		icon: "folder",
		description:
			"Data layer containing repository implementations and data sources.",
	},
	{
		title: "core/",
		icon: "folder",
		description:
			"Core infrastructure shared across features including network and database.",
	},
	{
		title: "core/network/",
		icon: "folder",
		description:
			"Network layer implementation with API clients and interceptors.",
	},
	{
		title: "buildSrc/",
		icon: "folder",
		description:
			"Gradle build logic and dependency management using Kotlin DSL.",
	},
	{
		title: "Dependencies.kt",
		icon: "file",
		description:
			"Centralized dependency management for consistent versions across modules.",
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
	{ label: "Kotlin", href: "/kotlin" },
] as const;

export default function KotlinStructurePage() {
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
				title="Kotlin Project Structure"
				description="A scalable and maintainable folder structure for Kotlin applications"
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