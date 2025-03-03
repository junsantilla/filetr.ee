import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Django Project Structure",
	description:
		"A scalable and maintainable folder structure for Django applications",
	openGraph: {
		title: "Django Project Structure",
		description:
			"Learn how to structure your Django project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/django",
				width: 1200,
				height: 630,
				alt: "Django Project Structure Overview",
			},
		],
		url: "/django",
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
		name: "myproject",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "settings.py", type: "file" },
			{ name: "urls.py", type: "file" },
			{ name: "wsgi.py", type: "file" },
			{ name: "asgi.py", type: "file" },
			{
				name: "apps",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "home", type: "folder" },
					{ name: "about", type: "folder" },
				],
			},
		],
	},
	{ name: "manage.py", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "myproject",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "settings.py", type: "file" },
			{ name: "urls.py", type: "file" },
			{ name: "wsgi.py", type: "file" },
			{ name: "asgi.py", type: "file" },
			{
				name: "apps",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{
						name: "home",
						type: "folder",
						children: [
							{ name: "__init__.py", type: "file" },
							{ name: "models.py", type: "file" },
							{ name: "views.py", type: "file" },
							{ name: "urls.py", type: "file" },
							{ name: "templates", type: "folder" },
						],
					},
					{
						name: "about",
						type: "folder",
						children: [
							{ name: "__init__.py", type: "file" },
							{ name: "models.py", type: "file" },
							{ name: "views.py", type: "file" },
							{ name: "urls.py", type: "file" },
							{ name: "templates", type: "folder" },
						],
					},
				],
			},
			{
				name: "static",
				type: "folder",
				children: [
					{ name: "css", type: "folder" },
					{ name: "js", type: "folder" },
					{ name: "images", type: "folder" },
				],
			},
			{
				name: "templates",
				type: "folder",
				children: [
					{ name: "base.html", type: "file" },
					{ name: "home.html", type: "file" },
					{ name: "about.html", type: "file" },
				],
			},
		],
	},
	{ name: "manage.py", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "myproject",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "settings.py", type: "file" },
			{ name: "urls.py", type: "file" },
			{ name: "wsgi.py", type: "file" },
			{ name: "asgi.py", type: "file" },
			{
				name: "apps",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{
						name: "home",
						type: "folder",
						children: [
							{ name: "__init__.py", type: "file" },
							{ name: "models.py", type: "file" },
							{ name: "views.py", type: "file" },
							{ name: "urls.py", type: "file" },
							{ name: "templates", type: "folder" },
							{ name: "tests.py", type: "file" },
						],
					},
					{
						name: "about",
						type: "folder",
						children: [
							{ name: "__init__.py", type: "file" },
							{ name: "models.py", type: "file" },
							{ name: "views.py", type: "file" },
							{ name: "urls.py", type: "file" },
							{ name: "templates", type: "folder" },
							{ name: "tests.py", type: "file" },
						],
					},
				],
			},
			{
				name: "static",
				type: "folder",
				children: [
					{ name: "css", type: "folder" },
					{ name: "js", type: "folder" },
					{ name: "images", type: "folder" },
				],
			},
			{
				name: "templates",
				type: "folder",
				children: [
					{ name: "base.html", type: "file" },
					{ name: "home.html", type: "file" },
					{ name: "about.html", type: "file" },
				],
			},
			{
				name: "media",
				type: "folder",
				children: [
					{ name: "uploads", type: "folder" },
				],
			},
			{
				name: "tests",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "test_models.py", type: "file" },
					{ name: "test_views.py", type: "file" },
				],
			},
		],
	},
	{ name: "manage.py", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "myproject/",
		icon: "folder",
		description:
			"The main project folder containing all Django related files.",
	},
	{
		title: "myproject/__init__.py",
		icon: "file",
		description:
			"An empty file that tells Python that this directory should be considered a Python package.",
	},
	{
		title: "myproject/settings.py",
		icon: "file",
		description:
			"Contains settings and configurations for the Django project.",
	},
	{
		title: "myproject/urls.py",
		icon: "file",
		description:
			"Contains URL declarations for the Django project; a “table of contents” of your Django-powered site.",
	},
	{
		title: "myproject/wsgi.py",
		icon: "file",
		description:
			"An entry-point for WSGI-compatible web servers to serve your project.",
	},
	{
		title: "myproject/asgi.py",
		icon: "file",
		description:
			"An entry-point for ASGI-compatible web servers to serve your project.",
	},
	{
		title: "myproject/apps/",
		icon: "folder",
		description: "Contains individual apps of the Django project.",
	},
	{
		title: "myproject/apps/home/",
		icon: "folder",
		description: "Folder for the home app of the Django project.",
	},
	{
		title: "myproject/apps/about/",
		icon: "folder",
		description: "Folder for the about app of the Django project.",
	},
	{
		title: "manage.py",
		icon: "file",
		description:
			"A command-line utility that lets you interact with this Django project in various ways.",
	},
	{
		title: "requirements.txt",
		icon: "file",
		description:
			"Lists the Python dependencies required for the Django project.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Documentation file providing an overview and instructions for the project.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "myproject/",
		icon: "folder",
		description:
			"The main project folder containing all Django related files and folders.",
	},
	{
		title: "myproject/__init__.py",
		icon: "file",
		description:
			"An empty file that tells Python that this directory should be considered a Python package.",
	},
	{
		title: "myproject/settings.py",
		icon: "file",
		description:
			"Contains settings and configurations for the Django project.",
	},
	{
		title: "myproject/urls.py",
		icon: "file",
		description:
			"Contains URL declarations for the Django project; a “table of contents” of your Django-powered site.",
	},
	{
		title: "myproject/wsgi.py",
		icon: "file",
		description:
			"An entry-point for WSGI-compatible web servers to serve your project.",
	},
	{
		title: "myproject/asgi.py",
		icon: "file",
		description:
			"An entry-point for ASGI-compatible web servers to serve your project.",
	},
	{
		title: "myproject/apps/",
		icon: "folder",
		description:
			"Contains individual apps of the Django project, each with its own folder for better organization.",
	},
	{
		title: "myproject/apps/home/",
		icon: "folder",
		description:
			"Folder for the home app, containing its models, views, and templates.",
	},
	{
		title: "myproject/apps/home/models.py",
		icon: "file",
		description: "Defines the data models for the home app.",
	},
	{
		title: "myproject/apps/home/views.py",
		icon: "file",
		description: "Contains the view logic for the home app.",
	},
	{
		title: "myproject/apps/home/urls.py",
		icon: "file",
		description: "Defines the URL routes for the home app.",
	},
	{
		title: "myproject/apps/home/templates/",
		icon: "folder",
		description: "Contains HTML templates for the home app.",
	},
	{
		title: "myproject/apps/about/",
		icon: "folder",
		description:
			"Folder for the about app, containing its models, views, and templates.",
	},
	{
		title: "myproject/apps/about/models.py",
		icon: "file",
		description: "Defines the data models for the about app.",
	},
	{
		title: "myproject/apps/about/views.py",
		icon: "file",
		description: "Contains the view logic for the about app.",
	},
	{
		title: "myproject/apps/about/urls.py",
		icon: "file",
		description: "Defines the URL routes for the about app.",
	},
	{
		title: "myproject/apps/about/templates/",
		icon: "folder",
		description: "Contains HTML templates for the about app.",
	},
	{
		title: "myproject/static/",
		icon: "folder",
		description:
			"Stores static files like CSS, JavaScript, and images used in the project.",
	},
	{
		title: "myproject/static/css/",
		icon: "folder",
		description: "Contains CSS files for styling the project.",
	},
	{
		title: "myproject/static/js/",
		icon: "folder",
		description: "Contains JavaScript files for client-side functionality.",
	},
	{
		title: "myproject/static/images/",
		icon: "folder",
		description: "Contains image files used in the project.",
	},
	{
		title: "myproject/templates/",
		icon: "folder",
		description:
			"Contains base HTML templates and other shared templates for the project.",
	},
	{
		title: "myproject/templates/base.html",
		icon: "file",
		description: "Base HTML template that other templates extend from.",
	},
	{
		title: "myproject/templates/home.html",
		icon: "file",
		description: "HTML template for the home page.",
	},
	{
		title: "myproject/templates/about.html",
		icon: "file",
		description: "HTML template for the about page.",
	},
	{
		title: "manage.py",
		icon: "file",
		description:
			"A command-line utility that lets you interact with this Django project in various ways.",
	},
	{
		title: "requirements.txt",
		icon: "file",
		description:
			"Lists the Python dependencies required for the Django project.",
	},
	{
		title: ".gitignore",
		icon: "file",
		description:
			"Specifies files and directories that should be ignored by Git version control.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Documentation file providing an overview and instructions for the project.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "myproject/",
		icon: "folder",
		description:
			"The main project folder containing all Django related files and folders.",
	},
	{
		title: "myproject/__init__.py",
		icon: "file",
		description:
			"An empty file that tells Python that this directory should be considered a Python package.",
	},
	{
		title: "myproject/settings.py",
		icon: "file",
		description:
			"Contains settings and configurations for the Django project.",
	},
	{
		title: "myproject/urls.py",
		icon: "file",
		description:
			"Contains URL declarations for the Django project; a “table of contents” of your Django-powered site.",
	},
	{
		title: "myproject/wsgi.py",
		icon: "file",
		description:
			"An entry-point for WSGI-compatible web servers to serve your project.",
	},
	{
		title: "myproject/asgi.py",
		icon: "file",
		description:
			"An entry-point for ASGI-compatible web servers to serve your project.",
	},
	{
		title: "myproject/apps/",
		icon: "folder",
		description:
			"Contains individual apps of the Django project, each with its own folder and multiple files.",
	},
	{
		title: "myproject/apps/home/",
		icon: "folder",
		description:
			"Folder for the home app, containing its models, views, templates, and tests.",
	},
	{
		title: "myproject/apps/home/models.py",
		icon: "file",
		description: "Defines the data models for the home app.",
	},
	{
		title: "myproject/apps/home/views.py",
		icon: "file",
		description: "Contains the view logic for the home app.",
	},
	{
		title: "myproject/apps/home/urls.py",
		icon: "file",
		description: "Defines the URL routes for the home app.",
	},
	{
		title: "myproject/apps/home/templates/",
		icon: "folder",
		description: "Contains HTML templates for the home app.",
	},
	{
		title: "myproject/apps/home/tests.py",
		icon: "file",
		description: "Contains unit tests for the home app.",
	},
	{
		title: "myproject/apps/about/",
		icon: "folder",
		description:
			"Folder for the about app, containing its models, views, templates, and tests.",
	},
	{
		title: "myproject/apps/about/models.py",
		icon: "file",
		description: "Defines the data models for the about app.",
	},
	{
		title: "myproject/apps/about/views.py",
		icon: "file",
		description: "Contains the view logic for the about app.",
	},
	{
		title: "myproject/apps/about/urls.py",
		icon: "file",
		description: "Defines the URL routes for the about app.",
	},
	{
		title: "myproject/apps/about/templates/",
		icon: "folder",
		description: "Contains HTML templates for the about app.",
	},
	{
		title: "myproject/apps/about/tests.py",
		icon: "file",
		description: "Contains unit tests for the about app.",
	},
	{
		title: "myproject/static/",
		icon: "folder",
		description:
			"Stores static files like CSS, JavaScript, and images used in the project.",
	},
	{
		title: "myproject/static/css/",
		icon: "folder",
		description: "Contains CSS files for styling the project.",
	},
	{
		title: "myproject/static/js/",
		icon: "folder",
		description: "Contains JavaScript files for client-side functionality.",
	},
	{
		title: "myproject/static/images/",
		icon: "folder",
		description: "Contains image files used in the project.",
	},
	{
		title: "myproject/templates/",
		icon: "folder",
		description:
			"Contains base HTML templates and other shared templates for the project.",
	},
	{
		title: "myproject/templates/base.html",
		icon: "file",
		description: "Base HTML template that other templates extend from.",
	},
	{
		title: "myproject/templates/home.html",
		icon: "file",
		description: "HTML template for the home page.",
	},
	{
		title: "myproject/templates/about.html",
		icon: "file",
		description: "HTML template for the about page.",
	},
	{
		title: "myproject/media/",
		icon: "folder",
		description:
			"Stores media files uploaded by users, such as images and documents.",
	},
	{
		title: "myproject/media/uploads/",
		icon: "folder",
		description: "Contains uploaded files by users.",
	},
	{
		title: "myproject/tests/",
		icon: "folder",
		description: "Contains unit and integration tests for the project.",
	},
	{
		title: "myproject/tests/__init__.py",
		icon: "file",
		description:
			"An empty file that tells Python that this directory should be considered a Python package.",
	},
	{
		title: "myproject/tests/test_models.py",
		icon: "file",
		description: "Contains unit tests for the project's models.",
	},
	{
		title: "myproject/tests/test_views.py",
		icon: "file",
		description: "Contains unit tests for the project's views.",
	},
	{
		title: "manage.py",
		icon: "file",
		description:
			"A command-line utility that lets you interact with this Django project in various ways.",
	},
	{
		title: "requirements.txt",
		icon: "file",
		description:
			"Lists the Python dependencies required for the Django project.",
	},
	{
		title: ".gitignore",
		icon: "file",
		description:
			"Specifies files and directories that should be ignored by Git version control.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Documentation file providing an overview and instructions for the project.",
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
	{ label: "Django", href: "/django" },
] as const;

export default function DjangoStructurePage() {
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
				title="Django Project Structure"
				description="A scalable and maintainable folder structure for Django applications"
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