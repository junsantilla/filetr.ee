import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
	const categories = [
		{
			title: "Frontend Frameworks",
			items: [
				"React.js",
				"Next.js",
				"Vue.js",
				"Angular",
				"Svelte",
				"Solid.js",
			],
		},
		{
			title: "Backend Frameworks",
			items: [
				"Node.js",
				"Express.js",
				"NestJS",
				"Django",
				"Flask",
				"Laravel",
				"Ruby on Rails",
				"ASP.NET",
			],
		},
		{
			title: "Mobile Development",
			items: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
		},
		{
			title: "Programming Languages",
			items: [
				"Python",
				"TypeScript",
				"JavaScript",
				"Java",
				"C#",
				"C++",
				"PHP",
				"Go",
				"Rust",
				"Ruby",
			],
		},
		{
			title: "Data Science & Machine Learning",
			items: ["Jupyter Notebooks (Python)", "R", "TensorFlow", "PyTorch"],
		},
		{
			title: "Game Development",
			items: ["Unity (C#)", "Unreal Engine (C++)", "Godot"],
		},
		{
			title: "DevOps & Cloud",
			items: [
				"Docker Projects",
				"Kubernetes Configurations",
				"AWS Lambda",
			],
		},
		{
			title: "Miscellaneous",
			items: [
				"WordPress Plugin Development",
				"Electron.js Apps",
				"Shopify App Development",
			],
		},
	];

	return (
		<>
			<section className="mx-auto max-w-5xl px-4 py-20 text-left sm:text-center">
				<div className="relative">
					{/* <p className="mx-auto mb-8 max-w-3xl text-xl text-neutral-500 dark:text-neutral-400">
						Your go-to resource for folder structures in
						programming!
					</p> */}
					<h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
						Developer Folder & File Structures
					</h1>
					<p className="mx-auto mb-12 max-w-3xl text-lg text-neutral-500 dark:text-neutral-400">
						We know how challenging it can be to set up the perfect
						folder structure for your projects. Filetr.ee provides
						curated and organized folder structures for a wide range
						of programming languages, frameworks, and libraries.
					</p>
				</div>

				{/* Categories Grid */}
				<div className="mt-20 space-y-16">
					{categories.map((category, index) => (
						<div key={index} className="mb-16">
							<h3 className="mb-8 text-xl font-semibold">
								{category.title}
							</h3>
							<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
								{category.items.map((item, itemIndex) => (
									<Button
										key={itemIndex}
										variant="outline"
										className="h-auto justify-between p-4 text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:from-purple-950/20 hover:to-blue-950/20"
										asChild
									>
										<Link
											href={`/${item
												.toLowerCase()
												.replace(/[\s.()#]/g, "-")}`}
										>
											<div>
												<div className="font-medium">
													{item}
												</div>
											</div>
											<ArrowRight className="h-4 w-4" />
										</Link>
									</Button>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
