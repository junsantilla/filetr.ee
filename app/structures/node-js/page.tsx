import { StructureTemplate } from "@/components/structure-template";
import type { FileTreeItem } from "@/components/file-tree";

const basicStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [{ name: "index.js", type: "file" }],
	},
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.js", type: "file" },
			{
				name: "routes",
				type: "folder",
				children: [
					{ name: "users.js", type: "file" },
					{ name: "products.js", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "user.js", type: "file" },
					{ name: "product.js", type: "file" },
				],
			},
			{ name: "config.js", type: "file" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "index.js", type: "file" },
			{
				name: "routes",
				type: "folder",
				children: [
					{ name: "index.js", type: "file" },
					{ name: "users.js", type: "file" },
					{ name: "products.js", type: "file" },
				],
			},
			{
				name: "controllers",
				type: "folder",
				children: [
					{ name: "userController.js", type: "file" },
					{ name: "productController.js", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "user.js", type: "file" },
					{ name: "product.js", type: "file" },
				],
			},
			{
				name: "middleware",
				type: "folder",
				children: [
					{ name: "auth.js", type: "file" },
					{ name: "errorHandler.js", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "userService.js", type: "file" },
					{ name: "productService.js", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "logger.js", type: "file" },
					{ name: "helpers.js", type: "file" },
				],
			},
			{ name: "config.js", type: "file" },
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [{ name: "api.test.js", type: "file" }],
	},
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/index.js
			</h3>
			<p>The main entry point for the Node.js application</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				package.json
			</h3>
			<p>Contains project metadata and dependencies</p>
		</div>
	</>
);

const intermediateExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/index.js
			</h3>
			<p>The main entry point for the Node.js application</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/routes/
			</h3>
			<p>Contains route handlers for different API endpoints</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/models/
			</h3>
			<p>Defines data models for the application</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/config.js
			</h3>
			<p>Configuration file for the application</p>
		</div>
	</>
);

const advancedExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/index.js
			</h3>
			<p>The main entry point for the Node.js application</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/routes/
			</h3>
			<p>Contains route handlers for different API endpoints</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/controllers/
			</h3>
			<p>Handles the application logic for each route</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/models/
			</h3>
			<p>Defines data models for the application</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/middleware/
			</h3>
			<p>
				Contains middleware functions for authentication, error
				handling, etc.
			</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/services/
			</h3>
			<p>Implements business logic and interacts with models</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/utils/
			</h3>
			<p>Utility functions and helpers</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				tests/
			</h3>
			<p>Contains test files for the application</p>
		</div>
	</>
);

export default function NodeJsStructurePage() {
	return (
		<StructureTemplate
			title="Node.js Project Structure"
			description="A scalable and maintainable folder structure for Node.js applications"
			breadcrumbItems={[
				{ label: "Home", href: "/" },
				{ label: "Structures", href: "/structures" },
				{ label: "Node.js", href: "/structures/node-js" },
			]}
			structures={{
				basic: basicStructure,
				intermediate: intermediateStructure,
				advanced: advancedStructure,
			}}
			explanations={{
				basic: basicExplanation,
				intermediate: intermediateExplanation,
				advanced: advancedExplanation,
			}}
		/>
	);
}
