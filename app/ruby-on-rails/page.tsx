import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Ruby on Rails Project Structure",
	description:
		"A scalable and maintainable folder structure for Ruby on Rails applications",
	openGraph: {
		title: "Ruby on Rails Project Structure",
		description:
			"Learn how to structure your Ruby on Rails project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/ruby-on-rails",
				width: 1200,
				height: 630,
				alt: "Ruby on Rails Project Structure Overview",
			},
		],
		url: "/ruby-on-rails",
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
			{ name: "controllers", type: "folder" },
			{ name: "models", type: "folder" },
			{ name: "views", type: "folder" },
		],
	},
	{
		name: "config",
		type: "folder",
		children: [
			{ name: "routes.rb", type: "file" },
			{ name: "application.rb", type: "file" },
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
	{ name: "Gemfile", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "app",
		type: "folder",
		children: [
			{
				name: "controllers",
				type: "folder",
				children: [
					{ name: "application_controller.rb", type: "file" },
					{ name: "users_controller.rb", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "application_record.rb", type: "file" },
					{ name: "user.rb", type: "file" },
				],
			},
			{
				name: "views",
				type: "folder",
				children: [
					{ name: "layouts", type: "folder" },
					{ name: "users", type: "folder" },
				],
			},
			{
				name: "helpers",
				type: "folder",
				children: [
					{ name: "application_helper.rb", type: "file" },
				],
			},
		],
	},
	{
		name: "config",
		type: "folder",
		children: [
			{ name: "routes.rb", type: "file" },
			{ name: "application.rb", type: "file" },
			{ name: "database.yml", type: "file" },
			{ name: "environments", type: "folder" },
		],
	},
	{
		name: "db",
		type: "folder",
		children: [
			{ name: "migrate", type: "folder" },
			{ name: "seeds.rb", type: "file" },
			{ name: "schema.rb", type: "file" },
		],
	},
	{
		name: "public",
		type: "folder",
		children: [
			{ name: "assets", type: "folder" },
		],
	},
	{ name: "Gemfile", type: "file" },
	{ name: "Gemfile.lock", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "app",
		type: "folder",
		children: [
			{
				name: "controllers",
				type: "folder",
				children: [
					{ name: "application_controller.rb", type: "file" },
					{ name: "users_controller.rb", type: "file" },
					{ name: "api", type: "folder" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "application_record.rb", type: "file" },
					{ name: "user.rb", type: "file" },
					{ name: "concerns", type: "folder" },
				],
			},
			{
				name: "views",
				type: "folder",
				children: [
					{ name: "layouts", type: "folder" },
					{ name: "users", type: "folder" },
					{ name: "shared", type: "folder" },
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
				name: "jobs",
				type: "folder",
				children: [
					{ name: "application_job.rb", type: "file" },
					{ name: "email_job.rb", type: "file" },
				],
			},
			{
				name: "mailers",
				type: "folder",
				children: [
					{ name: "application_mailer.rb", type: "file" },
					{ name: "user_mailer.rb", type: "file" },
				],
			},
		],
	},
	{
		name: "config",
		type: "folder",
		children: [
			{ name: "routes.rb", type: "file" },
			{ name: "application.rb", type: "file" },
			{ name: "database.yml", type: "file" },
			{ name: "environments", type: "folder" },
			{ name: "initializers", type: "folder" },
		],
	},
	{
		name: "db",
		type: "folder",
		children: [
			{ name: "migrate", type: "folder" },
			{ name: "seeds.rb", type: "file" },
			{ name: "schema.rb", type: "file" },
		],
	},
	{
		name: "lib",
		type: "folder",
		children: [
			{ name: "tasks", type: "folder" },
			{ name: "modules", type: "folder" },
		],
	},
	{
		name: "spec",
		type: "folder",
		children: [
			{ name: "models", type: "folder" },
			{ name: "controllers", type: "folder" },
			{ name: "features", type: "folder" },
		],
	},
	{ name: "Gemfile", type: "file" },
	{ name: "Gemfile.lock", type: "file" },
	{ name: "Rakefile", type: "file" },
	{ name: "config.ru", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "app/",
		icon: "folder",
		description:
			"The main application directory containing the core MVC components of the Rails application.",
	},
	{
		title: "app/controllers/",
		icon: "folder",
		description:
			"Contains controller classes that handle HTTP requests and coordinate between models and views.",
	},
	{
		title: "app/models/",
		icon: "folder",
		description:
			"Contains Active Record model classes that represent database tables and business logic.",
	},
	{
		title: "app/views/",
		icon: "folder",
		description:
			"Contains view templates (ERB, HAML, etc.) for rendering HTML responses.",
	},
	{
		title: "config/",
		icon: "folder",
		description:
			"Contains configuration files for the Rails application including routes and environment settings.",
	},
	{
		title: "config/routes.rb",
		icon: "file",
		description:
			"Defines the URL routing rules that map URLs to controller actions.",
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
		title: "Gemfile",
		icon: "file",
		description:
			"Specifies the Ruby gems (dependencies) required for the application.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "controllers/application_controller.rb",
		icon: "file",
		description:
			"Base controller class that other controllers inherit from, containing shared functionality.",
	},
	{
		title: "models/application_record.rb",
		icon: "file",
		description:
			"Base model class that other models inherit from, providing shared Active Record functionality.",
	},
	{
		title: "app/helpers/",
		icon: "folder",
		description:
			"Contains helper modules with methods that assist view templates.",
	},
	{
		title: "config/database.yml",
		icon: "file",
		description:
			"Database configuration file specifying connection settings for different environments.",
	},
	{
		title: "config/environments/",
		icon: "folder",
		description:
			"Contains environment-specific configuration files (development, test, production).",
	},
	{
		title: "db/schema.rb",
		icon: "file",
		description:
			"Auto-generated file representing the current database schema structure.",
	},
	{
		title: "public/",
		icon: "folder",
		description:
			"Contains static assets served directly by the web server.",
	},
	{
		title: "Gemfile.lock",
		icon: "file",
		description:
			"Lock file specifying exact gem versions to ensure consistent dependencies.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "controllers/api/",
		icon: "folder",
		description:
			"Contains API controllers organized separately from web controllers.",
	},
	{
		title: "models/concerns/",
		icon: "folder",
		description:
			"Contains mixins and shared modules that can be included in multiple models.",
	},
	{
		title: "views/shared/",
		icon: "folder",
		description:
			"Contains partial templates that are shared across multiple views.",
	},
	{
		title: "app/services/",
		icon: "folder",
		description:
			"Contains service objects that encapsulate complex business logic separate from models.",
	},
	{
		title: "services/user_service.rb",
		icon: "file",
		description:
			"Service class handling complex user-related operations and business logic.",
	},
	{
		title: "app/jobs/",
		icon: "folder",
		description:
			"Contains background job classes for asynchronous task processing.",
	},
	{
		title: "app/mailers/",
		icon: "folder",
		description:
			"Contains mailer classes for sending emails from the application.",
	},
	{
		title: "config/initializers/",
		icon: "folder",
		description:
			"Contains initialization files that run when the application starts.",
	},
	{
		title: "lib/",
		icon: "folder",
		description:
			"Contains custom libraries, modules, and rake tasks specific to the application.",
	},
	{
		title: "lib/tasks/",
		icon: "folder",
		description:
			"Contains custom Rake tasks for application maintenance and data processing.",
	},
	{
		title: "spec/",
		icon: "folder",
		description:
			"Contains RSpec test files organized by application component type.",
	},
	{
		title: "Rakefile",
		icon: "file",
		description:
			"Defines Rake tasks available for the application.",
	},
	{
		title: "config.ru",
		icon: "file",
		description:
			"Rack configuration file used by Rack-based servers to start the application.",
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
	{ label: "Ruby on Rails", href: "/ruby-on-rails" },
] as const;

export default function RubyOnRailsStructurePage() {
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
				title="Ruby on Rails Project Structure"
				description="A scalable and maintainable folder structure for Ruby on Rails applications"
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