import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "ASP.NET Project Structure",
	description:
		"A scalable and maintainable folder structure for ASP.NET applications",
	openGraph: {
		title: "ASP.NET Project Structure",
		description:
			"Learn how to structure your ASP.NET project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/asp-net",
				width: 1200,
				height: 630,
				alt: "ASP.NET Project Structure Overview",
			},
		],
		url: "/asp-net",
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
		name: "MyWebApp",
		type: "folder",
		children: [
			{ name: "Program.cs", type: "file" },
			{ name: "Startup.cs", type: "file" },
			{ name: "MyWebApp.csproj", type: "file" },
			{
				name: "Controllers",
				type: "folder",
				children: [
					{ name: "HomeController.cs", type: "file" },
				],
			},
			{
				name: "Models",
				type: "folder",
				children: [
					{ name: "ErrorViewModel.cs", type: "file" },
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
					{ name: "lib", type: "folder" },
				],
			},
		],
	},
	{ name: "MyWebApp.sln", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "MyWebApp",
		type: "folder",
		children: [
			{ name: "Program.cs", type: "file" },
			{ name: "Startup.cs", type: "file" },
			{ name: "MyWebApp.csproj", type: "file" },
			{
				name: "Controllers",
				type: "folder",
				children: [
					{ name: "HomeController.cs", type: "file" },
					{ name: "AccountController.cs", type: "file" },
				],
			},
			{
				name: "Models",
				type: "folder",
				children: [
					{ name: "User.cs", type: "file" },
					{ name: "LoginViewModel.cs", type: "file" },
				],
			},
			{
				name: "Views",
				type: "folder",
				children: [
					{ name: "Home", type: "folder" },
					{ name: "Account", type: "folder" },
					{ name: "Shared", type: "folder" },
				],
			},
			{
				name: "Services",
				type: "folder",
				children: [
					{ name: "IUserService.cs", type: "file" },
					{ name: "UserService.cs", type: "file" },
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
	{ name: "MyWebApp.sln", type: "file" },
	{ name: "appsettings.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "MyWebApp.Web",
				type: "folder",
				children: [
					{ name: "Program.cs", type: "file" },
					{ name: "Startup.cs", type: "file" },
					{ name: "MyWebApp.Web.csproj", type: "file" },
					{
						name: "Controllers",
						type: "folder",
						children: [
							{ name: "HomeController.cs", type: "file" },
							{ name: "ApiController.cs", type: "file" },
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
						],
					},
				],
			},
			{
				name: "MyWebApp.Core",
				type: "folder",
				children: [
					{ name: "MyWebApp.Core.csproj", type: "file" },
					{
						name: "Entities",
						type: "folder",
						children: [
							{ name: "User.cs", type: "file" },
							{ name: "BaseEntity.cs", type: "file" },
						],
					},
					{
						name: "Interfaces",
						type: "folder",
						children: [
							{ name: "IRepository.cs", type: "file" },
							{ name: "IUserService.cs", type: "file" },
						],
					},
					{
						name: "Services",
						type: "folder",
						children: [
							{ name: "UserService.cs", type: "file" },
						],
					},
				],
			},
			{
				name: "MyWebApp.Infrastructure",
				type: "folder",
				children: [
					{ name: "MyWebApp.Infrastructure.csproj", type: "file" },
					{
						name: "Data",
						type: "folder",
						children: [
							{ name: "ApplicationDbContext.cs", type: "file" },
							{ name: "Repositories", type: "folder" },
						],
					},
					{
						name: "Services",
						type: "folder",
						children: [
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
			{ name: "MyWebApp.UnitTests", type: "folder" },
			{ name: "MyWebApp.IntegrationTests", type: "folder" },
		],
	},
	{ name: "MyWebApp.sln", type: "file" },
	{ name: "Directory.Build.props", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "MyWebApp/",
		icon: "folder",
		description:
			"The main web application project containing all ASP.NET Core components.",
	},
	{
		title: "Program.cs",
		icon: "file",
		description:
			"The entry point of the ASP.NET Core application containing the Main method and host configuration.",
	},
	{
		title: "Startup.cs",
		icon: "file",
		description:
			"Configures services and the application's request pipeline (in older .NET versions).",
	},
	{
		title: "Controllers/",
		icon: "folder",
		description:
			"Contains MVC controllers that handle HTTP requests and return responses.",
	},
	{
		title: "Models/",
		icon: "folder",
		description:
			"Contains view models and data models used by the application.",
	},
	{
		title: "Views/",
		icon: "folder",
		description:
			"Contains Razor view files organized by controller for rendering HTML.",
	},
	{
		title: "wwwroot/",
		icon: "folder",
		description:
			"Contains static web assets like CSS, JavaScript, and images served directly to clients.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "Services/",
		icon: "folder",
		description:
			"Contains service classes and interfaces that implement business logic.",
	},
	{
		title: "Data/",
		icon: "folder",
		description:
			"Contains Entity Framework DbContext and database-related configurations.",
	},
	{
		title: "appsettings.json",
		icon: "file",
		description:
			"Configuration file containing application settings and connection strings.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"Source code directory organizing projects by architectural layers.",
	},
	{
		title: "MyWebApp.Web/",
		icon: "folder",
		description:
			"Web layer containing controllers, views, and web-specific logic.",
	},
	{
		title: "MyWebApp.Core/",
		icon: "folder",
		description:
			"Core business logic layer containing entities, interfaces, and services without external dependencies.",
	},
	{
		title: "MyWebApp.Infrastructure/",
		icon: "folder",
		description:
			"Infrastructure layer containing data access, external services, and implementation details.",
	},
	{
		title: "Directory.Build.props",
		icon: "file",
		description:
			"MSBuild properties file that applies common settings across all projects in the solution.",
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
	{ label: "ASP.NET", href: "/asp-net" },
] as const;

export default function AspNetStructurePage() {
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
				title="ASP.NET Project Structure"
				description="A scalable and maintainable folder structure for ASP.NET applications"
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