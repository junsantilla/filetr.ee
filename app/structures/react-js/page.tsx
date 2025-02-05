import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";
import Head from "next/head";

export const metadata = {
  title: "Next.js Project Structure",
  description:
    "A scalable and maintainable folder structure for Next.js applications",
  keywords:
    "filetr.ee, developer filetr.ee, how to become a developer, frontend developer filetr.ee, frontend developer filetr.ee 2025, backend developer filetr.ee, backend developer filetr.ee 2025, sre filetr.ee, sre filetr.ee 2025, devops filetr.ee, devops filetr.ee 2025, android developer filetr.ee, android developer filetr.ee 2025, dba filetr.ee, dba filetr.ee 2025, blockchain developer filetr.ee, blockchain developer filetr.ee 2025, qa filetr.ee, qa filetr.ee 2025, qa engineer filetr.ee, qa engineer filetr.ee 2025, software architect filetr.ee, software architect filetr.ee 2025, asp.net core developer filetr.ee, asp.net core developer filetr.ee 2025, react developer filetr.ee, react developer filetr.ee 2025, angular developer filetr.ee, angular developer filetr.ee 2025, vue developer filetr.ee, vue developer filetr.ee 2025, node.js developer filetr.ee, node.js developer filetr.ee 2025, javascript developer filetr.ee, javascript developer filetr.ee 2025, python developer filetr.ee, python developer filetr.ee 2025, go developer filetr.ee, go developer filetr.ee 2025, java developer filetr.ee, java developer filetr.ee 2025, design system filetr.ee, design system filetr.ee 2025, software design filetr.ee, software design filetr.ee 2025, graphql filetr.ee, graphql filetr.ee 2025",
  openGraph: {
    title: "Next.js Project Structure",
    description:
      "Learn how to structure your Next.js project for scalability and maintainability.",
    images: [
      {
        url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        width: 1200,
        height: 630,
        alt: "Next.js Project Structure Overview",
      },
    ],
    site_name: "filetr.ee",
    url: "https://filetr.ee/structures/next-js",
    type: "website",
  },
  mobile: {
    web_app_capable: "yes",
    apple_mobile_web_app_capable: "yes",
    apple_mobile_web_app_status_bar_style: "black-translucent",
    apple_mobile_web_app_title: "Next.js Structure Guide",
  },
  theme_color: "#004a89",
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
      { name: "App.js", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [{ name: "Header.js", type: "file" }],
      },
      {
        name: "assets",
        type: "folder",
        children: [{ name: "logo.svg", type: "file" }],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "index.html", type: "file" },
      { name: "favicon.ico", type: "file" },
    ],
  },
  { name: "package.json", type: "file" },
  { name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "index.js", type: "file" },
      { name: "App.js", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Header.js", type: "file" },
          { name: "Footer.js", type: "file" },
        ],
      },
      {
        name: "pages",
        type: "folder",
        children: [
          { name: "Home.js", type: "file" },
          { name: "About.js", type: "file" },
        ],
      },
      {
        name: "assets",
        type: "folder",
        children: [
          { name: "logo.svg", type: "file" },
          {
            name: "styles",
            type: "folder",
            children: [{ name: "index.css", type: "file" }],
          },
        ],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "index.html", type: "file" },
      { name: "favicon.ico", type: "file" },
    ],
  },
  { name: "package.json", type: "file" },
  { name: "README.md", type: "file" },
  { name: ".gitignore", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "index.js", type: "file" },
      { name: "App.js", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Header.js", type: "file" },
          { name: "Footer.js", type: "file" },
          {
            name: "ui",
            type: "folder",
            children: [{ name: "Button.js", type: "file" }],
          },
        ],
      },
      {
        name: "pages",
        type: "folder",
        children: [
          { name: "Home.js", type: "file" },
          { name: "About.js", type: "file" },
          { name: "Dashboard.js", type: "file" },
        ],
      },
      {
        name: "assets",
        type: "folder",
        children: [
          { name: "logo.svg", type: "file" },
          {
            name: "styles",
            type: "folder",
            children: [
              { name: "index.css", type: "file" },
              { name: "variables.css", type: "file" },
            ],
          },
        ],
      },
      {
        name: "hooks",
        type: "folder",
        children: [{ name: "useAuth.js", type: "file" }],
      },
      {
        name: "context",
        type: "folder",
        children: [{ name: "AuthContext.js", type: "file" }],
      },
      {
        name: "services",
        type: "folder",
        children: [{ name: "api.js", type: "file" }],
      },
      {
        name: "utils",
        type: "folder",
        children: [{ name: "helpers.js", type: "file" }],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "index.html", type: "file" },
      { name: "favicon.ico", type: "file" },
    ],
  },
  { name: "package.json", type: "file" },
  { name: "README.md", type: "file" },
  { name: ".gitignore", type: "file" },
  { name: ".env", type: "file" },
  { name: "jsconfig.json", type: "file" },
  { name: ".eslintrc.js", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
  {
    title: "src/",
    icon: "folder",
    description:
      "This folder contains the main source code for the React application. All the application's core logic, components, and assets are placed here.",
  },
  {
    title: "src/index.js",
    icon: "file",
    description:
      "The entry point of the React application. This file renders the root component (usually App) and attaches it to the DOM.",
  },
  {
    title: "src/App.js",
    icon: "file",
    description:
      "The root component of the application. It typically includes the main layout and routing logic.",
  },
  {
    title: "src/components/",
    icon: "folder",
    description:
      "This folder contains reusable React components. Components in this folder are smaller units of the UI that can be used in different parts of the application.",
  },
  {
    title: "src/assets/",
    icon: "folder",
    description:
      "This folder is used for storing static assets like images, fonts, or global styles that will be processed by the build tool.",
  },
  {
    title: "public/",
    icon: "folder",
    description:
      "This folder contains static assets that are served directly. It includes the main HTML file and other assets like the favicon.",
  },
];

const intermediateExplanations: ExplanationItem[] = [
  {
    title: "src/",
    icon: "folder",
    description:
      "This folder contains the main source code for the React application. It now includes additional directories for better organization as the project grows.",
  },
  {
    title: "src/index.js",
    icon: "file",
    description:
      "The entry point of the React application. This file renders the root component (usually App) and attaches it to the DOM.",
  },
  {
    title: "src/App.js",
    icon: "file",
    description:
      "The root component of the application. It typically includes the main layout and routing logic.",
  },
  {
    title: "src/components/",
    icon: "folder",
    description:
      "This folder contains reusable React components. Components like Header.js and Footer.js can be used across different pages of the application.",
  },
  {
    title: "src/pages/",
    icon: "folder",
    description:
      "This folder contains components that represent entire pages or views in your application. Each file typically corresponds to a route in your application.",
  },
  {
    title: "src/assets/",
    icon: "folder",
    description:
      "This folder is used for storing static assets like images, fonts, or global styles that will be processed by the build tool.",
  },
  {
    title: "src/assets/styles/",
    icon: "folder",
    description:
      "This subfolder in the assets directory is used for global styles. The index.css file can contain application-wide CSS rules.",
  },
  {
    title: "public/",
    icon: "folder",
    description:
      "This folder contains static assets that are served directly. It includes the main HTML file and other assets like the favicon.",
  },
];

const advancedExplanations: ExplanationItem[] = [
  {
    title: "src/",
    icon: "folder",
    description:
      "This folder contains the main source code for the React application. It now includes several additional directories for a more complex application structure.",
  },
  {
    title: "src/index.js",
    icon: "file",
    description:
      "The entry point of the React application. This file renders the root component (usually App) and attaches it to the DOM.",
  },
  {
    title: "src/App.js",
    icon: "file",
    description:
      "The root component of the application. It typically includes the main layout and routing logic.",
  },
  {
    title: "src/components/",
    icon: "folder",
    description:
      "This folder contains reusable React components. Components like Header.js and Footer.js can be used across different pages of the application.",
  },
  {
    title: "src/components/ui/",
    icon: "folder",
    description:
      "This subfolder contains low-level UI components like buttons, inputs, etc., that are used across the application. These components form the building blocks for more complex components and pages.",
  },
  {
    title: "src/pages/",
    icon: "folder",
    description:
      "This folder contains components that represent entire pages or views in your application. Each file typically corresponds to a route in your application.",
  },
  {
    title: "src/assets/",
    icon: "folder",
    description:
      "This folder is used for storing static assets like images, fonts, or global styles that will be processed by the build tool.",
  },
  {
    title: "src/assets/styles/",
    icon: "folder",
    description:
      "This subfolder in the assets directory is used for global styles. The index.css file can contain application-wide CSS rules.",
  },
  {
    title: "src/hooks/",
    icon: "folder",
    description:
      "This folder contains custom React hooks. These are reusable pieces of logic that can be shared across components.",
  },
  {
    title: "src/context/",
    icon: "folder",
    description:
      "This folder contains React context providers. These are used for state management across the application.",
  },
  {
    title: "src/services/",
    icon: "folder",
    description:
      "This folder contains service files, such as API calls or other external service integrations.",
  },
  {
    title: "src/utils/",
    icon: "folder",
    description:
      "This folder contains utility functions and helper methods used throughout the application.",
  },
  {
    title: "public/",
    icon: "folder",
    description:
      "This folder contains static assets that are served directly. It includes the main HTML file and other assets like the favicon.",
  },
  {
    title: ".env",
    icon: "file",
    description:
      "This file is used to store environment variables for the application. It's important for managing configuration across different environments.",
  },
  {
    title: "jsconfig.json",
    icon: "file",
    description:
      "This file is used to configure the JavaScript language service in your editor, providing better IntelliSense and module resolution.",
  },
  {
    title: ".eslintrc.js",
    icon: "file",
    description:
      "This file contains ESLint configuration for maintaining code quality and consistency across the project.",
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
  { label: "Structures", href: "/structures" },
  { label: "React.js", href: "/structures/react-js" },
] as const;

export default function ReactJsStructurePage() {
  const renderExplanations = (explanations: ExplanationItem[]) => (
    <>
      {explanations.map((item, index) => (
        <ExplanationSection key={index} {...item} />
      ))}
    </>
  );

  return (
    <>
      <Head>
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content={metadata.mobile.apple_mobile_web_app_title}
        />
        <meta name="theme-color" content={metadata.theme_color} />
      </Head>
      <StructureTemplate
        title="React.js Project Structure"
        description="A scalable and maintainable folder structure for React.js applications"
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
