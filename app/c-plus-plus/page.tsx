import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "C++ Project Structure",
	description:
		"A scalable and maintainable folder structure for C++ applications",
	openGraph: {
		title: "C++ Project Structure",
		description:
			"Learn how to structure your C++ project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/c-plus-plus",
				width: 1200,
				height: 630,
				alt: "C++ Project Structure Overview",
			},
		],
		url: "/c-plus-plus",
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
			{ name: "main.cpp", type: "file" },
			{ name: "utils.cpp", type: "file" },
			{ name: "utils.h", type: "file" },
		],
	},
	{
		name: "include",
		type: "folder",
		children: [
			{ name: "myapp.h", type: "file" },
		],
	},
	{ name: "Makefile", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "main.cpp", type: "file" },
			{
				name: "core",
				type: "folder",
				children: [
					{ name: "application.cpp", type: "file" },
					{ name: "application.h", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "string_utils.cpp", type: "file" },
					{ name: "string_utils.h", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "user.cpp", type: "file" },
					{ name: "user.h", type: "file" },
				],
			},
		],
	},
	{
		name: "include",
		type: "folder",
		children: [
			{ name: "myapp", type: "folder" },
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "test_main.cpp", type: "file" },
			{ name: "test_utils.cpp", type: "file" },
		],
	},
	{
		name: "build",
		type: "folder",
	},
	{ name: "CMakeLists.txt", type: "file" },
	{ name: "Makefile", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "main.cpp", type: "file" },
			{
				name: "core",
				type: "folder",
				children: [
					{ name: "application.cpp", type: "file" },
					{ name: "application.h", type: "file" },
					{ name: "engine.cpp", type: "file" },
					{ name: "engine.h", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "string_utils.cpp", type: "file" },
					{ name: "string_utils.h", type: "file" },
					{ name: "file_utils.cpp", type: "file" },
					{ name: "file_utils.h", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "user.cpp", type: "file" },
					{ name: "user.h", type: "file" },
					{ name: "database.cpp", type: "file" },
					{ name: "database.h", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "user_service.cpp", type: "file" },
					{ name: "user_service.h", type: "file" },
				],
			},
			{
				name: "network",
				type: "folder",
				children: [
					{ name: "http_client.cpp", type: "file" },
					{ name: "http_client.h", type: "file" },
				],
			},
		],
	},
	{
		name: "include",
		type: "folder",
		children: [
			{
				name: "myapp",
				type: "folder",
				children: [
					{ name: "core", type: "folder" },
					{ name: "utils", type: "folder" },
					{ name: "models", type: "folder" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "unit", type: "folder" },
			{ name: "integration", type: "folder" },
			{ name: "CMakeLists.txt", type: "file" },
		],
	},
	{
		name: "third_party",
		type: "folder",
		children: [
			{ name: "googletest", type: "folder" },
			{ name: "json", type: "folder" },
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "api.md", type: "file" },
			{ name: "build.md", type: "file" },
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "build.sh", type: "file" },
			{ name: "test.sh", type: "file" },
		],
	},
	{
		name: "build",
		type: "folder",
	},
	{ name: "CMakeLists.txt", type: "file" },
	{ name: "conanfile.txt", type: "file" },
	{ name: ".clang-format", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"Contains the main C++ source files (.cpp) and header files (.h) for the application.",
	},
	{
		title: "main.cpp",
		icon: "file",
		description:
			"The entry point of the C++ application containing the main() function.",
	},
	{
		title: "utils.cpp",
		icon: "file",
		description:
			"Implementation file containing utility functions used throughout the application.",
	},
	{
		title: "utils.h",
		icon: "file",
		description:
			"Header file declaring utility functions and their interfaces.",
	},
	{
		title: "include/",
		icon: "folder",
		description:
			"Contains public header files that can be included by other projects or modules.",
	},
	{
		title: "Makefile",
		icon: "file",
		description:
			"Build configuration file defining compilation rules and dependencies.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/core/",
		icon: "folder",
		description:
			"Contains core application logic and main classes that drive the application.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"Contains utility classes and functions organized by functionality.",
	},
	{
		title: "src/models/",
		icon: "folder",
		description:
			"Contains data model classes representing business entities and data structures.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Contains unit tests and test utilities for verifying application functionality.",
	},
	{
		title: "build/",
		icon: "folder",
		description:
			"Output directory for compiled binaries, object files, and build artifacts.",
	},
	{
		title: "CMakeLists.txt",
		icon: "file",
		description:
			"CMake build configuration file for cross-platform build management.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/services/",
		icon: "folder",
		description:
			"Contains service classes that implement business logic and coordinate between different components.",
	},
	{
		title: "src/network/",
		icon: "folder",
		description:
			"Contains networking-related classes for HTTP clients, servers, and communication protocols.",
	},
	{
		title: "include/myapp/",
		icon: "folder",
		description:
			"Organized public headers by module, providing clean API interfaces for external use.",
	},
	{
		title: "tests/unit/",
		icon: "folder",
		description:
			"Unit tests for individual classes and functions, testing components in isolation.",
	},
	{
		title: "tests/integration/",
		icon: "folder",
		description:
			"Integration tests that verify the interaction between multiple components.",
	},
	{
		title: "third_party/",
		icon: "folder",
		description:
			"External dependencies and third-party libraries included as submodules or source.",
	},
	{
		title: "docs/",
		icon: "folder",
		description:
			"Project documentation including API documentation and build instructions.",
	},
	{
		title: "scripts/",
		icon: "folder",
		description:
			"Build and utility scripts for automating common development tasks.",
	},
	{
		title: "conanfile.txt",
		icon: "file",
		description:
			"Conan package manager configuration for managing C++ dependencies.",
	},
	{
		title: ".clang-format",
		icon: "file",
		description:
			"Code formatting configuration for consistent code style across the project.",
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
	{ label: "C++", href: "/c-plus-plus" },
] as const;

export default function CPlusPlusStructurePage() {
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
				title="C++ Project Structure"
				description="A scalable and maintainable folder structure for C++ applications"
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