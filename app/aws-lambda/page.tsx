import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "AWS Lambda Project Structure",
	description:
		"A scalable and maintainable folder structure for AWS Lambda projects",
	openGraph: {
		title: "AWS Lambda Project Structure",
		description:
			"Learn how to structure your AWS Lambda project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/aws-lambda",
				width: 1200,
				height: 630,
				alt: "AWS Lambda Project Structure Overview",
			},
		],
		url: "/aws-lambda",
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
			{ name: "index.js", type: "file" },
			{ name: "handler.js", type: "file" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "serverless.yml", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "functions",
				type: "folder",
				children: [
					{ name: "getUserById.js", type: "file" },
					{ name: "createUser.js", type: "file" },
					{ name: "updateUser.js", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "response.js", type: "file" },
					{ name: "validation.js", type: "file" },
				],
			},
			{
				name: "services",
				type: "folder",
				children: [
					{ name: "dynamodb.js", type: "file" },
					{ name: "s3.js", type: "file" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "unit", type: "folder" },
			{ name: "integration", type: "folder" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "serverless.yml", type: "file" },
	{ name: ".env.example", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "functions",
				type: "folder",
				children: [
					{
						name: "users",
						type: "folder",
						children: [
							{ name: "get.js", type: "file" },
							{ name: "create.js", type: "file" },
							{ name: "update.js", type: "file" },
							{ name: "delete.js", type: "file" },
						],
					},
					{
						name: "auth",
						type: "folder",
						children: [
							{ name: "login.js", type: "file" },
							{ name: "register.js", type: "file" },
							{ name: "authorizer.js", type: "file" },
						],
					},
					{
						name: "webhooks",
						type: "folder",
						children: [
							{ name: "stripe.js", type: "file" },
							{ name: "github.js", type: "file" },
						],
					},
				],
			},
			{
				name: "layers",
				type: "folder",
				children: [
					{
						name: "common",
						type: "folder",
						children: [
							{ name: "utils.js", type: "file" },
							{ name: "constants.js", type: "file" },
						],
					},
					{
						name: "aws-sdk",
						type: "folder",
						children: [
							{ name: "dynamodb.js", type: "file" },
							{ name: "s3.js", type: "file" },
							{ name: "ses.js", type: "file" },
						],
					},
				],
			},
			{
				name: "middleware",
				type: "folder",
				children: [
					{ name: "cors.js", type: "file" },
					{ name: "auth.js", type: "file" },
					{ name: "validation.js", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "User.js", type: "file" },
					{ name: "BaseModel.js", type: "file" },
				],
			},
		],
	},
	{
		name: "infrastructure",
		type: "folder",
		children: [
			{
				name: "cloudformation",
				type: "folder",
				children: [
					{ name: "dynamodb.yml", type: "file" },
					{ name: "s3.yml", type: "file" },
				],
			},
			{
				name: "terraform",
				type: "folder",
				children: [
					{ name: "main.tf", type: "file" },
					{ name: "variables.tf", type: "file" },
				],
			},
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "unit", type: "folder" },
			{ name: "integration", type: "folder" },
			{ name: "e2e", type: "folder" },
			{ name: "fixtures", type: "folder" },
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "deploy.sh", type: "file" },
			{ name: "seed-data.js", type: "file" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "serverless.yml", type: "file" },
	{ name: "webpack.config.js", type: "file" },
	{ name: ".env.example", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"Contains the main Lambda function source code and application logic.",
	},
	{
		title: "src/index.js",
		icon: "file",
		description:
			"Main entry point for the Lambda function containing the handler function.",
	},
	{
		title: "src/handler.js",
		icon: "file",
		description:
			"Lambda function handler that processes incoming events and returns responses.",
	},
	{
		title: "serverless.yml",
		icon: "file",
		description:
			"Serverless Framework configuration file defining Lambda functions, events, and AWS resources.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/functions/",
		icon: "folder",
		description:
			"Contains individual Lambda function handlers organized by functionality.",
	},
	{
		title: "functions/getUserById.js",
		icon: "file",
		description:
			"Lambda function for retrieving a specific user by their ID.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"Utility functions for common operations like response formatting and validation.",
	},
	{
		title: "utils/response.js",
		icon: "file",
		description:
			"Helper functions for formatting HTTP responses with proper status codes and headers.",
	},
	{
		title: "src/services/",
		icon: "folder",
		description:
			"Service layer for interacting with AWS services like DynamoDB and S3.",
	},
	{
		title: "services/dynamodb.js",
		icon: "file",
		description:
			"Service class for DynamoDB operations including CRUD operations and queries.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Test files organized by test type for comprehensive testing coverage.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/functions/users/",
		icon: "folder",
		description:
			"User-related Lambda functions organized by HTTP method and operation.",
	},
	{
		title: "src/functions/auth/",
		icon: "folder",
		description:
			"Authentication-related functions including login, registration, and authorization.",
	},
	{
		title: "functions/auth/authorizer.js",
		icon: "file",
		description:
			"Custom Lambda authorizer for API Gateway authentication and authorization.",
	},
	{
		title: "src/functions/webhooks/",
		icon: "folder",
		description:
			"Webhook handlers for processing events from external services.",
	},
	{
		title: "src/layers/",
		icon: "folder",
		description:
			"Lambda layers for sharing code and dependencies across multiple functions.",
	},
	{
		title: "layers/common/",
		icon: "folder",
		description:
			"Common utilities and constants shared across Lambda functions.",
	},
	{
		title: "src/middleware/",
		icon: "folder",
		description:
			"Middleware functions for cross-cutting concerns like CORS, authentication, and validation.",
	},
	{
		title: "src/models/",
		icon: "folder",
		description:
			"Data model classes for representing business entities and database interactions.",
	},
	{
		title: "infrastructure/",
		icon: "folder",
		description:
			"Infrastructure as Code definitions using CloudFormation or Terraform.",
	},
	{
		title: "infrastructure/cloudformation/",
		icon: "folder",
		description:
			"CloudFormation templates for AWS resource provisioning.",
	},
	{
		title: "scripts/",
		icon: "folder",
		description:
			"Deployment and utility scripts for automation and data seeding.",
	},
	{
		title: "webpack.config.js",
		icon: "file",
		description:
			"Webpack configuration for bundling and optimizing Lambda function code.",
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
	{ label: "AWS Lambda", href: "/aws-lambda" },
] as const;

export default function AwsLambdaStructurePage() {
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
				title="AWS Lambda Project Structure"
				description="A scalable and maintainable folder structure for AWS Lambda projects"
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