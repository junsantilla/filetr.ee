import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "PyTorch Project Structure",
	description:
		"A scalable and maintainable folder structure for PyTorch applications",
	openGraph: {
		title: "PyTorch Project Structure",
		description:
			"Learn how to structure your PyTorch project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/pytorch",
				width: 1200,
				height: 630,
				alt: "PyTorch Project Structure Overview",
			},
		],
		url: "/pytorch",
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
			{ name: "dataset.py", type: "file" },
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
			{ name: "checkpoints", type: "folder" },
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
			{ name: "test.py", type: "file" },
			{ name: "inference.py", type: "file" },
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "resnet.py", type: "file" },
					{ name: "base_model.py", type: "file" },
				],
			},
			{
				name: "data",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "dataset.py", type: "file" },
					{ name: "transforms.py", type: "file" },
					{ name: "dataloader.py", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "helpers.py", type: "file" },
					{ name: "metrics.py", type: "file" },
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
			{ name: "pretrained", type: "folder" },
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
	{ name: "config.yaml", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "src",
		type: "folder",
		children: [
			{ name: "train.py", type: "file" },
			{ name: "test.py", type: "file" },
			{ name: "inference.py", type: "file" },
			{ name: "export.py", type: "file" },
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "resnet.py", type: "file" },
					{ name: "transformer.py", type: "file" },
					{ name: "base_model.py", type: "file" },
					{ name: "layers.py", type: "file" },
				],
			},
			{
				name: "data",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "dataset.py", type: "file" },
					{ name: "transforms.py", type: "file" },
					{ name: "dataloader.py", type: "file" },
					{ name: "augmentation.py", type: "file" },
				],
			},
			{
				name: "training",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "trainer.py", type: "file" },
					{ name: "optimizer.py", type: "file" },
					{ name: "scheduler.py", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "__init__.py", type: "file" },
					{ name: "helpers.py", type: "file" },
					{ name: "metrics.py", type: "file" },
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
			{ name: "pretrained", type: "folder" },
			{ name: "exported", type: "folder" },
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
			{ name: "test_training.py", type: "file" },
		],
	},
	{
		name: "configs",
		type: "folder",
		children: [
			{ name: "base_config.yaml", type: "file" },
			{ name: "resnet_config.yaml", type: "file" },
			{ name: "transformer_config.yaml", type: "file" },
		],
	},
	{
		name: "scripts",
		type: "folder",
		children: [
			{ name: "download_data.py", type: "file" },
			{ name: "preprocess_data.py", type: "file" },
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
			"Contains the main Python source code for the PyTorch project.",
	},
	{
		title: "src/train.py",
		icon: "file",
		description:
			"Main training script that defines the training loop and model training process.",
	},
	{
		title: "src/model.py",
		icon: "file",
		description:
			"Defines the neural network architecture using PyTorch modules.",
	},
	{
		title: "src/dataset.py",
		icon: "file",
		description:
			"Custom PyTorch Dataset class for loading and preprocessing data.",
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
		title: "models/checkpoints/",
		icon: "folder",
		description:
			"Saved model checkpoints during training for recovery and evaluation.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "src/test.py",
		icon: "file",
		description:
			"Script for evaluating trained models on test datasets.",
	},
	{
		title: "src/inference.py",
		icon: "file",
		description:
			"Script for making predictions using trained PyTorch models.",
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
			"Data processing modules including datasets, transforms, and dataloaders.",
	},
	{
		title: "src/data/transforms.py",
		icon: "file",
		description:
			"Data transformation and augmentation functions using torchvision.",
	},
	{
		title: "src/utils/metrics.py",
		icon: "file",
		description:
			"Custom metrics and evaluation functions for model performance.",
	},
	{
		title: "models/pretrained/",
		icon: "folder",
		description:
			"Pre-trained models downloaded from PyTorch Hub or other sources.",
	},
	{
		title: "config.yaml",
		icon: "file",
		description:
			"Configuration file with hyperparameters and training settings.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "src/export.py",
		icon: "file",
		description:
			"Script for exporting trained models to different formats (ONNX, TorchScript).",
	},
	{
		title: "src/models/layers.py",
		icon: "file",
		description:
			"Custom PyTorch layers and building blocks for neural networks.",
	},
	{
		title: "src/data/augmentation.py",
		icon: "file",
		description:
			"Advanced data augmentation techniques and custom transforms.",
	},
	{
		title: "src/training/",
		icon: "folder",
		description:
			"Training infrastructure including trainers, optimizers, and schedulers.",
	},
	{
		title: "src/training/trainer.py",
		icon: "file",
		description:
			"Training class that encapsulates the training loop and validation logic.",
	},
	{
		title: "src/utils/visualization.py",
		icon: "file",
		description:
			"Functions for visualizing training progress, model predictions, and data.",
	},
	{
		title: "models/exported/",
		icon: "folder",
		description:
			"Models exported to production formats like ONNX or TorchScript.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Unit tests for models, data processing, and training components.",
	},
	{
		title: "configs/",
		icon: "folder",
		description:
			"YAML configuration files for different model architectures and experiments.",
	},
	{
		title: "scripts/",
		icon: "folder",
		description:
			"Utility scripts for data preparation, preprocessing, and automation.",
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
	{ label: "PyTorch", href: "/pytorch" },
] as const;

export default function PyTorchStructurePage() {
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
				title="PyTorch Project Structure"
				description="A scalable and maintainable folder structure for PyTorch applications"
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