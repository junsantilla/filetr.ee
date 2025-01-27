import { StructureTemplate } from "@/components/structure-template";
import type { FileTreeItem } from "@/components/file-tree";

const basicStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Header.jsx", type: "file" },
					{ name: "Footer.jsx", type: "file" },
					{ name: "Button.jsx", type: "file" },
				],
			},
			{ name: "App.jsx", type: "file" },
			{ name: "index.js", type: "file" },
		],
	},
	{
		name: "public",
		type: "folder",
		children: [{ name: "index.html", type: "file" }],
	},
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "components",
				type: "folder",
				children: [
					{
						name: "common",
						type: "folder",
						children: [
							{ name: "Button.jsx", type: "file" },
							{ name: "Input.jsx", type: "file" },
						],
					},
					{
						name: "layout",
						type: "folder",
						children: [
							{ name: "Header.jsx", type: "file" },
							{ name: "Footer.jsx", type: "file" },
						],
					},
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{ name: "Home.jsx", type: "file" },
					{ name: "About.jsx", type: "file" },
					{ name: "Contact.jsx", type: "file" },
				],
			},
			{
				name: "styles",
				type: "folder",
				children: [
					{ name: "global.css", type: "file" },
					{ name: "variables.css", type: "file" },
				],
			},
			{ name: "App.jsx", type: "file" },
			{ name: "index.js", type: "file" },
		],
	},
	{
		name: "public",
		type: "folder",
		children: [{ name: "index.html", type: "file" }],
	},
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "components",
				type: "folder",
				children: [
					{
						name: "common",
						type: "folder",
						children: [
							{ name: "Button.jsx", type: "file" },
							{ name: "Input.jsx", type: "file" },
							{ name: "Modal.jsx", type: "file" },
						],
					},
					{
						name: "layout",
						type: "folder",
						children: [
							{ name: "Header.jsx", type: "file" },
							{ name: "Footer.jsx", type: "file" },
							{ name: "Sidebar.jsx", type: "file" },
						],
					},
					{
						name: "features",
						type: "folder",
						children: [
							{
								name: "auth",
								type: "folder",
								children: [
									{ name: "LoginForm.jsx", type: "file" },
									{ name: "SignupForm.jsx", type: "file" },
								],
							},
							{
								name: "dashboard",
								type: "folder",
								children: [
									{
										name: "DashboardStats.jsx",
										type: "file",
									},
									{
										name: "RecentActivity.jsx",
										type: "file",
									},
								],
							},
						],
					},
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{ name: "Home.jsx", type: "file" },
					{ name: "About.jsx", type: "file" },
					{ name: "Contact.jsx", type: "file" },
					{ name: "Dashboard.jsx", type: "file" },
				],
			},
			{
				name: "hooks",
				type: "folder",
				children: [
					{ name: "useAuth.js", type: "file" },
					{ name: "useFetch.js", type: "file" },
					{ name: "useForm.js", type: "file" },
				],
			},
			{
				name: "context",
				type: "folder",
				children: [
					{ name: "AuthContext.js", type: "file" },
					{ name: "ThemeContext.js", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "api.js", type: "file" },
					{ name: "helpers.js", type: "file" },
					{ name: "constants.js", type: "file" },
				],
			},
			{
				name: "styles",
				type: "folder",
				children: [
					{ name: "global.css", type: "file" },
					{ name: "variables.css", type: "file" },
					{ name: "animations.css", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "images", type: "folder" },
					{ name: "fonts", type: "folder" },
				],
			},
			{ name: "App.jsx", type: "file" },
			{ name: "index.js", type: "file" },
		],
	},
	{
		name: "public",
		type: "folder",
		children: [{ name: "index.html", type: "file" }],
	},
	{ name: "package.json", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/components/
			</h3>
			<p>Contains all React components:</p>
			<ul className="ml-6 list-disc space-y-2">
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						Header.jsx
					</span>{" "}
					and{""}
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						Footer.jsx
					</span>{" "}
					- Layout components
				</li>
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						Button.jsx
					</span>{" "}
					- Reusable button component
				</li>
			</ul>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/App.jsx
			</h3>
			<p>The main application component</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/index.js
			</h3>
			<p>The entry point of the application</p>
		</div>
	</>
);

const intermediateExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/components/
			</h3>
			<p>Contains all React components, organized into subdirectories:</p>
			<ul className="ml-6 list-disc space-y-2">
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						common/
					</span>{" "}
					- Reusable UI components
				</li>
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						layout/
					</span>{" "}
					- Components that define the application layout
				</li>
			</ul>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/pages/
			</h3>
			<p>
				Contains components that represent entire pages in the
				application
			</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/styles/
			</h3>
			<p>Contains global styles and CSS variables</p>
		</div>
	</>
);

const advancedExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/components/
			</h3>
			<p>Contains all React components, organized into subdirectories:</p>
			<ul className="ml-6 list-disc space-y-2">
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						common/
					</span>{" "}
					- Reusable UI components like buttons, inputs, and modals
				</li>
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						layout/
					</span>{" "}
					- Components that define the application layout
				</li>
				<li>
					<span className="font-medium text-neutral-950 dark:text-neutral-50">
						features/
					</span>{" "}
					- Feature-specific components grouped by domain
				</li>
			</ul>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/pages/
			</h3>
			<p>
				Contains components that represent entire pages in the
				application
			</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/hooks/
			</h3>
			<p>Custom React hooks that encapsulate reusable stateful logic</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/context/
			</h3>
			<p>React Context providers for global state management</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/utils/
			</h3>
			<p>Helper functions, constants, and utility modules</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/styles/
			</h3>
			<p>Global styles, variables, and animations</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				src/assets/
			</h3>
			<p>Static assets like images and fonts</p>
		</div>
	</>
);

export default function ReactStructurePage() {
	return (
		<StructureTemplate
			title="React.js Project Structure"
			description="A scalable and maintainable folder structure for React.js applications"
			breadcrumbItems={[
				{ label: "Home", href: "/" },
				{ label: "Structures", href: "/structures" },
				{ label: "React.js", href: "/structures/react-js" },
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
