import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Docker Projects Structure",
	description:
		"A scalable and maintainable folder structure for Docker projects",
	openGraph: {
		title: "Docker Projects Structure",
		description:
			"Learn how to structure your Docker projects for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/docker-projects",
				width: 1200,
				height: 630,
				alt: "Docker Projects Structure Overview",
			},
		],
		url: "/docker-projects",
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
		name: "src",
		type: "folder",
		children: [
			{ name: "app.js", type: "file" },
			{ name: "package.json", type: "file" },
		],
	},
	{ name: "Dockerfile", type: "file" },
	{ name: "docker-compose.yml", type: "file" },
	{ name: ".dockerignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "app.js", type: "file" },
			{ name: "package.json", type: "file" },
			{
				name: "config",
				type: "folder",
				children: [
					{ name: "database.js", type: "file" },
				],
			},
		],
	},
	{
		name: "docker",
		type: "folder",
		children: [
			{ name: "Dockerfile.dev", type: "file" },
			{ name: "Dockerfile.prod", type: "file" },
			{ name: "nginx.conf", type: "file" },
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "start.sh", type: "file" },
			{ name: "wait-for-it.sh", type: "file" },
		],
	},
	{ name: "docker-compose.yml", type: "file" },
	{ name: "docker-compose.dev.yml", type: "file" },
	{ name: ".dockerignore", type: "file" },
	{ name: ".env.example", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "services",
		type: "folder",
		children: [
			{
				name: "api",
				type: "folder",
				children: [
					{ name: "Dockerfile", type: "file" },
					{ name: "src", type: "folder" },
					{ name: "package.json", type: "file" },
				],
			},
			{
				name: "frontend",
				type: "folder",
				children: [
					{ name: "Dockerfile", type: "file" },
					{ name: "src", type: "folder" },
					{ name: "package.json", type: "file" },
				],
			},
			{
				name: "worker",
				type: "folder",
				children: [
					{ name: "Dockerfile", type: "file" },
					{ name: "src", type: "folder" },
					{ name: "requirements.txt", type: "file" },
				],
			},
		],
	},
	{
		name: "docker",
		type: "folder",
		children: [
			{
				name: "nginx",
				type: "folder",
				children: [
					{ name: "Dockerfile", type: "file" },
					{ name: "nginx.conf", type: "file" },
				],
			},
			{
				name: "postgres",
				type: "folder",
				children: [
					{ name: "init.sql", type: "file" },
				],
			},
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "build.sh", type: "file" },
			{ name: "deploy.sh", type: "file" },
			{ name: "wait-for-it.sh", type: "file" },
		],
	},
	{
		name: "k8s",
		type: "folder",
		children: [
			{ name: "deployment.yaml", type: "file" },
			{ name: "service.yaml", type: "file" },
			{ name: "ingress.yaml", type: "file" },
		],
	},
	{ name: "docker-compose.yml", type: "file" },
	{ name: "docker-compose.dev.yml", type: "file" },
	{ name: "docker-compose.prod.yml", type: "file" },
	{ name: ".dockerignore", type: "file" },
	{ name: ".env.example", type: "file" },
	{ name: "Makefile", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"Contains the application source code that will be containerized.",
	},
	{
		title: "Dockerfile",
		icon: "file",
		description:
			"Defines the instructions for building the Docker image for the application.",
	},
	{
		title: "docker-compose.yml",
		icon: "file",
		description:
			"Defines multi-container Docker applications and their services, networks, and volumes.",
	},
	{
		title: ".dockerignore",
		icon: "file",
		description:
			"Specifies files and directories to exclude from the Docker build context.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "docker/",
		icon: "folder",
		description:
			"Contains Docker-related files organized by environment and service type.",
	},
	{
		title: "docker/Dockerfile.dev",
		icon: "file",
		description:
			"Development-specific Dockerfile with debugging tools and hot reload capabilities.",
	},
	{
		title: "docker/Dockerfile.prod",
		icon: "file",
		description:
			"Production-optimized Dockerfile with minimal size and security considerations.",
	},
	{
		title: "docker/nginx.conf",
		icon: "file",
		description:
			"Nginx configuration file for reverse proxy and static file serving.",
	},
	{
		title: "scripts/",
		icon: "folder",
		description:
			"Contains shell scripts for automation, startup, and utility functions.",
	},
	{
		title: "scripts/wait-for-it.sh",
		icon: "file",
		description:
			"Utility script to wait for services to be ready before starting dependent services.",
	},
	{
		title: "docker-compose.dev.yml",
		icon: "file",
		description:
			"Development-specific Docker Compose configuration with volume mounts and debugging.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "services/",
		icon: "folder",
		description:
			"Microservices architecture with each service having its own Dockerfile and source code.",
	},
	{
		title: "services/api/",
		icon: "folder",
		description:
			"Backend API service with its own containerization and dependencies.",
	},
	{
		title: "services/frontend/",
		icon: "folder",
		description:
			"Frontend application service with build process and static file serving.",
	},
	{
		title: "services/worker/",
		icon: "folder",
		description:
			"Background worker service for processing jobs and tasks.",
	},
	{
		title: "docker/nginx/",
		icon: "folder",
		description:
			"Nginx service configuration for load balancing and reverse proxy.",
	},
	{
		title: "docker/postgres/",
		icon: "folder",
		description:
			"PostgreSQL database service with initialization scripts and configuration.",
	},
	{
		title: "k8s/",
		icon: "folder",
		description:
			"Kubernetes manifests for deploying the application to Kubernetes clusters.",
	},
	{
		title: "k8s/deployment.yaml",
		icon: "file",
		description:
			"Kubernetes deployment configuration for managing application replicas.",
	},
	{
		title: "k8s/service.yaml",
		icon: "file",
		description:
			"Kubernetes service configuration for exposing applications within the cluster.",
	},
	{
		title: "docker-compose.prod.yml",
		icon: "file",
		description:
			"Production Docker Compose configuration with optimized settings and security.",
	},
	{
		title: "Makefile",
		icon: "file",
		description:
			"Automation file with common commands for building, testing, and deploying.",
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
	{ label: "Docker Projects", href: "/docker-projects" },
] as const;

export default function DockerProjectsStructurePage() {
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
				title="Docker Projects Structure"
				description="A scalable and maintainable folder structure for Docker projects"
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