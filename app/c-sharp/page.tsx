import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "C# Project Structure",
	description:
		"A scalable and maintainable folder structure for C# applications",
	openGraph: {
		title: "C# Project Structure",
		description:
			"Learn how to structure your C# project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/c-sharp",
				width: 1200,
				height: 630,
				alt: "C# Project Structure Overview",
			},
		],
		url: "/c-sharp",
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
			{ name: "Program.cs", type: "file" },
			{ name: "MyApp.csproj", type: "file" },
			{
				name: "Models",
				type: "folder",
				children: [
					{ name: "User.cs", type: "file" },
				],
			},
			{
				name: "Controllers",
				type: "folder",
				children: [
					{ name: "HomeController.cs", type: "file" },
				],
			},
		],
	},
	{ name: "MyApp.sln", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "MyApp",
		type: "folder",
		children: [
			{ name: "Program.cs", type: "file" },
			{ name: "Startup.cs", type: "file" },
			{ name: "MyApp.csproj", type: "file" },
			{
				name: "Controllers",
				type: "folder",
				children: [
					{ name: "HomeController.cs", type: "file" },
					{ name: "UserController.cs", type: "file" },
				],
			},
			{
				name: "Models",
				type: "folder",
				children: [
					{ name: "User.cs", type: "file" },
					{ name: "Post.cs", type: "file" },
				],
			},
			{
				name: "Services",
				type: "folder",
				children: [
					{ name: "UserService.cs", type: "file" },
					{ name: "IUserService.cs", type: "file" },
				],
			},
			{
				name: "Data",
				type: "folder",
				children: [
					{ name: "ApplicationDbContext.cs", type: "file" },
				],
			},
			{
				name: "Views",
				type: "folder",
				children: [
					{ name: "Home", type: "folder" },
					{ name: "Shared", type: "folder" },
				],
			},
			{
				name: "wwwroot",
				type: "folder",
				children: [
					{ name: "css", type: "folder" },
					{ name: "js", type: "folder" },
					{ name: "images", type: "folder" },
				],
			},
		],
	},
	{
		name: "MyApp.Tests",
		type: "folder",
		children: [
			{ name: "MyApp.Tests.csproj", type: "file" },
			{ name: "UserServiceTests.cs", type: "file" },
		],
	},
	{ name: "MyApp.sln", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "MyApp.Api",
				type: "folder",
				children: [
					{ name: "Program.cs", type: "file" },
					{ name: "Startup.cs", type: "file" },
					{ name: "MyApp.Api.csproj", type: "file" },
					{
						name: "Controllers",
						type: "folder",
						children: [
							{ name: "UsersController.cs", type: "file" },
							{ name: "AuthController.cs", type: "file" },
						],
					},
					{
						name: "Middleware",
						type: "folder",
						children: [
							{ name: "ExceptionMiddleware.cs", type: "file" },
							{ name: "AuthenticationMiddleware.cs", type: "file" },
						],
					},
					{
						name: "Extensions",
						type: "folder",
						children: [
							{ name: "ServiceCollectionExtensions.cs", type: "file" },
						],
					},
				],
			},
			{
				name: "MyApp.Core",
				type: "folder",
				children: [
					{ name: "MyApp.Core.csproj", type: "file" },
					{
						name: "Entities",
						type: "folder",
						children: [
							{ name: "User.cs", type: "file" },
							{ name: "Post.cs", type: "file" },
						],
					},
					{
						name: "Interfaces",
						type: "folder",
						children: [
							{ name: "IUserRepository.cs", type: "file" },
							{ name: "IUserService.cs", type: "file" },
						],
					},
					{
						name: "DTOs",
						type: "folder",
						children: [
							{ name: "UserDto.cs", type: "file" },
							{ name: "CreateUserRequest.cs", type: "file" },
						],
					},
				],
			},
			{
				name: "MyApp.Infrastructure",
				type: "folder",
				children: [
					{ name: "MyApp.Infrastructure.csproj", type: "file" },
					{
						name: "Data",
						type: "folder",
						children: [
							{ name: "ApplicationDbContext.cs", type: "file" },
							{ name: "Configurations", type: "folder" },
						],
					},
					{
						name: "Repositories",
						type: "folder",
						children: [
							{ name: "UserRepository.cs", type: "file" },
							{ name: "BaseRepository.cs", type: "file" },
						],
					},
					{
						name: "Services",
						type: "folder",
						children: [
							{ name: "UserService.cs", type: "file" },
							{ name: "EmailService.cs", type: "file" },
						],
					},
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{
				name: "MyApp.UnitTests",
				type: "folder",
				children: [
					{ name: "MyApp.UnitTests.csproj", type: "file" },
					{ name: "Services", type: "folder" },
					{ name: "Controllers", type: "folder" },
				],
			},
			{
				name: "MyApp.IntegrationTests",
				type: "folder",
				children: [
					{ name: "MyApp.IntegrationTests.csproj", type: "file" },
					{ name: "Api", type: "folder" },
				],
			},
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "api.md", type: "file" },
			{ name: "architecture.md", type: "file" },
		],
	},
	{ name: "MyApp.sln", type: "file" },
	{ name: "Directory.Build.props", type: "file" },
	{ name: "global.json", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "MyApp/",
		icon: "folder",
		description:
			"The main project folder containing all C# source files and project configuration.",
	},
	{
		title: "Program.cs",
		icon: "file",
		description:
			"The entry point of the application containing the Main method and application startup configuration.",
	},
	{
		title: "MyApp.csproj",
		icon: "file",
		description:
			"The project file defining dependencies, target framework, and build settings.",
	},
	{
		title: "Models/",
		icon: "folder",
		description:
			"Contains data model classes representing business entities and database tables.",
	},
	{
		title: "Controllers/",
		icon: "folder",
		description:
			"Contains controller classes that handle HTTP requests and return responses.",
	},
	{
		title: "MyApp.sln",
		icon: "file",
		description:
			"The solution file that groups related projects and defines build configurations.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "Startup.cs",
		icon: "file",
		description:
			"Configures services and the application's request pipeline (in older .NET versions).",
	},
	{
		title: "Services/",
		icon: "folder",
		description:
			"Contains service classes that implement business logic and data operations.",
	},
	{
		title: "IUserService.cs",
		icon: "file",
		description:
			"Interface defining the contract for user service operations, promoting loose coupling.",
	},
	{
		title: "Data/",
		icon: "folder",
		description:
			"Contains Entity Framework DbContext and database-related configurations.",
	},
	{
		title: "Views/",
		icon: "folder",
		description:
			"Contains Razor view files for rendering HTML in MVC applications.",
	},
	{
		title: "wwwroot/",
		icon: "folder",
		description:
			"Contains static web assets like CSS, JavaScript, and images served directly to clients.",
	},
	{
		title: "MyApp.Tests/",
		icon: "folder",
		description:
			"Separate test project containing unit tests for the main application.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"Source code directory organizing projects by architectural layers and concerns.",
	},
	{
		title: "MyApp.Api/",
		icon: "folder",
		description:
			"Web API project containing controllers, middleware, and HTTP-related logic.",
	},
	{
		title: "MyApp.Core/",
		icon: "folder",
		description:
			"Core business logic project containing entities, interfaces, and DTOs without external dependencies.",
	},
	{
		title: "MyApp.Infrastructure/",
		icon: "folder",
		description:
			"Infrastructure project containing data access, external services, and implementation details.",
	},
	{
		title: "Core/Entities/",
		icon: "folder",
		description:
			"Domain entities representing core business objects with behavior and rules.",
	},
	{
		title: "Core/Interfaces/",
		icon: "folder",
		description:
			"Contracts and abstractions that define how different layers interact.",
	},
	{
		title: "Core/DTOs/",
		icon: "folder",
		description:
			"Data Transfer Objects for API communication, separate from domain entities.",
	},
	{
		title: "Infrastructure/Repositories/",
		icon: "folder",
		description:
			"Repository pattern implementations for data access and persistence.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Test projects organized by test type (unit, integration) for comprehensive testing.",
	},
	{
		title: "Directory.Build.props",
		icon: "file",
		description:
			"MSBuild properties file that applies common settings across all projects in the solution.",
	},
	{
		title: "global.json",
		icon: "file",
		description:
			"Specifies the .NET SDK version and global settings for the solution.",
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
	{ label: "C#", href: "/c-sharp" },
] as const;

export default function CSharpStructurePage() {
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
				title="C# Project Structure"
				description="A scalable and maintainable folder structure for C# applications"
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