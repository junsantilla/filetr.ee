import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "Jupyter Notebooks (Python) Structure",
	description:
		"A scalable and maintainable folder structure for Jupyter Notebooks Python projects",
	openGraph: {
		title: "Jupyter Notebooks (Python) Structure",
		description:
			"Learn how to structure your Jupyter Notebooks Python project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/jupyter-notebooks-python",
				width: 1200,
				height: 630,
				alt: "Jupyter Notebooks (Python) Structure Overview",
			},
		],
		url: "/jupyter-notebooks-(python)",
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
		name: "notebooks",
		type: "folder",
		children: [
			{ name: "01_data_exploration.ipynb", type: "file" },
			{ name: "02_data_analysis.ipynb", type: "file" },
			{ name: "03_visualization.ipynb", type: "file" },
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
		name: "src",
		type: "folder",
		children: [
			{ name: "utils.py", type: "file" },
		],
	},
	{ name: "requirements.txt", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "notebooks",
		type: "folder",
		children: [
			{
				name: "exploratory",
				type: "folder",
				children: [
					{ name: "01_initial_exploration.ipynb", type: "file" },
					{ name: "02_feature_analysis.ipynb", type: "file" },
				],
			},
			{
				name: "modeling",
				type: "folder",
				children: [
					{ name: "01_baseline_model.ipynb", type: "file" },
					{ name: "02_advanced_models.ipynb", type: "file" },
				],
			},
			{
				name: "reporting",
				type: "folder",
				children: [
					{ name: "final_report.ipynb", type: "file" },
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
		name: "src",
		type: "folder",
		children: [
			{ name: "data_processing.py", type: "file" },
			{ name: "visualization.py", type: "file" },
			{ name: "modeling.py", type: "file" },
			{ name: "utils.py", type: "file" },
		],
	},
	{
		name: "outputs",
		type: "folder",
		children: [
			{ name: "figures", type: "folder" },
			{ name: "models", type: "folder" },
			{ name: "reports", type: "folder" },
		],
	},
	{ name: "environment.yml", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "notebooks",
		type: "folder",
		children: [
			{
				name: "01_data_collection",
				type: "folder",
				children: [
					{ name: "web_scraping.ipynb", type: "file" },
					{ name: "api_data_collection.ipynb", type: "file" },
				],
			},
			{
				name: "02_exploratory_analysis",
				type: "folder",
				children: [
					{ name: "initial_exploration.ipynb", type: "file" },
					{ name: "statistical_analysis.ipynb", type: "file" },
					{ name: "feature_engineering.ipynb", type: "file" },
				],
			},
			{
				name: "03_modeling",
				type: "folder",
				children: [
					{ name: "baseline_models.ipynb", type: "file" },
					{ name: "advanced_models.ipynb", type: "file" },
					{ name: "model_evaluation.ipynb", type: "file" },
				],
			},
			{
				name: "04_reporting",
				type: "folder",
				children: [
					{ name: "executive_summary.ipynb", type: "file" },
					{ name: "technical_report.ipynb", type: "file" },
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
		name: "src",
		type: "folder",
		children: [
			{
				name: "data",
				type: "folder",
				children: [
					{ name: "collection.py", type: "file" },
					{ name: "preprocessing.py", type: "file" },
					{ name: "validation.py", type: "file" },
				],
			},
			{
				name: "features",
				type: "folder",
				children: [
					{ name: "engineering.py", type: "file" },
					{ name: "selection.py", type: "file" },
				],
			},
			{
				name: "models",
				type: "folder",
				children: [
					{ name: "train.py", type: "file" },
					{ name: "predict.py", type: "file" },
					{ name: "evaluate.py", type: "file" },
				],
			},
			{
				name: "visualization",
				type: "folder",
				children: [
					{ name: "plots.py", type: "file" },
					{ name: "dashboards.py", type: "file" },
				],
			},
			{
				name: "utils",
				type: "folder",
				children: [
					{ name: "helpers.py", type: "file" },
					{ name: "config.py", type: "file" },
				],
			},
		],
	},
	{
		name: "outputs",
		type: "folder",
		children: [
			{ name: "figures", type: "folder" },
			{ name: "models", type: "folder" },
			{ name: "reports", type: "folder" },
			{ name: "data", type: "folder" },
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "test_data_processing.py", type: "file" },
			{ name: "test_models.py", type: "file" },
		],
	},
	{
		name: "configs",
		type: "folder",
		children: [
			{ name: "model_config.yaml", type: "file" },
			{ name: "data_config.yaml", type: "file" },
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "methodology.md", type: "file" },
			{ name: "data_dictionary.md", type: "file" },
		],
	},
	{ name: "environment.yml", type: "file" },
	{ name: "requirements.txt", type: "file" },
	{ name: "setup.py", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "notebooks/",
		icon: "folder",
		description:
			"Contains Jupyter notebook files organized by analysis workflow and numbered for sequential execution.",
	},
	{
		title: "01_data_exploration.ipynb",
		icon: "file",
		description:
			"Initial data exploration notebook for understanding dataset structure and characteristics.",
	},
	{
		title: "02_data_analysis.ipynb",
		icon: "file",
		description:
			"Statistical analysis and hypothesis testing notebook for deeper data insights.",
	},
	{
		title: "03_visualization.ipynb",
		icon: "file",
		description:
			"Data visualization notebook for creating charts, plots, and visual representations.",
	},
	{
		title: "data/",
		icon: "folder",
		description:
			"Contains datasets organized by processing stage and data source.",
	},
	{
		title: "data/raw/",
		icon: "folder",
		description:
			"Original, unmodified datasets as received from data sources.",
	},
	{
		title: "data/processed/",
		icon: "folder",
		description:
			"Cleaned and processed datasets ready for analysis and modeling.",
	},
	{
		title: "src/",
		icon: "folder",
		description:
			"Python modules and utility functions that can be imported into notebooks.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "notebooks/exploratory/",
		icon: "folder",
		description:
			"Exploratory data analysis notebooks for initial investigation and feature discovery.",
	},
	{
		title: "notebooks/modeling/",
		icon: "folder",
		description:
			"Machine learning and statistical modeling notebooks organized by complexity.",
	},
	{
		title: "notebooks/reporting/",
		icon: "folder",
		description:
			"Final reporting notebooks that summarize findings and present results.",
	},
	{
		title: "src/data_processing.py",
		icon: "file",
		description:
			"Data cleaning and preprocessing functions used across multiple notebooks.",
	},
	{
		title: "src/visualization.py",
		icon: "file",
		description:
			"Custom plotting functions and visualization utilities for consistent chart styling.",
	},
	{
		title: "src/modeling.py",
		icon: "file",
		description:
			"Machine learning model utilities and evaluation functions.",
	},
	{
		title: "outputs/",
		icon: "folder",
		description:
			"Generated outputs including figures, trained models, and reports.",
	},
	{
		title: "environment.yml",
		icon: "file",
		description:
			"Conda environment specification for reproducible Python environment setup.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "notebooks/01_data_collection/",
		icon: "folder",
		description:
			"Data collection notebooks including web scraping, API calls, and data ingestion processes.",
	},
	{
		title: "notebooks/02_exploratory_analysis/",
		icon: "folder",
		description:
			"Comprehensive exploratory analysis including statistical tests and feature engineering.",
	},
	{
		title: "notebooks/03_modeling/",
		icon: "folder",
		description:
			"Machine learning pipeline notebooks from baseline models to advanced techniques.",
	},
	{
		title: "notebooks/04_reporting/",
		icon: "folder",
		description:
			"Professional reporting notebooks for different audiences (executive, technical).",
	},
	{
		title: "src/data/",
		icon: "folder",
		description:
			"Data processing modules organized by functionality (collection, preprocessing, validation).",
	},
	{
		title: "src/features/",
		icon: "folder",
		description:
			"Feature engineering and selection modules for creating and optimizing model inputs.",
	},
	{
		title: "src/models/",
		icon: "folder",
		description:
			"Model training, prediction, and evaluation modules for machine learning workflows.",
	},
	{
		title: "src/visualization/",
		icon: "folder",
		description:
			"Advanced visualization modules including interactive dashboards and custom plots.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Unit tests for Python modules to ensure code reliability and correctness.",
	},
	{
		title: "configs/",
		icon: "folder",
		description:
			"Configuration files for models, data processing, and experiment parameters.",
	},
	{
		title: "docs/",
		icon: "folder",
		description:
			"Project documentation including methodology, data dictionaries, and analysis guides.",
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
	{ label: "Jupyter Notebooks (Python)", href: "/jupyter-notebooks-(python)" },
] as const;

export default function JupyterNotebooksPythonStructurePage() {
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
				title="Jupyter Notebooks (Python) Structure"
				description="A scalable and maintainable folder structure for Jupyter Notebooks Python projects"
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