import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Kubernetes Configurations Structure",
	description:
		"A scalable and maintainable folder structure for Kubernetes configurations",
	openGraph: {
		title: "Kubernetes Configurations Structure",
		description:
			"Learn how to structure your Kubernetes configurations for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/kubernetes-configurations",
				width: 1200,
				height: 630,
				alt: "Kubernetes Configurations Structure Overview",
			},
		],
		url: "/kubernetes-configurations",
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
		name: "k8s",
		type: "folder",
		children: [
			{ name: "deployment.yaml", type: "file" },
			{ name: "service.yaml", type: "file" },
			{ name: "configmap.yaml", type: "file" },
			{ name: "secret.yaml", type: "file" },
		],
	},
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "k8s",
		type: "folder",
		children: [
			{
				name: "base",
				type: "folder",
				children: [
					{ name: "deployment.yaml", type: "file" },
					{ name: "service.yaml", type: "file" },
					{ name: "configmap.yaml", type: "file" },
					{ name: "kustomization.yaml", type: "file" },
				],
			},
			{
				name: "overlays",
				type: "folder",
				children: [
					{
						name: "development",
						type: "folder",
						children: [
							{ name: "kustomization.yaml", type: "file" },
							{ name: "replica-patch.yaml", type: "file" },
						],
					},
					{
						name: "production",
						type: "folder",
						children: [
							{ name: "kustomization.yaml", type: "file" },
							{ name: "resource-patch.yaml", type: "file" },
						],
					},
				],
			},
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "deploy.sh", type: "file" },
			{ name: "rollback.sh", type: "file" },
		],
	},
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "k8s",
		type: "folder",
		children: [
			{
				name: "base",
				type: "folder",
				children: [
					{
						name: "api",
						type: "folder",
						children: [
							{ name: "deployment.yaml", type: "file" },
							{ name: "service.yaml", type: "file" },
							{ name: "hpa.yaml", type: "file" },
						],
					},
					{
						name: "frontend",
						type: "folder",
						children: [
							{ name: "deployment.yaml", type: "file" },
							{ name: "service.yaml", type: "file" },
						],
					},
					{
						name: "database",
						type: "folder",
						children: [
							{ name: "statefulset.yaml", type: "file" },
							{ name: "service.yaml", type: "file" },
							{ name: "pvc.yaml", type: "file" },
						],
					},
					{
						name: "shared",
						type: "folder",
						children: [
							{ name: "namespace.yaml", type: "file" },
							{ name: "configmap.yaml", type: "file" },
							{ name: "secret.yaml", type: "file" },
						],
					},
				],
			},
			{
				name: "overlays",
				type: "folder",
				children: [
					{
						name: "development",
						type: "folder",
						children: [
							{ name: "kustomization.yaml", type: "file" },
							{ name: "ingress.yaml", type: "file" },
							{ name: "patches", type: "folder" },
						],
					},
					{
						name: "staging",
						type: "folder",
						children: [
							{ name: "kustomization.yaml", type: "file" },
							{ name: "ingress.yaml", type: "file" },
							{ name: "patches", type: "folder" },
						],
					},
					{
						name: "production",
						type: "folder",
						children: [
							{ name: "kustomization.yaml", type: "file" },
							{ name: "ingress.yaml", type: "file" },
							{ name: "patches", type: "folder" },
						],
					},
				],
			},
		],
	},
	{
		name: "helm",
		type: "folder",
		children: [
			{
				name: "myapp",
				type: "folder",
				children: [
					{ name: "Chart.yaml", type: "file" },
					{ name: "values.yaml", type: "file" },
					{ name: "templates", type: "folder" },
				],
			},
		],
	},
	{
		name: "monitoring",
		type: "folder",
		children: [
			{ name: "prometheus.yaml", type: "file" },
			{ name: "grafana.yaml", type: "file" },
			{ name: "alertmanager.yaml", type: "file" },
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "deploy.sh", type: "file" },
			{ name: "rollback.sh", type: "file" },
			{ name: "health-check.sh", type: "file" },
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "deployment.md", type: "file" },
			{ name: "troubleshooting.md", type: "file" },
		],
	},
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "k8s/",
		icon: "folder",
		description:
			"Contains all Kubernetes manifest files for deploying applications to a cluster.",
	},
	{
		title: "deployment.yaml",
		icon: "file",
		description:
			"Defines how to deploy and manage application pods in the Kubernetes cluster.",
	},
	{
		title: "service.yaml",
		icon: "file",
		description:
			"Exposes the application pods and provides network access within the cluster.",
	},
	{
		title: "configmap.yaml",
		icon: "file",
		description:
			"Stores configuration data that can be consumed by pods as environment variables or files.",
	},
	{
		title: "secret.yaml",
		icon: "file",
		description:
			"Stores sensitive data like passwords, tokens, and keys in an encrypted format.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "k8s/base/",
		icon: "folder",
		description:
			"Contains base Kubernetes manifests that serve as templates for different environments.",
	},
	{
		title: "k8s/overlays/",
		icon: "folder",
		description:
			"Environment-specific configurations that modify base manifests using Kustomize.",
	},
	{
		title: "overlays/development/",
		icon: "folder",
		description:
			"Development environment configurations with debugging and development-specific settings.",
	},
	{
		title: "overlays/production/",
		icon: "folder",
		description:
			"Production environment configurations with optimized resource allocation and security.",
	},
	{
		title: "kustomization.yaml",
		icon: "file",
		description:
			"Kustomize configuration file that defines how to combine and modify Kubernetes manifests.",
	},
	{
		title: "scripts/",
		icon: "folder",
		description:
			"Deployment and management scripts for automating Kubernetes operations.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "base/api/",
		icon: "folder",
		description:
			"API service manifests including deployment, service, and horizontal pod autoscaler.",
	},
	{
		title: "base/frontend/",
		icon: "folder",
		description:
			"Frontend application manifests for web interface deployment.",
	},
	{
		title: "base/database/",
		icon: "folder",
		description:
			"Database manifests including StatefulSet for persistent data storage.",
	},
	{
		title: "base/shared/",
		icon: "folder",
		description:
			"Shared resources like namespaces, ConfigMaps, and Secrets used across services.",
	},
	{
		title: "hpa.yaml",
		icon: "file",
		description:
			"Horizontal Pod Autoscaler configuration for automatic scaling based on metrics.",
	},
	{
		title: "statefulset.yaml",
		icon: "file",
		description:
			"StatefulSet configuration for applications requiring persistent storage and stable network identities.",
	},
	{
		title: "pvc.yaml",
		icon: "file",
		description:
			"Persistent Volume Claim for requesting storage resources from the cluster.",
	},
	{
		title: "helm/",
		icon: "folder",
		description:
			"Helm charts for package management and templating of Kubernetes applications.",
	},
	{
		title: "helm/myapp/Chart.yaml",
		icon: "file",
		description:
			"Helm chart metadata including version, description, and dependencies.",
	},
	{
		title: "helm/myapp/values.yaml",
		icon: "file",
		description:
			"Default configuration values for the Helm chart that can be overridden.",
	},
	{
		title: "monitoring/",
		icon: "folder",
		description:
			"Monitoring and observability configurations for Prometheus, Grafana, and alerting.",
	},
	{
		title: "docs/",
		icon: "folder",
		description:
			"Documentation for deployment procedures, troubleshooting, and operational guides.",
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
	{ label: "Kubernetes Configurations", href: "/kubernetes-configurations" },
] as const;

export default function KubernetesConfigurationsStructurePage() {
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
				title="Kubernetes Configurations Structure"
				description="A scalable and maintainable folder structure for Kubernetes configurations"
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