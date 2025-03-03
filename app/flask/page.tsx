import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Flask Project Structure",
	description:
		"A scalable and maintainable folder structure for Flask applications",
	openGraph: {
		title: "Flask Project Structure",
		description:
			"Learn how to structure your Flask project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/flask",
				width: 1200,
				height: 630,
				alt: "Flask Project Structure Overview",
			},
		],
		url: "/flask",
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
		name: "myflaskapp",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "routes.py", type: "file" },
			{ name: "models.py", type: "file" },
			{ name: "templates", type: "folder" },
			{ name: "static", type: "folder" },
		],
	},
	{ name: "config.py", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: "run.py", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "myflaskapp",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "routes.py", type: "file" },
			{ name: "models.py", type: "file" },
			{
				name: "templates",
				type: "folder",
				children: [
					{ name: "base.html", type: "file" },
					{ name: "index.html", type: "file" },
					{ name: "about.html", type: "file" },
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
			{ name: "forms.py", type: "file" },
			{ name: "utils.py", type: "file" },
		],
	},
	{ name: "config.py", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: "run.py", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "myflaskapp",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "routes.py", type: "file" },
			{ name: "models.py", type: "file" },
			{
				name: "templates",
				type: "folder",
				children: [
					{ name: "base.html", type: "file" },
					{ name: "index.html", type: "file" },
					{ name: "about.html", type: "file" },
					{ name: "dashboard.html", type: "file" },
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
			{ name: "forms.py", type: "file" },
			{ name: "utils.py", type: "file" },
			{ name: "extensions.py", type: "file" },
			{
				name: "blueprints",
				type: "folder",
				children: [
					{
						name: "auth",
						type: "folder",
						children: [
							{ name: "__init__.py", type: "file" },
							{ name: "routes.py", type: "file" },
							{ name: "models.py", type: "file" },
						],
					},
					{
						name: "api",
						type: "folder",
						children: [
							{ name: "__init__.py", type: "file" },
							{ name: "routes.py", type: "file" },
						],
					},
				],
			},
			{
				name: "tests",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "test_routes.py", type: "file" },
					{ name: "test_models.py", type: "file" },
				],
			},
		],
	},
	{ name: "config.py", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: "run.py", type: "file" },
	{ name: ".env", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "myflaskapp/",
		icon: "folder",
		description:
			"The main application folder containing all Flask-related files.",
	},
	{
		title: "myflaskapp/__init__.py",
		icon: "file",
		description:
			"Initializes the Flask application and sets up the app configuration.",
	},
	{
		title: "myflaskapp/routes.py",
		icon: "file",
		description:
			"Defines the routes and view functions for the Flask application.",
	},
	{
		title: "myflaskapp/models.py",
		icon: "file",
		description: "Defines the database models for the application.",
	},
	{
		title: "myflaskapp/templates/",
		icon: "folder",
		description: "Contains HTML templates for rendering views.",
	},
	{
		title: "myflaskapp/static/",
		icon: "folder",
		description: "Stores static files like CSS, JavaScript, and images.",
	},
	{
		title: "config.py",
		icon: "file",
		description: "Contains configuration settings for the Flask app.",
	},
	{
		title: "requirements.txt",
		icon: "file",
		description:
			"Lists the Python dependencies required for the Flask project.",
	},
	{
		title: "run.py",
		icon: "file",
		description:
			"Entry point for running the Flask application during development.",
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
		title: "myflaskapp/",
		icon: "folder",
		description:
			"The main application folder containing all Flask-related files and folders.",
	},
	{
		title: "myflaskapp/__init__.py",
		icon: "file",
		description:
			"Initializes the Flask application and sets up the app configuration.",
	},
	{
		title: "myflaskapp/routes.py",
		icon: "file",
		description:
			"Defines the routes and view functions for the Flask application.",
	},
	{
		title: "myflaskapp/models.py",
		icon: "file",
		description: "Defines the database models for the application.",
	},
	{
		title: "myflaskapp/templates/",
		icon: "folder",
		description:
			"Contains HTML templates for rendering views, including a base template.",
	},
	{
		title: "myflaskapp/templates/base.html",
		icon: "file",
		description:
			"Base HTML template that other templates extend from for consistent layout.",
	},
	{
		title: "myflaskapp/templates/index.html",
		icon: "file",
		description: "HTML template for the home page.",
	},
	{
		title: "myflaskapp/templates/about.html",
		icon: "file",
		description: "HTML template for the about page.",
	},
	{
		title: "myflaskapp/static/",
		icon: "folder",
		description:
			"Stores static files like CSS, JavaScript, and images used in the project.",
	},
	{
		title: "myflaskapp/static/css/",
		icon: "folder",
		description: "Contains CSS files for styling the project.",
	},
	{
		title: "myflaskapp/static/js/",
		icon: "folder",
		description: "Contains JavaScript files for client-side functionality.",
	},
	{
		title: "myflaskapp/static/images/",
		icon: "folder",
		description: "Contains image files used in the project.",
	},
	{
		title: "myflaskapp/forms.py",
		icon: "file",
		description: "Defines forms for user input and validation.",
	},
	{
		title: "myflaskapp/utils.py",
		icon: "file",
		description: "Contains utility functions used across the application.",
	},
	{
		title: "config.py",
		icon: "file",
		description: "Contains configuration settings for the Flask app.",
	},
	{
		title: "requirements.txt",
		icon: "file",
		description:
			"Lists the Python dependencies required for the Flask project.",
	},
	{
		title: "run.py",
		icon: "file",
		description:
			"Entry point for running the Flask application during development.",
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
		title: "myflaskapp/",
		icon: "folder",
		description:
			"The main application folder containing all Flask-related files and folders.",
	},
	{
		title: "myflaskapp/__init__.py",
		icon: "file",
		description:
			"Initializes the Flask application and sets up the app configuration.",
	},
	{
		title: "myflaskapp/routes.py",
		icon: "file",
		description:
			"Defines the routes and view functions for the Flask application.",
	},
	{
		title: "myflaskapp/models.py",
		icon: "file",
		description: "Defines the database models for the application.",
	},
	{
		title: "myflaskapp/templates/",
		icon: "folder",
		description:
			"Contains HTML templates for rendering views, including a base template.",
	},
	{
		title: "myflaskapp/templates/base.html",
		icon: "file",
		description:
			"Base HTML template that other templates extend from for consistent layout.",
	},
	{
		title: "myflaskapp/templates/index.html",
		icon: "file",
		description: "HTML template for the home page.",
	},
	{
		title: "myflaskapp/templates/about.html",
		icon: "file",
		description: "HTML template for the about page.",
	},
	{
		title: "myflaskapp/templates/dashboard.html",
		icon: "file",
		description: "HTML template for the dashboard page.",
	},
	{
		title: "myflaskapp/static/",
		icon: "folder",
		description:
			"Stores static files like CSS, JavaScript, and images used in the project.",
	},
	{
		title: "myflaskapp/static/css/",
		icon: "folder",
		description: "Contains CSS files for styling the project.",
	},
	{
		title: "myflaskapp/static/js/",
		icon: "folder",
		description: "Contains JavaScript files for client-side functionality.",
	},
	{
		title: "myflaskapp/static/images/",
		icon: "folder",
		description: "Contains image files used in the project.",
	},
	{
		title: "myflaskapp/forms.py",
		icon: "file",
		description: "Defines forms for user input and validation.",
	},
	{
		title: "myflaskapp/utils.py",
		icon: "file",
		description: "Contains utility functions used across the application.",
	},
	{
		title: "myflaskapp/extensions.py",
		icon: "file",
		description:
			"Initializes Flask extensions like Flask-SQLAlchemy, Flask-Login, etc.",
	},
	{
		title: "myflaskapp/blueprints/",
		icon: "folder",
		description:
			"Contains Flask blueprints for modularizing the application into components.",
	},
	{
		title: "myflaskapp/blueprints/auth/",
		icon: "folder",
		description:
			"Blueprint for authentication-related routes, models, and logic.",
	},
	{
		title: "myflaskapp/blueprints/api/",
		icon: "folder",
		description: "Blueprint for API-related routes and logic.",
	},
	{
		title: "myflaskapp/tests/",
		icon: "folder",
		description: "Contains unit and integration tests for the application.",
	},
	{
		title: "myflaskapp/tests/test_routes.py",
		icon: "file",
		description: "Contains unit tests for the application's routes.",
	},
	{
		title: "myflaskapp/tests/test_models.py",
		icon: "file",
		description: "Contains unit tests for the application's models.",
	},
	{
		title: "config.py",
		icon: "file",
		description: "Contains configuration settings for the Flask app.",
	},
	{
		title: "requirements.txt",
		icon: "file",
		description:
			"Lists the Python dependencies required for the Flask project.",
	},
	{
		title: "run.py",
		icon: "file",
		description:
			"Entry point for running the Flask application during development.",
	},
	{
		title: ".env",
		icon: "file",
		description: "Stores environment variables for the Flask app.",
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
	{ label: "Flask", href: "/flask" },
] as const;

export default function FlaskStructurePage() {
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
				title="Flask Project Structure"
				description="A scalable and maintainable folder structure for Flask applications"
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