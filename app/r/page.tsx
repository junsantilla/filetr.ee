import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
	title: "R Project Structure",
	description:
		"A scalable and maintainable folder structure for R applications",
	openGraph: {
		title: "R Project Structure",
		description:
			"Learn how to structure your R project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/r",
				width: 1200,
				height: 630,
				alt: "R Project Structure Overview",
			},
		],
		url: "/r",
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
		name: "R",
		type: "folder",
		children: [
			{ name: "analysis.R", type: "file" },
			{ name: "functions.R", type: "file" },
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
		name: "output",
		type: "folder",
		children: [
			{ name: "plots", type: "folder" },
			{ name: "tables", type: "folder" },
		],
	},
	{ name: "main.R", type: "file" },
	{ name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
	{
		name: "R",
		type: "folder",
		children: [
			{ name: "01_data_import.R", type: "file" },
			{ name: "02_data_cleaning.R", type: "file" },
			{ name: "03_analysis.R", type: "file" },
			{ name: "04_visualization.R", type: "file" },
			{ name: "functions.R", type: "file" },
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
		name: "output",
		type: "folder",
		children: [
			{ name: "figures", type: "folder" },
			{ name: "tables", type: "folder" },
			{ name: "reports", type: "folder" },
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "analysis_report.Rmd", type: "file" },
		],
	},
	{ name: "main.R", type: "file" },
	{ name: "config.R", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
	{
		name: "R",
		type: "folder",
		children: [
			{ name: "01_data_import.R", type: "file" },
			{ name: "02_data_cleaning.R", type: "file" },
			{ name: "03_exploratory_analysis.R", type: "file" },
			{ name: "04_modeling.R", type: "file" },
			{ name: "05_visualization.R", type: "file" },
			{ name: "functions.R", type: "file" },
			{ name: "utils.R", type: "file" },
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
		name: "output",
		type: "folder",
		children: [
			{ name: "figures", type: "folder" },
			{ name: "tables", type: "folder" },
			{ name: "models", type: "folder" },
		],
	},
	{
		name: "docs",
		type: "folder",
		children: [
			{ name: "analysis_report.Rmd", type: "file" },
			{ name: "methodology.Rmd", type: "file" },
			{ name: "references.bib", type: "file" },
		],
	},
	{
		name: "tests",
		type: "folder",
		children: [
			{ name: "testthat", type: "folder" },
			{ name: "testthat.R", type: "file" },
		],
	},
	{
		name: "man",
		type: "folder",
		children: [
			{ name: "functions.Rd", type: "file" },
		],
	},
	{ name: "DESCRIPTION", type: "file" },
	{ name: "NAMESPACE", type: "file" },
	{ name: "main.R", type: "file" },
	{ name: "config.R", type: "file" },
	{ name: ".Rbuildignore", type: "file" },
	{ name: ".gitignore", type: "file" },
	{ name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
	{
		title: "R/",
		icon: "folder",
		description:
			"Contains R script files with analysis code and custom functions.",
	},
	{
		title: "R/analysis.R",
		icon: "file",
		description:
			"Main analysis script containing data processing and statistical analysis code.",
	},
	{
		title: "R/functions.R",
		icon: "file",
		description:
			"Custom R functions used throughout the analysis project.",
	},
	{
		title: "data/",
		icon: "folder",
		description:
			"Contains all data files organized by processing stage.",
	},
	{
		title: "data/raw/",
		icon: "folder",
		description:
			"Original, unmodified data files as received from data sources.",
	},
	{
		title: "data/processed/",
		icon: "folder",
		description:
			"Cleaned and processed data files ready for analysis.",
	},
	{
		title: "output/",
		icon: "folder",
		description:
			"Contains analysis outputs including plots and tables.",
	},
	{
		title: "main.R",
		icon: "file",
		description:
			"Main script that orchestrates the entire analysis workflow.",
	},
];

const intermediateExplanations: ExplanationItem[] = [
	{
		title: "R/01_data_import.R",
		icon: "file",
		description:
			"Script for importing and loading raw data from various sources.",
	},
	{
		title: "R/02_data_cleaning.R",
		icon: "file",
		description:
			"Data cleaning and preprocessing script to prepare data for analysis.",
	},
	{
		title: "R/03_analysis.R",
		icon: "file",
		description:
			"Main statistical analysis and modeling script.",
	},
	{
		title: "R/04_visualization.R",
		icon: "file",
		description:
			"Script for creating plots, charts, and visualizations.",
	},
	{
		title: "data/external/",
		icon: "folder",
		description:
			"External reference data and lookup tables used in analysis.",
	},
	{
		title: "output/reports/",
		icon: "folder",
		description:
			"Generated reports and documents from R Markdown files.",
	},
	{
		title: "docs/",
		icon: "folder",
		description:
			"Documentation and R Markdown files for reports and analysis documentation.",
	},
	{
		title: "config.R",
		icon: "file",
		description:
			"Configuration file with project settings, paths, and parameters.",
	},
];

const advancedExplanations: ExplanationItem[] = [
	{
		title: "R/03_exploratory_analysis.R",
		icon: "file",
		description:
			"Exploratory data analysis script for initial data investigation.",
	},
	{
		title: "R/04_modeling.R",
		icon: "file",
		description:
			"Statistical modeling and machine learning script.",
	},
	{
		title: "R/utils.R",
		icon: "file",
		description:
			"Utility functions for common operations and helper methods.",
	},
	{
		title: "data/interim/",
		icon: "folder",
		description:
			"Intermediate data files created during processing steps.",
	},
	{
		title: "output/models/",
		icon: "folder",
		description:
			"Saved statistical models and machine learning objects.",
	},
	{
		title: "tests/",
		icon: "folder",
		description:
			"Unit tests for custom functions using the testthat framework.",
	},
	{
		title: "man/",
		icon: "folder",
		description:
			"Documentation files for functions when building an R package.",
	},
	{
		title: "DESCRIPTION",
		icon: "file",
		description:
			"Package metadata file when the project is structured as an R package.",
	},
	{
		title: "NAMESPACE",
		icon: "file",
		description:
			"Defines which functions are exported when building an R package.",
	},
	{
		title: ".Rbuildignore",
		icon: "file",
		description:
			"Specifies files to ignore when building an R package.",
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
	{ label: "R", href: "/r" },
] as const;

export default function RStructurePage() {
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
				title="R Project Structure"
				description="A scalable and maintainable folder structure for R applications"
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