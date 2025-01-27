import { StructureTemplate } from "@/components/structure-template";
import type { FileTreeItem } from "@/components/file-tree";

const basicStructure: FileTreeItem[] = [
	{ name: "main.py", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "main.py", type: "file" },
			{
				name: "utils",
				type: "folder",
				children: [{ name: "helpers.py", type: "file" }],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [{ name: "test_main.py", type: "file" }],
	},
	{ name: "requirements.txt", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "main.py", type: "file" },
			{
				name: "api",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "routes.py", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "user.py", type: "file" },
					{ name: "product.py", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "user_service.py", type: "file" },
					{ name: "product_service.py", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "helpers.py", type: "file" },
					{ name: "logger.py", type: "file" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "test_api.py", type: "file" },
			{ name: "test_models.py", type: "file" },
		],
	},
	{ name: "requirements.txt", type: "file" },
	{ name: "setup.py", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				main.py
			</h3>
			<p>The main entry point for the Python application</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				requirements.txt
			</h3>
			<p>Lists all the Python package dependencies for the project</p>
		</div>
	</>
);

const intermediateExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/main.py
			</h3>
			<p>The main entry point for the Python application</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/utils/
			</h3>
			<p>Contains utility functions and helper modules</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				tests/
			</h3>
			<p>Contains test files for the application</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				requirements.txt
			</h3>
			<p>Lists all the Python package dependencies for the project</p>
		</div>
	</>
);

const advancedExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/
			</h3>
			<p>The main package directory containing all application code</p>
			<ul className="ml-6 list-disc space-y-2">
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						main.py
					</span>{" "}
					- The main entry point for the application
				</li>
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						api/
					</span>{" "}
					- Contains API-related code and route definitions
				</li>
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						models/
					</span>{" "}
					- Defines data models for the application
				</li>
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						services/
					</span>{" "}
					- Implements business logic
				</li>
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						utils/
					</span>{" "}
					- Contains utility functions and helper modules
				</li>
			</ul>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				tests/
			</h3>
			<p>Contains test files for the application</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				requirements.txt
			</h3>
			<p>Lists all the Python package dependencies for the project</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				setup.py
			</h3>
			<p>Configuration file for packaging and distributing the project</p>
		</div>
	</>
);

export default function PythonStructurePage() {
	return (
		<StructureTemplate
			title="Python Project Structure"
			description="A scalable and maintainable folder structure for Python applications"
			breadcrumbItems={[
				{ label: "Home", href: "/" },
				{ label: "Structures", href: "/structures" },
				{ label: "Python", href: "/structures/python" },
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
