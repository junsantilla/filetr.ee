import { StructureTemplate } from "@/components/structure-template";
import { Metadata } from "next";
import type { ExplanationItem } from "./data/fileStructureExplanations";
import {
	basicStructure,
	intermediateFileStructure,
} from "./data/fileStructure";
import {
	basicExplanations,
	intermediateExplanations,
} from "./data/fileStructureExplanations";
import { FileText, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
	title: "Express.js Project Structure",
	description:
		"A scalable and maintainable folder structure for Express.js applications",
	openGraph: {
		title: "Express.js Project Structure",
		description:
			"Learn how to structure your Express.js project for scalability and maintainability.",
		images: [
			{
				url: "/opengraph-image/next-js",
				width: 1200,
				height: 630,
				alt: "Express.js Project Structure Overview",
			},
		],

		url: "/express-js",
	},
};

const BREADCRUMB_ITEMS = [
	{ label: "Home", href: "/" },
	{ label: "Express.js", href: "/express-js" },
] as const;

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

export default function ExpressJsStructurePage() {
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
				title="Express.js Project Structure"
				description="A scalable and maintainable folder structure for Express.js applications"
				breadcrumbItems={[...BREADCRUMB_ITEMS]}
				structures={{
					basic: basicStructure,
					intermediate: intermediateFileStructure,
					advanced: [],
				}}
				explanations={{
					basic: renderExplanations(basicExplanations),
					intermediate: renderExplanations(intermediateExplanations),
					advanced: renderExplanations([]),
				}}
			/>
		</>
	);
}
