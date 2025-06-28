import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "TensorFlow Project Structure",
	description:
		"A scalable and maintainable folder structure for TensorFlow applications",
	openGraph: {
		title: "TensorFlow Project Structure",
		description:
			"Learn how to structure your TensorFlow project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/tensorflow",
				width: 1200,
				height: 630,
				alt: "TensorFlow Project Structure Overview",
			},
		],
		url: "/tensorflow",
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
			{ name: "train.py", type: "file" },
			{ name: "model.py", type: "file" },
			{ name: "utils.py", type: "file" },
		],
	},
	{
		name: "data",
		type: "folder",
		children: [
			{ name: "raw", type: "folder" },
			{ name: "processed", type: "folder" },
		],
	},
	{
		name: "models",
		type: "folder",
		children: [
			{ name: "saved_model", type: "folder" },
		],
	},
	{ name: "requirements.txt", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "train.py", type: "file" },
			{ name: "evaluate.py", type: "file" },
			{ name: "predict.py", type: "file" },
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "cnn_model.py", type: "file" },
					{ name: "base_model.py", type: "file" },
				],
			},
			{
				name: "data",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "preprocessing.py", type: "file" },
					{ name: "data_loader.py", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "helpers.py", type: "file" },
					{ name: "visualization.py", type: "file" },
				],
			},
		],
	},
	{
		name: "data",
		type: "folder",
		children: [
			{ name: "raw", type: "folder" },
			{ name: "processed", type: "folder" },
			{ name: "external", type: "folder" },
		],
	},
	{
		name: "models",
		type: "folder",
		children: [
			{ name: "checkpoints", type: "folder" },
			{ name: "saved_model", type: "folder" },
		],
	},
	{
		name: "notebooks",
		type: "folder",
		children: [
			{ name: "exploration.ipynb", type: "file" },
			{ name: "training.ipynb", type: "file" },
		],
	},
	{ name: "config.py", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "train.py", type: "file" },
			{ name: "evaluate.py", type: "file" },
			{ name: "predict.py", type: "file" },
			{ name: "serve.py", type: "file" },
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "cnn_model.py", type: "file" },
					{ name: "transformer_model.py", type: "file" },
					{ name: "base_model.py", type: "file" },
					{ name: "layers.py", type: "file" },
				],
			},
			{
				name: "data",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "preprocessing.py", type: "file" },
					{ name: "data_loader.py", type: "file" },
					{ name: "augmentation.py", type: "file" },
					{ name: "pipeline.py", type: "file" },
				],
			},
			{
				name: "training",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "trainer.py", type: "file" },
					{ name: "callbacks.py", type: "file" },
					{ name: "metrics.py", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "helpers.py", type: "file" },
					{ name: "visualization.py", type: "file" },
					{ name: "logging.py", type: "file" },
				],
			},
		],
	},
	{
		name: "data",
		type: "folder",
		children: [
			{ name: "raw", type: "folder" },
			{ name: "processed", type: "folder" },
			{ name: "external", type: "folder" },
			{ name: "interim", type: "folder" },
		],
	},
	{
		name: "models",
		type: "folder",
		children: [
			{ name: "checkpoints", type: "folder" },
			{ name: "saved_model", type: "folder" },
			{ name: "tensorboard", type: "folder" },
		],
	},
	{
		name: "notebooks",
		type: "folder",
		children: [
			{ name: "01_data_exploration.ipynb", type: "file" },
			{ name: "02_model_development.ipynb", type: "file" },
			{ name: "03_evaluation.ipynb", type: "file" },
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "__init__.py", type: "file" },
			{ name: "test_models.py", type: "file" },
			{ name: "test_data.py", type: "file" },
		],
	},
	{
		name: "configs",
		type: "folder",
		children: [
			{ name: "model_config.yaml", type: "file" },
			{ name: "training_config.yaml", type: "file" },
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "download_data.py", type: "file" },
			{ name: "export_model.py", type: "file" },
		],
	},
	{ name: "Dockerfile", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: "setup.py", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "src/",
		icon: "folder",
		description:
			"Contains the main Python source code for the TensorFlow project.",
	},
	{
		title: "src/train.py",
		icon: "file",
		description:
			"Main training script that defines and trains the TensorFlow model.",
	},
	{
		title: "src/model.py",
		icon: "file",
		description:
			"Defines the neural network architecture and model structure.",
	},
	{
		title: "src/utils.py",
		icon: "file",
		description:
			"Utility functions for data processing and helper methods.",
	},
	{
		title: "data/",
		icon: "folder",
		description:
			"Contains datasets organized by processing stage.",
	},
	{
		title: "data/raw/",
		icon: "folder",
		description:
			"Original, unprocessed datasets as received from data sources.",
	},
	{
		title: "data/processed/",
		icon: "folder",
		description:
			"Preprocessed and cleaned datasets ready for training.",
	},
	{
		title: "models/",
		icon: "folder",
		description:
			"Contains saved models, checkpoints, and model artifacts.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/evaluate.py",
		icon: "file",
		description:
			"Script for evaluating trained models on test datasets.",
	},
	{
		title: "src/predict.py",
		icon: "file",
		description:
			"Script for making predictions using trained models.",
	},
	{
		title: "src/models/",
		icon: "folder",
		description:
			"Contains model definitions organized by architecture type.",
	},
	{
		title: "src/data/",
		icon: "folder",
		description:
			"Data processing modules including preprocessing and loading utilities.",
	},
	{
		title: "src/utils/",
		icon: "folder",
		description:
			"Utility modules for visualization, helpers, and common functions.",
	},
	{
		title: "models/checkpoints/",
		icon: "folder",
		description:
			"Model checkpoints saved during training for recovery and resuming.",
	},
	{
		title: "notebooks/",
		icon: "folder",
		description:
			"Jupyter notebooks for exploration, experimentation, and analysis.",
	},
	{
		title: "config.py",
		icon: "file",
		description:
			"Configuration file with hyperparameters and project settings.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/serve.py",
		icon: "file",
		description:
			"Model serving script for deploying models as web services or APIs.",
	},
	{
		title: "src/models/layers.py",
		icon: "file",
		description:
			"Custom TensorFlow layers and building blocks for neural networks.",
	},
	{
		title: "src/data/augmentation.py",
		icon: "file",
		description:
			"Data augmentation techniques to increase dataset diversity.",
	},
	{
		title: "src/data/pipeline.py",
		icon: "file",
		description:
			"TensorFlow data pipeline for efficient data loading and preprocessing.",
	},
	{
		title: "src/training/",
		icon: "folder",
		description:
			"Training infrastructure including trainers, callbacks, and metrics.",
	},
	{
		title: "src/training/callbacks.py",
		icon: "file",
		description:
			"Custom TensorFlow callbacks for training monitoring and control.",
	},
	{
		title: "models/tensorboard/",
		icon: "folder",
		description:
			"TensorBoard logs for visualizing training progress and model performance.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Unit tests for models, data processing, and utility functions.",
	},
	{
		title: "configs/",
		icon: "folder",
		description:
			"YAML configuration files for different experiments and model variants.",
	},
	{
		title: "scripts/",
		icon: "folder",
		description:
			"Utility scripts for data downloading, model export, and automation.",
	},
	{
		title: "Dockerfile",
		icon: "file",
		description:
			"Docker configuration for containerizing the TensorFlow application.",
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
	{ label: "TensorFlow", href: "/tensorflow" },
] as const;

export default function TensorFlowStructurePage() {
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
				title="TensorFlow Project Structure"
				description="A scalable and maintainable folder structure for TensorFlow applications"
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