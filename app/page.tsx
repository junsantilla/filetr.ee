import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
    // Each item carries its own href. Deriving the slug from the label breaks
    // for names containing "#", "+" or parentheses (C#, C++, Unity (C#), ...),
    // so the route is stated explicitly instead.
    const categories = [
        {
            title: "Frontend Frameworks",
            items: [
                { label: "React.js", href: "/react-js" },
                { label: "Next.js", href: "/next-js" },
                { label: "Vue.js", href: "/vue-js" },
                { label: "Angular.js", href: "/angular-js" },
                { label: "Svelte", href: "/svelte" },
                { label: "Solid.js", href: "/solid-js" },
            ],
        },
        {
            title: "Backend Frameworks",
            items: [
                { label: "Node.js", href: "/node-js" },
                { label: "Express.js", href: "/express-js" },
                { label: "NestJS", href: "/nestjs" },
                { label: "Django", href: "/django" },
                { label: "Flask", href: "/flask" },
                { label: "Laravel", href: "/laravel" },
                { label: "Ruby on Rails", href: "/ruby-on-rails" },
                { label: "ASP.NET", href: "/asp-net" },
            ],
        },
        {
            title: "Mobile Development",
            items: [
                { label: "React Native", href: "/react-native" },
                { label: "Flutter", href: "/flutter" },
                { label: "Swift", href: "/swift" },
                { label: "Kotlin", href: "/kotlin" },
                { label: "Ionic", href: "/ionic" },
            ],
        },
        {
            title: "Programming Languages",
            items: [
                { label: "Python", href: "/python" },
                { label: "TypeScript", href: "/typescript" },
                { label: "JavaScript", href: "/javascript" },
                { label: "Java", href: "/java" },
                { label: "C#", href: "/c-sharp" },
                { label: "C++", href: "/c-plus-plus" },
                { label: "PHP", href: "/php" },
                { label: "Go", href: "/go" },
                { label: "Rust", href: "/rust" },
                { label: "Ruby", href: "/ruby" },
            ],
        },
        {
            title: "Data Science & Machine Learning",
            items: [
                {
                    label: "Jupyter Notebooks (Python)",
                    href: "/jupyter-notebooks-(python)",
                },
                { label: "R", href: "/r" },
                { label: "TensorFlow", href: "/tensorflow" },
                { label: "PyTorch", href: "/pytorch" },
            ],
        },
        {
            title: "Game Development",
            items: [
                { label: "Unity (C#)", href: "/unity-(c-sharp)" },
                {
                    label: "Unreal Engine (C++)",
                    href: "/unreal-engine-(c-plus-plus)",
                },
                { label: "Godot", href: "/godot" },
            ],
        },
        {
            title: "DevOps & Cloud",
            items: [
                { label: "Docker Projects", href: "/docker-projects" },
                {
                    label: "Kubernetes Configurations",
                    href: "/kubernetes-configurations",
                },
                { label: "AWS Lambda", href: "/aws-lambda" },
            ],
        },
        {
            title: "Miscellaneous",
            items: [
                {
                    label: "WordPress Plugin Development",
                    href: "/wordpress-plugin-development",
                },
                { label: "Electron.js Apps", href: "/electron-js-apps" },
                {
                    label: "Shopify App Development",
                    href: "/shopify-app-development",
                },
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
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl ">
                        Developer Folder & File Structures
                    </h1>
                    <p className="mx-auto mb-8 max-w-3xl text-lg text-neutral-500 dark:text-neutral-400">
                        We know how challenging it can be to set up the perfect
                        folder structure for your projects. Filetr.ee provides
                        curated and organized folder structures for a wide range
                        of programming languages, frameworks, and libraries.
                    </p>
                    <Button variant="default" asChild>
                        <Link
                            href="https://discord.gg/HD2Su7Qyzu"
                            target="_blank"
                            title="Join our Discord community for discussions, support, and sharing your own folder structures."
                        >
                            <FaDiscord />
                            Join Discord
                        </Link>
                    </Button>
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
                                        className="h-auto justify-between p-4 text-left hover:bg-gradient-to-r hover:from-purple-950/20 hover:to-blue-950/20"
                                        asChild
                                    >
                                        <Link href={item.href}>
                                            <div>
                                                <div className="font-medium">
                                                    {item.label}
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
