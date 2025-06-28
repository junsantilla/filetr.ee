import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Shopify App Development Structure",
	description:
		"A scalable and maintainable folder structure for Shopify app development",
	openGraph: {
		title: "Shopify App Development Structure",
		description:
			"Learn how to structure your Shopify app for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/shopify-app-development",
				width: 1200,
				height: 630,
				alt: "Shopify App Development Structure Overview",
			},
		],
		url: "/shopify-app-development",
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
		name: "web",
		type: "folder",
		children: [
			{ name: "index.js", type: "file" },
			{ name: "package.json", type: "file" },
			{
				name: "middleware",
				type: "folder",
				children: [
					{ name: "auth.js", type: "file" },
				],
			},
		],
	},
	{
		name: "web/frontend",
		type: "folder",
		children: [
			{ name: "App.jsx", type: "file" },
			{ name: "index.html", type: "file" },
			{ name: "package.json", type: "file" },
		],
	},
	{ name: "shopify.app.toml", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "web",
		type: "folder",
		children: [
			{ name: "index.js", type: "file" },
			{ name: "package.json", type: "file" },
			{
				name: "middleware",
				type: "folder",
				children: [
					{ name: "auth.js", type: "file" },
					{ name: "verify-request.js", type: "file" },
				],
			},
			{
				name: "routes",
				type: "folder",
				children: [
					{ name: "api.js", type: "file" },
					{ name: "webhooks.js", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "shopify.js", type: "file" },
					{ name: "database.js", type: "file" },
				],
			},
		],
	},
	{
		name: "web/frontend",
		type: "folder",
		children: [
			{ name: "App.jsx", type: "file" },
			{ name: "index.html", type: "file" },
			{ name: "package.json", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "ProductList.jsx", type: "file" },
					{ name: "Navigation.jsx", type: "file" },
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{ name: "HomePage.jsx", type: "file" },
					{ name: "SettingsPage.jsx", type: "file" },
				],
			},
		],
	},
	{
		name: "extensions",
		type: "folder",
		children: [
			{
				name: "my-theme-extension",
				type: "folder",
				children: [
					{ name: "shopify.extension.toml", type: "file" },
					{ name: "blocks", type: "folder" },
				],
			},
		],
	},
	{ name: "shopify.app.toml", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "web",
		type: "folder",
		children: [
			{ name: "index.js", type: "file" },
			{ name: "package.json", type: "file" },
			{
				name: "middleware",
				type: "folder",
				children: [
					{ name: "auth.js", type: "file" },
					{ name: "verify-request.js", type: "file" },
					{ name: "cors.js", type: "file" },
				],
			},
			{
				name: "routes",
				type: "folder",
				children: [
					{
						name: "api",
						type: "folder",
						children: [
							{ name: "products.js", type: "file" },
							{ name: "orders.js", type: "file" },
							{ name: "customers.js", type: "file" },
						],
					},
					{ name: "webhooks.js", type: "file" },
					{ name: "auth.js", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "shopify-api.js", type: "file" },
					{ name: "database.js", type: "file" },
					{ name: "billing.js", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "Shop.js", type: "file" },
					{ name: "Session.js", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "helpers.js", type: "file" },
					{ name: "constants.js", type: "file" },
				],
			},
		],
	},
	{
		name: "web/frontend",
		type: "folder",
		children: [
			{ name: "App.jsx", type: "file" },
			{ name: "index.html", type: "file" },
			{ name: "package.json", type: "file" },
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "ProductList.jsx", type: "file" },
					{ name: "Navigation.jsx", type: "file" },
					{ name: "LoadingSpinner.jsx", type: "file" },
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{ name: "HomePage.jsx", type: "file" },
					{ name: "SettingsPage.jsx", type: "file" },
					{ name: "ProductsPage.jsx", type: "file" },
				],
			},
			{
				name: "hooks",
				type: "folder",
				children: [
					{ name: "useAuthenticatedFetch.js", type: "file" },
					{ name: "useShopifyQuery.js", type: "file" },
				],
			},
			{
				name: "assets",
				type: "folder",
				children: [
					{ name: "styles.css", type: "file" },
					{ name: "images", type: "folder" },
				],
			},
		],
	},
	{
		name: "extensions",
		type: "folder",
		children: [
			{
				name: "product-discount",
				type: "folder",
				children: [
					{ name: "shopify.extension.toml", type: "file" },
					{ name: "src", type: "folder" },
				],
			},
			{
				name: "checkout-ui",
				type: "folder",
				children: [
					{ name: "shopify.extension.toml", type: "file" },
					{ name: "src", type: "folder" },
				],
			},
			{
				name: "theme-app-extension",
				type: "folder",
				children: [
					{ name: "shopify.extension.toml", type: "file" },
					{ name: "blocks", type: "folder" },
					{ name: "snippets", type: "folder" },
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
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "backend.test.js", type: "file" },
			{ name: "frontend.test.js", type: "file" },
		],
	},
	{ name: "shopify.app.toml", type: "file" },
	{ name: ".env.example", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "web/",
		icon: "folder",
		description:
			"Backend server code for the Shopify app including API routes and middleware.",
	},
	{
		title: "web/index.js",
		icon: "file",
		description:
			"Main server entry point that sets up Express server and Shopify app configuration.",
	},
	{
		title: "web/middleware/auth.js",
		icon: "file",
		description:
			"Authentication middleware for verifying Shopify app installation and user sessions.",
	},
	{
		title: "web/frontend/",
		icon: "folder",
		description:
			"React frontend application that runs inside the Shopify admin interface.",
	},
	{
		title: "web/frontend/App.jsx",
		icon: "file",
		description:
			"Main React component that serves as the entry point for the app's user interface.",
	},
	{
		title: "shopify.app.toml",
		icon: "file",
		description:
			"Shopify CLI configuration file defining app settings, scopes, and deployment options.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "web/routes/",
		icon: "folder",
		description:
			"API route handlers for different app functionalities including webhooks and data operations.",
	},
	{
		title: "web/routes/webhooks.js",
		icon: "file",
		description:
			"Webhook handlers for processing Shopify events like order creation and app uninstallation.",
	},
	{
		title: "web/services/",
		icon: "folder",
		description:
			"Service layer for business logic including Shopify API interactions and database operations.",
	},
	{
		title: "frontend/components/",
		icon: "folder",
		description:
			"Reusable React components using Shopify Polaris design system.",
	},
	{
		title: "frontend/pages/",
		icon: "folder",
		description:
			"Page components representing different screens in the Shopify admin app.",
	},
	{
		title: "extensions/",
		icon: "folder",
		description:
			"Shopify app extensions including theme extensions and checkout UI extensions.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "web/routes/api/",
		icon: "folder",
		description:
			"Organized API routes by resource type for better maintainability and scalability.",
	},
	{
		title: "web/services/billing.js",
		icon: "file",
		description:
			"Billing service for handling Shopify app charges and subscription management.",
	},
	{
		title: "web/models/",
		icon: "folder",
		description:
			"Data models for representing app-specific data structures and database schemas.",
	},
	{
		title: "frontend/hooks/",
		icon: "folder",
		description:
			"Custom React hooks for Shopify-specific functionality like authenticated API calls.",
	},
	{
		title: "hooks/useAuthenticatedFetch.js",
		icon: "file",
		description:
			"Custom hook for making authenticated requests to the Shopify API with proper session handling.",
	},
	{
		title: "extensions/product-discount/",
		icon: "folder",
		description:
			"Function extension for creating custom discount logic in Shopify checkout.",
	},
	{
		title: "extensions/checkout-ui/",
		icon: "folder",
		description:
			"Checkout UI extension for adding custom components to the Shopify checkout process.",
	},
	{
		title: "extensions/theme-app-extension/",
		icon: "folder",
		description:
			"Theme app extension for adding app functionality directly to Shopify themes.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Test files for both backend API and frontend components to ensure app reliability.",
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
	{ label: "Shopify App Development", href: "/shopify-app-development" },
] as const;

export default function ShopifyAppDevelopmentStructurePage() {
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
				title="Shopify App Development Structure"
				description="A scalable and maintainable folder structure for Shopify app development"
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