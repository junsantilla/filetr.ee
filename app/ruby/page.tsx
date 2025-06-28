import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Ruby Project Structure",
	description:
		"A scalable and maintainable folder structure for Ruby applications",
	openGraph: {
		title: "Ruby Project Structure",
		description:
			"Learn how to structure your Ruby project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/ruby",
				width: 1200,
				height: 630,
				alt: "Ruby Project Structure Overview",
			},
		],
		url: "/ruby",
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
			{ name: "myapp.rb", type: "file" },
			{ name: "myapp", type: "folder" },
		],
	},
	{
		name: "bin",
		type: "folder",
		children: [
			{ name: "myapp", type: "file" },
		],
	},
	{ name: "Gemfile", type: "file" },
	{ name: "myapp.gemspec", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "lib",
		type: "folder",
		children: [
			{ name: "myapp.rb", type: "file" },
			{
				name: "myapp",
				type: "folder",
				children: [
					{ name: "version.rb", type: "file" },
					{ name: "cli.rb", type: "file" },
					{ name: "config.rb", type: "file" },
					{
						name: "models",
						type: "folder",
						children: [
							{ name: "user.rb", type: "file" },
						],
					},
					{
						name: "services",
						type: "folder",
						children: [
							{ name: "user_service.rb", type: "file" },
						],
					},
				],
			},
		],
	},
	{
		name: "bin",
		type: "folder",
		children: [
			{ name: "myapp", type: "file" },
			{ name: "console", type: "file" },
			{ name: "setup", type: "file" },
		],
	},
	{
		name: "spec",
		type: "folder",
		children: [
			{ name: "spec_helper.rb", type: "file" },
			{ name: "myapp_spec.rb", type: "file" },
		],
	},
	{ name: "Gemfile", type: "file" },
	{ name: "Gemfile.lock", type: "file" },
	{ name: "Rakefile", type: "file" },
	{ name: "myapp.gemspec", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "lib",
		type: "folder",
		children: [
			{ name: "myapp.rb", type: "file" },
			{
				name: "myapp",
				type: "folder",
				children: [
					{ name: "version.rb", type: "file" },
					{ name: "cli.rb", type: "file" },
					{ name: "configuration.rb", type: "file" },
					{
						name: "core",
						type: "folder",
						children: [
							{ name: "application.rb", type: "file" },
							{ name: "router.rb", type: "file" },
						],
					},
					{
						name: "models",
						type: "folder",
						children: [
							{ name: "user.rb", type: "file" },
							{ name: "post.rb", type: "file" },
							{ name: "base.rb", type: "file" },
						],
					},
					{
						name: "services",
						type: "folder",
						children: [
							{ name: "user_service.rb", type: "file" },
							{ name: "email_service.rb", type: "file" },
						],
					},
					{
						name: "controllers",
						type: "folder",
						children: [
							{ name: "users_controller.rb", type: "file" },
							{ name: "base_controller.rb", type: "file" },
						],
					},
					{
						name: "middleware",
						type: "folder",
						children: [
							{ name: "auth_middleware.rb", type: "file" },
							{ name: "cors_middleware.rb", type: "file" },
						],
					},
					{
						name: "utils",
						type: "folder",
						children: [
							{ name: "string_helpers.rb", type: "file" },
							{ name: "date_helpers.rb", type: "file" },
						],
					},
				],
			},
		],
	},
	{
		name: "bin",
		type: "folder",
		children: [
			{ name: "myapp", type: "file" },
			{ name: "console", type: "file" },
			{ name: "setup", type: "file" },
		],
	},
	{
		name: "spec",
		type: "folder",
		children: [
			{ name: "spec_helper.rb", type: "file" },
			{ name: "support", type: "folder" },
			{
				name: "lib",
				type: "folder",
				children: [
					{ name: "myapp_spec.rb", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "user_spec.rb", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "user_service_spec.rb", type: "file" },
				],
			},
		],
	},
	{
		name: "config",
		type: "folder",
		children: [
			{ name: "database.yml", type: "file" },
			{ name: "application.yml", type: "file" },
		],
	},
	{
		name: "db",
		type: "folder",
		children: [
			{ name: "migrate", type: "folder" },
			{ name: "seeds.rb", type: "file" },
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "api.md", type: "file" },
			{ name: "installation.md", type: "file" },
		],
	},
	{ name: "Gemfile", type: "file" },
	{ name: "Gemfile.lock", type: "file" },
	{ name: "Rakefile", type: "file" },
	{ name: "myapp.gemspec", type: "file" },
	{ name: ".rspec", type: "file" },
	{ name: ".rubocop.yml", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "lib/",
		icon: "folder",
		description:
			"Contains the main Ruby library code and modules for the application.",
	},
	{
		title: "lib/myapp.rb",
		icon: "file",
		description:
			"The main entry point file that requires and sets up the application modules.",
	},
	{
		title: "lib/myapp/",
		icon: "folder",
		description:
			"Contains the application-specific modules and classes organized by functionality.",
	},
	{
		title: "bin/",
		icon: "folder",
		description:
			"Contains executable files and command-line interfaces for the application.",
	},
	{
		title: "Gemfile",
		icon: "file",
		description:
			"Specifies the Ruby gems (dependencies) required for the application.",
	},
	{
		title: "myapp.gemspec",
		icon: "file",
		description:
			"Gem specification file containing metadata and dependencies for packaging as a gem.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "lib/myapp/version.rb",
		icon: "file",
		description:
			"Defines the version constant for the application, following semantic versioning.",
	},
	{
		title: "lib/myapp/cli.rb",
		icon: "file",
		description:
			"Command-line interface implementation for interacting with the application.",
	},
	{
		title: "lib/myapp/models/",
		icon: "folder",
		description:
			"Contains model classes representing business entities and data structures.",
	},
	{
		title: "lib/myapp/services/",
		icon: "folder",
		description:
			"Contains service classes that encapsulate business logic and operations.",
	},
	{
		title: "bin/console",
		icon: "file",
		description:
			"Interactive console script for debugging and testing the application.",
	},
	{
		title: "bin/setup",
		icon: "file",
		description:
			"Setup script for installing dependencies and preparing the development environment.",
	},
	{
		title: "spec/",
		icon: "folder",
		description:
			"Contains RSpec test files for testing the application functionality.",
	},
	{
		title: "Rakefile",
		icon: "file",
		description:
			"Defines Rake tasks for building, testing, and maintaining the application.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "lib/myapp/core/",
		icon: "folder",
		description:
			"Contains core application components like the main application class and router.",
	},
	{
		title: "lib/myapp/controllers/",
		icon: "folder",
		description:
			"Contains controller classes for handling HTTP requests and responses.",
	},
	{
		title: "lib/myapp/middleware/",
		icon: "folder",
		description:
			"Contains middleware classes for processing requests before they reach controllers.",
	},
	{
		title: "lib/myapp/utils/",
		icon: "folder",
		description:
			"Contains utility modules and helper methods used throughout the application.",
	},
	{
		title: "spec/support/",
		icon: "folder",
		description:
			"Contains shared test helpers, factories, and support files for testing.",
	},
	{
		title: "config/",
		icon: "folder",
		description:
			"Contains configuration files for database, application settings, and environment-specific configs.",
	},
	{
		title: "db/",
		icon: "folder",
		description:
			"Contains database-related files including migrations and seed data.",
	},
	{
		title: "db/migrate/",
		icon: "folder",
		description:
			"Contains database migration files for version-controlled schema changes.",
	},
	{
		title: "docs/",
		icon: "folder",
		description:
			"Contains project documentation including API docs and installation guides.",
	},
	{
		title: ".rspec",
		icon: "file",
		description:
			"RSpec configuration file defining default options for running tests.",
	},
	{
		title: ".rubocop.yml",
		icon: "file",
		description:
			"RuboCop configuration for code style and quality enforcement.",
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
	{ label: "Ruby", href: "/ruby" },
] as const;

export default function RubyStructurePage() {
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
				title="Ruby Project Structure"
				description="A scalable and maintainable folder structure for Ruby applications"
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