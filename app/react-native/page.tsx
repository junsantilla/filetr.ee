import { StructureTemplate } from "@/components/structure-template";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "React Native Project Structure",
	description:
		"A scalable and maintainable folder structure for React Native applications",
	openGraph: {
		title: "React Native Project Structure",
		description:
			"Learn how to structure your React Native project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/react-native",
				width: 1200,
				height: 630,
				alt: "React Native Project Structure Overview",
			},
		],

		url: "/react-native",
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
      { name: "index.tsx", type: "file" },
      { name: "_layout.tsx", type: "file" },
    ],
  },
  { name: "assets", type: "folder" },
  { name: "components", type: "folder" },
  { name: "constants", type: "folder" },
  { name: "hooks", type: "folder" },
  { name: "app.json", type: "file" },
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
  {
    name: "app",
    type: "folder",
    children: [
      {
        name: "(tabs)",
        type: "folder",
        children: [
          { name: "index.tsx", type: "file" },
          { name: "explore.tsx", type: "file" },
          { name: "_layout.tsx", type: "file" },
        ],
      },
      { name: "modal.tsx", type: "file" },
      { name: "_layout.tsx", type: "file" },
    ],
  },
  {
    name: "assets",
    type: "folder",
    children: [
      { name: "images", type: "folder" },
      { name: "fonts", type: "folder" },
      { name: "icons", type: "folder" },
    ],
  },
  {
    name: "components",
    type: "folder",
    children: [
      { name: "ui", type: "folder" },
      { name: "navigation", type: "folder" },
    ],
  },
  { name: "constants", type: "folder" },
  { name: "hooks", type: "folder" },
  { name: "utils", type: "folder" },
  { name: "app.json", type: "file" },
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" },
  { name: "expo-env.d.ts", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
  {
    name: "app",
    type: "folder",
    children: [
      {
        name: "(auth)",
        type: "folder",
        children: [
          { name: "sign-in.tsx", type: "file" },
          { name: "sign-up.tsx", type: "file" },
          { name: "_layout.tsx", type: "file" },
        ],
      },
      {
        name: "(tabs)",
        type: "folder",
        children: [
          { name: "index.tsx", type: "file" },
          { name: "explore.tsx", type: "file" },
          { name: "profile.tsx", type: "file" },
          { name: "_layout.tsx", type: "file" },
        ],
      },
      {
        name: "user",
        type: "folder",
        children: [
          { name: "[id].tsx", type: "file" },
          { name: "_layout.tsx", type: "file" },
        ],
      },
      { name: "modal.tsx", type: "file" },
      { name: "+not-found.tsx", type: "file" },
      { name: "_layout.tsx", type: "file" },
    ],
  },
  {
    name: "assets",
    type: "folder",
    children: [
      { name: "images", type: "folder" },
      { name: "fonts", type: "folder" },
      { name: "icons", type: "folder" },
      { name: "animations", type: "folder" },
    ],
  },
  {
    name: "components",
    type: "folder",
    children: [
      { name: "ui", type: "folder" },
      { name: "forms", type: "folder" },
      { name: "navigation", type: "folder" },
      { name: "layout", type: "folder" },
    ],
  },
  { name: "constants", type: "folder" },
  { name: "hooks", type: "folder" },
  { name: "utils", type: "folder" },
  {
    name: "store",
    type: "folder",
    children: [
      { name: "slices", type: "folder" },
      { name: "store.ts", type: "file" },
    ],
  },
  { name: "services", type: "folder" },
  { name: "types", type: "folder" },
  { name: "app.json", type: "file" },
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" },
  { name: "expo-env.d.ts", type: "file" },
  { name: "metro.config.js", type: "file" },
];

// Explanations - Updated for Expo Router
const basicExplanations: ExplanationItem[] = [
  {
    title: "app/",
    icon: "folder",
    description: "Contains the app's file-based routing structure. Each file represents a route in your app's navigation."
  },
  {
    title: "app/index.tsx",
    icon: "file",
    description: "The home screen of your app. This is the first screen users see when they open your app."
  },
  {
    title: "app/_layout.tsx",
    icon: "file",
    description: "Root layout component that wraps all screens. Defines global navigation structure and providers."
  },
  {
    title: "assets/",
    icon: "folder",
    description: "Static assets like images, fonts, and icons used throughout the application."
  },
  {
    title: "components/",
    icon: "folder",
    description: "Reusable UI components that can be used across different screens and layouts."
  },
  {
    title: "constants/",
    icon: "folder",
    description: "App-wide constants like colors, dimensions, API endpoints, and configuration values."
  },
  {
    title: "hooks/",
    icon: "folder",
    description: "Custom React hooks for shared logic, API calls, and state management."
  },
  {
    title: "app.json",
    icon: "file",
    description: "Expo configuration file that defines app metadata, build settings, and platform-specific options."
  },
  {
    title: "package.json",
    icon: "file",
    description: "Project dependencies and scripts managed by npm or yarn."
  },
  {
    title: "tsconfig.json",
    icon: "file",
    description: "TypeScript configuration for compilation, paths, and IDE support."
  }
];

const intermediateExplanations: ExplanationItem[] = [
  {
    title: "app/(tabs)/",
    icon: "folder",
    description: "Route group for tab navigation. The parentheses create a layout without affecting the URL structure."
  },
  {
    title: "app/(tabs)/index.tsx",
    icon: "file",
    description: "First tab screen (Home tab). Accessed via the tab navigator defined in _layout.tsx."
  },
  {
    title: "app/(tabs)/explore.tsx",
    icon: "file",
    description: "Second tab screen (Explore tab). Each file in (tabs) becomes a tab in the navigator."
  },
  {
    title: "app/(tabs)/_layout.tsx",
    icon: "file",
    description: "Tab layout configuration. Sets up the tab navigator with icons, labels, and styling."
  },
  {
    title: "app/modal.tsx",
    icon: "file",
    description: "Modal screen that can be presented over other screens. Useful for forms and temporary content."
  },
  {
    title: "components/ui/",
    icon: "folder",
    description: "Basic UI components like buttons, inputs, cards, and other reusable interface elements."
  },
  {
    title: "components/navigation/",
    icon: "folder",
    description: "Navigation-related components like custom headers, tab bars, and navigation utilities."
  },
  {
    title: "utils/",
    icon: "folder",
    description: "Utility functions for data formatting, validation, API helpers, and other shared logic."
  },
  {
    title: "expo-env.d.ts",
    icon: "file",
    description: "TypeScript environment declarations for Expo-specific types and modules."
  }
];

const advancedExplanations: ExplanationItem[] = [
  {
    title: "app/(auth)/",
    icon: "folder",
    description: "Authentication flow route group. Handles sign-in, sign-up, and related authentication screens."
  },
  {
    title: "app/user/[id].tsx",
    icon: "file",
    description: "Dynamic route for user profiles. The [id] creates a dynamic segment accessible via router params."
  },
  {
    title: "app/+not-found.tsx",
    icon: "file",
    description: "404 error screen shown when users navigate to non-existent routes."
  },
  {
    title: "store/",
    icon: "folder",
    description: "Global state management using Redux Toolkit, Zustand, or similar. Contains slices and store configuration."
  },
  {
    title: "services/",
    icon: "folder",
    description: "API calls, external service integrations, and data fetching logic organized by feature."
  },
  {
    title: "types/",
    icon: "folder",
    description: "TypeScript type definitions and interfaces for API responses, component props, and shared types."
  },
  {
    title: "components/forms/",
    icon: "folder",
    description: "Form-specific components with validation, error handling, and submission logic."
  },
  {
    title: "components/layout/",
    icon: "folder",
    description: "Layout components for consistent screen structure, headers, and content organization."
  },
  {
    title: "assets/animations/",
    icon: "folder",
    description: "Lottie animations, Reanimated configurations, and other motion graphics assets."
  },
  {
    title: "metro.config.js",
    icon: "file",
    description: "Metro bundler configuration for custom transformations, aliases, and build optimizations."
  }
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
	{ label: "React Native", href: "/react-native" },
] as const;

export default function ReactJsStructurePage() {
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
				title="React Native Project Structure"
				description="A scalable and maintainable folder structure for React Native applications"
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
