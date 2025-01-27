import { StructureTemplate } from "@/components/structure-template";
import type { FileTreeItem } from "@/components/file-tree";

const basicStructure: FileTreeItem[] = [
	{
		name: "app",
		type: "folder",
		children: [
			{ name: "page.tsx", type: "file" },
			{ name: "layout.tsx", type: "file" },
		],
	},
	{ name: "public", type: "folder", children: [] },
	{ name: "package.json", type: "file" },
	{ name: "next.config.js", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "app",
		type: "folder",
		children: [
			{ name: "page.tsx", type: "file" },
			{ name: "layout.tsx", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Header.tsx", type: "file" },
					{ name: "Footer.tsx", type: "file" },
				],
			},
			{
				name: "api",
				type: "folder",
				children: [{ name: "route.ts", type: "file" }],
			},
		],
	},
	{ name: "public", type: "folder", children: [] },
	{ name: "package.json", type: "file" },
	{ name: "next.config.js", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "app",
		type: "folder",
		children: [
			{ name: "page.tsx", type: "file" },
			{ name: "layout.tsx", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Header.tsx", type: "file" },
					{ name: "Footer.tsx", type: "file" },
					{
						name: "ui",
						type: "folder",
						children: [{ name: "Button.tsx", type: "file" }],
					},
				],
			},
			{
				name: "api",
				type: "folder",
				children: [{ name: "route.ts", type: "file" }],
			},
			{
				name: "lib",
				type: "folder",
				children: [
					{ name: "utils.ts", type: "file" },
					{ name: "db.ts", type: "file" },
				],
			},
			{
				name: "(auth)",
				type: "folder",
				children: [
					{
						name: "login",
						type: "folder",
						children: [{ name: "page.tsx", type: "file" }],
					},
					{
						name: "register",
						type: "folder",
						children: [{ name: "page.tsx", type: "file" }],
					},
				],
			},
			{
				name: "dashboard",
				type: "folder",
				children: [
					{ name: "page.tsx", type: "file" },
					{ name: "layout.tsx", type: "file" },
				],
			},
		],
	},
	{ name: "public", type: "folder", children: [] },
	{ name: "package.json", type: "file" },
	{ name: "next.config.js", type: "file" },
];

const basicExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				app/page.tsx
			</h3>
			<p>The main page component for the home route</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				app/layout.tsx
			</h3>
			<p>The root layout component that wraps all pages</p>
		</div>
	</>
);

const intermediateExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				app/components/
			</h3>
			<p>Contains reusable React components</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				app/api/
			</h3>
			<p>Contains API routes for server-side functionality</p>
		</div>
	</>
);

const advancedExplanation = (
	<>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				app/components/ui/
			</h3>
			<p>Contains low-level UI components</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				app/lib/
			</h3>
			<p>Contains utility functions and shared code</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				app/(auth)/
			</h3>
			<p>Groups authentication-related routes</p>
		</div>
		<div>
			<h3 className="mb-2 font-medium text-neutral-950 dark:text-neutral-50">
				app/dashboard/
			</h3>
			<p>Contains dashboard-specific pages and layouts</p>
		</div>
	</>
);

export default function NextJsStructurePage() {
	return (
		<StructureTemplate
			title="Next.js Project Structure"
			description="A scalable and maintainable folder structure for Next.js applications using the App Router"
			breadcrumbItems={[
				{ label: "Home", href: "/" },
				{ label: "Structures", href: "/structures" },
				{ label: "Next.js", href: "/structures/next-js" },
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
