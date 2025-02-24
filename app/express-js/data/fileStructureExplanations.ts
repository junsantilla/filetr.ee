export interface ExplanationItem {
	title: string;
	icon: "folder" | "file";
	description: string;
}

export const basicExplanations: ExplanationItem[] = [
	{
		title: "node_modules",
		icon: "folder",
		description:
			"Contains all installed dependencies and packages from npm. This folder is auto-generated by running `npm install`.",
	},
	{
		title: "public",
		icon: "folder",
		description:
			"Stores static assets like images, stylesheets, and JavaScript files accessible by the client.",
	},
	{
		title: "favicon.ico",
		icon: "file",
		description:
			"A small icon displayed in the browser tab representing the website.",
	},
	{
		title: "src",
		icon: "folder",
		description:
			"Holds the main source code of the application, including routes, controllers, models, and middleware.",
	},
	{
		title: "controllers",
		icon: "folder",
		description:
			"Contains route handlers that process incoming requests and return responses.",
	},
	{
		title: "userController.js",
		icon: "file",
		description:
			"Handles user-related logic, such as authentication, registration, and profile management.",
	},
	{
		title: "models",
		icon: "folder",
		description:
			"Defines database schemas and structures for storing and retrieving data.",
	},
	{
		title: "user.js",
		icon: "file",
		description:
			"Defines the schema and model for users, including fields like name, email, and password.",
	},
	{
		title: "middlewares",
		icon: "folder",
		description:
			"Contains middleware functions that process requests before they reach the controller.",
	},
	{
		title: "authMiddleware.js",
		icon: "file",
		description:
			"Checks authentication and authorization for protected routes.",
	},
	{
		title: "routes",
		icon: "folder",
		description: "Defines application routes and maps them to controllers.",
	},
	{
		title: "userRoutes.js",
		icon: "file",
		description:
			"Contains user-related routes, such as login, signup, and profile endpoints.",
	},
	{
		title: "app.js",
		icon: "file",
		description:
			"Main application file where Express is initialized, middleware is set up, and routes are registered.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"Holds metadata about the project, dependencies, scripts, and configurations.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Project documentation with information on how to install, run, and use the application.",
	},
];

export const intermediateExplanations: ExplanationItem[] = [
	{
		title: "node_modules",
		icon: "folder",
		description:
			"Contains all installed dependencies and packages from npm. This folder is auto-generated by running `npm install`.",
	},
	{
		title: "public",
		icon: "folder",
		description:
			"Stores static assets like images, stylesheets, and JavaScript files accessible by the client.",
	},
	{
		title: "favicon.ico",
		icon: "file",
		description:
			"A small icon displayed in the browser tab representing the website.",
	},
	{
		title: "styles",
		icon: "folder",
		description:
			"Contains CSS stylesheets for the frontend, helping with visual presentation.",
	},
	{
		title: "main.css",
		icon: "file",
		description:
			"A CSS file that defines global styles and layout rules for the application.",
	},
	{
		title: "config",
		icon: "folder",
		description:
			"Holds configuration files for environment variables, database connections, and other settings.",
	},
	{
		title: "db.js",
		icon: "file",
		description:
			"Handles the database connection logic, ensuring smooth interaction with the database.",
	},
	{
		title: "env.js",
		icon: "file",
		description:
			"Loads environment variables from a `.env` file to keep sensitive data secure.",
	},
	{
		title: "src",
		icon: "folder",
		description:
			"Holds the main source code of the application, including controllers, models, middleware, routes, and utilities.",
	},
	{
		title: "controllers",
		icon: "folder",
		description:
			"Contains route handlers that process incoming requests and return responses.",
	},
	{
		title: "userController.js",
		icon: "file",
		description:
			"Handles user-related logic, such as authentication, registration, and profile management.",
	},
	{
		title: "models",
		icon: "folder",
		description:
			"Defines database schemas and structures for storing and retrieving data.",
	},
	{
		title: "user.js",
		icon: "file",
		description:
			"Defines the schema and model for users, including fields like name, email, and password.",
	},
	{
		title: "middlewares",
		icon: "folder",
		description:
			"Contains middleware functions that process requests before they reach the controller.",
	},
	{
		title: "authMiddleware.js",
		icon: "file",
		description:
			"Checks authentication and authorization for protected routes.",
	},
	{
		title: "routes",
		icon: "folder",
		description: "Defines application routes and maps them to controllers.",
	},
	{
		title: "userRoutes.js",
		icon: "file",
		description:
			"Contains user-related routes, such as login, signup, and profile endpoints.",
	},
	{
		title: "services",
		icon: "folder",
		description:
			"Handles business logic separately from controllers, improving code organization and reusability.",
	},
	{
		title: "userService.js",
		icon: "file",
		description:
			"Manages user-related operations, such as data fetching, validation, and processing.",
	},
	{
		title: "utils",
		icon: "folder",
		description:
			"Contains utility functions and helper methods that assist various parts of the application.",
	},
	{
		title: "helpers.js",
		icon: "file",
		description:
			"Provides reusable helper functions, such as data formatting and validation.",
	},
	{
		title: "views",
		icon: "folder",
		description:
			"Stores HTML template files for rendering dynamic pages (if using server-side templating).",
	},
	{
		title: "index.html",
		icon: "file",
		description:
			"Main HTML file for rendering the application’s user interface (if applicable).",
	},
	{
		title: "app.js",
		icon: "file",
		description:
			"Main application file where Express is initialized, middleware is set up, and routes are registered.",
	},
	{
		title: "tests",
		icon: "folder",
		description:
			"Contains test files to ensure application functionality through unit and integration testing.",
	},
	{
		title: "user.test.js",
		icon: "file",
		description:
			"Test file for user-related functionality, ensuring proper behavior of controllers and services.",
	},
	{
		title: ".gitignore",
		icon: "file",
		description:
			"Specifies files and directories that should be ignored by Git, such as `node_modules` and `.env`.",
	},
	{
		title: ".env",
		icon: "file",
		description:
			"Contains environment variables like database credentials and API keys, keeping sensitive information secure.",
	},
	{
		title: "package.json",
		icon: "file",
		description:
			"Holds metadata about the project, dependencies, scripts, and configurations.",
	},
	{
		title: "README.md",
		icon: "file",
		description:
			"Project documentation with information on how to install, run, and use the application.",
	},
];
