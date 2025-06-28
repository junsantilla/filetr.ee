import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Java Project Structure",
	description:
		"A scalable and maintainable folder structure for Java applications",
	openGraph: {
		title: "Java Project Structure",
		description:
			"Learn how to structure your Java project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/java",
				width: 1200,
				height: 630,
				alt: "Java Project Structure Overview",
			},
		],
		url: "/java",
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
													{ name: "Main.java", type: "file" },
													{ name: "User.java", type: "file" },
												],
											},
										],
									},
								],
							},
						],
					},
					{
						name: "resources",
						type: "folder",
						children: [
							{ name: "application.properties", type: "file" },
						],
					},
				],
			},
		],
	},
	{ name: "pom.xml", type: "file" },
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
													{ name: "Application.java", type: "file" },
													{
														name: "controller",
														type: "folder",
														children: [
															{ name: "UserController.java", type: "file" },
														],
													},
													{
														name: "service",
														type: "folder",
														children: [
															{ name: "UserService.java", type: "file" },
														],
													},
													{
														name: "model",
														type: "folder",
														children: [
															{ name: "User.java", type: "file" },
														],
													},
													{
														name: "repository",
														type: "folder",
														children: [
															{ name: "UserRepository.java", type: "file" },
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
						name: "resources",
						type: "folder",
						children: [
							{ name: "application.properties", type: "file" },
							{ name: "static", type: "folder" },
							{ name: "templates", type: "folder" },
						],
					},
				],
			},
			{
				name: "test",
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
													{ name: "UserServiceTest.java", type: "file" },
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
		],
	},
	{ name: "pom.xml", type: "file" },
	{ name: ".gitignore", type: "file" },
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
													{ name: "Application.java", type: "file" },
													{
														name: "config",
														type: "folder",
														children: [
															{ name: "DatabaseConfig.java", type: "file" },
															{ name: "SecurityConfig.java", type: "file" },
														],
													},
													{
														name: "controller",
														type: "folder",
														children: [
															{ name: "UserController.java", type: "file" },
															{ name: "AuthController.java", type: "file" },
														],
													},
													{
														name: "service",
														type: "folder",
														children: [
															{ name: "UserService.java", type: "file" },
															{ name: "AuthService.java", type: "file" },
															{
																name: "impl",
																type: "folder",
																children: [
																	{ name: "UserServiceImpl.java", type: "file" },
																],
															},
														],
													},
													{
														name: "model",
														type: "folder",
														children: [
															{ name: "User.java", type: "file" },
															{ name: "Role.java", type: "file" },
														],
													},
													{
														name: "repository",
														type: "folder",
														children: [
															{ name: "UserRepository.java", type: "file" },
															{ name: "RoleRepository.java", type: "file" },
														],
													},
													{
														name: "dto",
														type: "folder",
														children: [
															{ name: "UserDto.java", type: "file" },
															{ name: "CreateUserRequest.java", type: "file" },
														],
													},
													{
														name: "exception",
														type: "folder",
														children: [
															{ name: "UserNotFoundException.java", type: "file" },
															{ name: "GlobalExceptionHandler.java", type: "file" },
														],
													},
													{
														name: "util",
														type: "folder",
														children: [
															{ name: "DateUtils.java", type: "file" },
															{ name: "ValidationUtils.java", type: "file" },
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
						name: "resources",
						type: "folder",
						children: [
							{ name: "application.yml", type: "file" },
							{ name: "application-dev.yml", type: "file" },
							{ name: "application-prod.yml", type: "file" },
							{ name: "static", type: "folder" },
							{ name: "templates", type: "folder" },
							{
								name: "db",
								type: "folder",
								children: [
									{ name: "migration", type: "folder" },
								],
							},
						],
					},
				],
			},
			{
				name: "test",
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
													{
														name: "controller",
														type: "folder",
														children: [
															{ name: "UserControllerTest.java", type: "file" },
														],
													},
													{
														name: "service",
														type: "folder",
														children: [
															{ name: "UserServiceTest.java", type: "file" },
														],
													},
													{
														name: "repository",
														type: "folder",
														children: [
															{ name: "UserRepositoryTest.java", type: "file" },
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
						name: "resources",
						type: "folder",
						children: [
							{ name: "application-test.yml", type: "file" },
						],
					},
				],
			},
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "api.md", type: "file" },
			{ name: "deployment.md", type: "file" },
		],
	},
	{ name: "pom.xml", type: "file" },
	{ name: "Dockerfile", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"The main source directory following Maven's standard directory layout.",
	},
	{
		title: "src/main/java/",
		icon: "folder",
		description:
			"Contains the main Java source files organized by package structure.",
	},
	{
		title: "com/example/myapp/",
		icon: "folder",
		description:
			"Package structure following reverse domain naming convention for organization.",
	},
	{
		title: "Main.java",
		icon: "file",
		description:
			"The main class containing the entry point (main method) for the application.",
	},
	{
		title: "src/main/resources/",
		icon: "folder",
		description:
			"Contains configuration files, properties, and other non-Java resources.",
	},
	{
		title: "application.properties",
		icon: "file",
		description:
			"Configuration file for application settings and properties.",
	},
	{
		title: "pom.xml",
		icon: "file",
		description:
			"Maven Project Object Model file defining dependencies and build configuration.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "controller/",
		icon: "folder",
		description:
			"Contains controller classes that handle HTTP requests and responses.",
	},
	{
		title: "service/",
		icon: "folder",
		description:
			"Contains service classes that implement business logic and operations.",
	},
	{
		title: "model/",
		icon: "folder",
		description:
			"Contains entity classes representing data models and database tables.",
	},
	{
		title: "repository/",
		icon: "folder",
		description:
			"Contains repository interfaces for data access and database operations.",
	},
	{
		title: "resources/static/",
		icon: "folder",
		description:
			"Contains static web assets like CSS, JavaScript, and images.",
	},
	{
		title: "resources/templates/",
		icon: "folder",
		description:
			"Contains template files for server-side rendering (Thymeleaf, etc.).",
	},
	{
		title: "src/test/",
		icon: "folder",
		description:
			"Contains unit tests and integration tests following the same package structure.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "config/",
		icon: "folder",
		description:
			"Contains configuration classes for Spring Boot, security, and database setup.",
	},
	{
		title: "service/impl/",
		icon: "folder",
		description:
			"Contains implementation classes for service interfaces, following separation of concerns.",
	},
	{
		title: "dto/",
		icon: "folder",
		description:
			"Data Transfer Objects for API requests and responses, separate from entity models.",
	},
	{
		title: "exception/",
		icon: "folder",
		description:
			"Contains custom exception classes and global exception handling logic.",
	},
	{
		title: "util/",
		icon: "folder",
		description:
			"Contains utility classes with static helper methods used across the application.",
	},
	{
		title: "application.yml",
		icon: "file",
		description:
			"YAML configuration file providing more readable format than properties files.",
	},
	{
		title: "application-dev.yml",
		icon: "file",
		description:
			"Development environment specific configuration settings.",
	},
	{
		title: "resources/db/migration/",
		icon: "folder",
		description:
			"Database migration scripts for version control of database schema changes.",
	},
	{
		title: "test/resources/",
		icon: "folder",
		description:
			"Test-specific configuration files and resources separate from main application.",
	},
	{
		title: "Dockerfile",
		icon: "file",
		description:
			"Docker configuration for containerizing the Java application.",
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
	{ label: "Java", href: "/java" },
] as const;

export default function JavaStructurePage() {
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
				title="Java Project Structure"
				description="A scalable and maintainable folder structure for Java applications"
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