import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Head from "next/head";

export const metadata = {
  title: "Web Project Structure",
  description:
    "A scalable and maintainable folder structure for Web applications",
  keywords:
    "filetr.ee, developer filetr.ee, how to become a developer, frontend developer filetr.ee, frontend developer filetr.ee 2025, backend developer filetr.ee, backend developer filetr.ee 2025, sre filetr.ee, sre filetr.ee 2025, devops filetr.ee, devops filetr.ee 2025, android developer filetr.ee, android developer filetr.ee 2025, dba filetr.ee, dba filetr.ee 2025, blockchain developer filetr.ee, blockchain developer filetr.ee 2025, qa filetr.ee, qa filetr.ee 2025, qa engineer filetr.ee, qa engineer filetr.ee 2025, software architect filetr.ee, software architect filetr.ee 2025, asp.net core developer filetr.ee, asp.net core developer filetr.ee 2025, react developer filetr.ee, react developer filetr.ee 2025, angular developer filetr.ee, angular developer filetr.ee 2025, vue developer filetr.ee, vue developer filetr.ee 2025, node.js developer filetr.ee, node.js developer filetr.ee 2025, javascript developer filetr.ee, javascript developer filetr.ee 2025, python developer filetr.ee, python developer filetr.ee 2025, go developer filetr.ee, go developer filetr.ee 2025, java developer filetr.ee, java developer filetr.ee 2025, design system filetr.ee, design system filetr.ee 2025, software design filetr.ee, software design filetr.ee 2025, graphql filetr.ee, graphql filetr.ee 2025",
  openGraph: {
    title: "Web Project Structure",
    description:
      "Learn how to structure your Web project for scalability and maintainability.",
    images: [
      {
        url: "/opengraph-images/homepage",
        width: 1200,
        height: 630,
        alt: "Web Project Structure Overview",
      },
    ],
    site_name: "filetr.ee",
    url: "https://filetr.ee/homepage",
    type: "website",
  },
  mobile: {
    web_app_capable: "yes",
    apple_mobile_web_app_capable: "yes",
    apple_mobile_web_app_status_bar_style: "black-translucent",
    apple_mobile_web_app_title: "Web Structure Guide",
  },
  theme_color: "#004a89",
};

export default function Home() {
  const categories = [
    {
      title: "Frontend Frameworks",
      items: ["React.js", "Next.js", "Vue.js", "Angular", "Svelte", "Solid.js"],
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
      items: ["Docker Projects", "Kubernetes Configurations", "AWS Lambda"],
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

  const title = "Next.js Project Structure";
  const description =
    "Learn how to structure your Next.js project for scalability and maintainability.";

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Next.js, Project Structure, Next.js Best Practices, Folder Structure, Next.js Metadata, Scalable Next.js App"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/opengraph-imges/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Web Project Structure Overview"
        />
        <meta property="og:site_name" content="filetr.ee" />
        <meta
          property="og:url"
          content={`https://freetr.ee/structures/next-js?title=${encodeURIComponent(
            title
          )}`}
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Next.js Structure Guide"
        />
        <meta name="theme-color" content="#000000" />
      </Head>
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
            We know how challenging it can be to set up the perfect folder
            structure for your projects. Filetr.ee provides curated and
            organized folder structures for a wide range of programming
            languages, frameworks, and libraries.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-20 space-y-16">
          {categories.map((category, index) => (
            <div key={index} className="mb-16">
              <h3 className="mb-8 text-xl font-semibold">{category.title}</h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                {category.items.map((item, itemIndex) => (
                  <Button
                    key={itemIndex}
                    variant="outline"
                    className="h-auto justify-between p-4 text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:from-purple-950/20 hover:to-blue-950/20"
                    asChild
                  >
                    <Link
                      href={`/structures/${item
                        .toLowerCase()
                        .replace(/[\s.()#]/g, "-")}`}
                    >
                      <div>
                        <div className="font-medium">{item}</div>
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
