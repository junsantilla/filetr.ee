// import DynamicMetadata from "@/components/dynamicMetatdata";
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
        url: "/opengraph-images/next-js",
        width: 1200,
        height: 630,
        alt: "Next.js Project Structure Overview",
      },
    ],
    site_name: "filetr.ee",
    url: "https://filetr.ee/structures/next-js",
  },
  theme_color: "#000000",
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
      {
        name: "app",
        type: "folder",
        children: [
          { name: "layout.tsx", type: "file" },
          { name: "page.tsx", type: "file" },
          { name: "loading.tsx", type: "file" },
          { name: "error.tsx", type: "file" },
        ],
      },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Navbar.tsx", type: "file" },
          { name: "Footer.tsx", type: "file" },
        ],
      },
      {
        name: "styles",
        type: "folder",
        children: [
          { name: "globals.css", type: "file" },
          { name: "variables.css", type: "file" },
        ],
      },
    ],
  },
  { name: "next.config.js", type: "file" },
  { name: "package.json", type: "file" },
  { name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "app",
        type: "folder",
        children: [
          { name: "layout.tsx", type: "file" },
          { name: "page.tsx", type: "file" },
          { name: "loading.tsx", type: "file" },
          { name: "error.tsx", type: "file" },
          {
            name: "dashboard",
            type: "folder",
            children: [
              { name: "page.tsx", type: "file" },
              { name: "layout.tsx", type: "file" },
              { name: "loading.tsx", type: "file" },
              { name: "error.tsx", type: "file" },
            ],
          },
        ],
      },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Navbar.tsx", type: "file" },
          { name: "Footer.tsx", type: "file" },
        ],
      },
      {
        name: "hooks",
        type: "folder",
        children: [
          { name: "useAuth.ts", type: "file" },
          { name: "useFetch.ts", type: "file" },
        ],
      },
      {
        name: "lib",
        type: "folder",
        children: [
          { name: "api.ts", type: "file" },
          { name: "auth.ts", type: "file" },
        ],
      },
      {
        name: "styles",
        type: "folder",
        children: [
          { name: "globals.css", type: "file" },
          { name: "variables.css", type: "file" },
        ],
      },
      {
        name: "middleware.ts",
        type: "file",
      },
    ],
  },
  {
    name: "test",
    type: "folder",
    children: [
      { name: "__mocks__", type: "folder" },
      { name: "components", type: "folder" },
      { name: "pages", type: "folder" },
    ],
  },
  { name: "next.config.js", type: "file" },
  { name: "package.json", type: "file" },
  { name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "app",
        type: "folder",
        children: [
          { name: "layout.tsx", type: "file" },
          { name: "page.tsx", type: "file" },
          { name: "loading.tsx", type: "file" },
          { name: "error.tsx", type: "file" },
          {
            name: "dashboard",
            type: "folder",
            children: [
              { name: "page.tsx", type: "file" },
              { name: "layout.tsx", type: "file" },
              { name: "loading.tsx", type: "file" },
              { name: "error.tsx", type: "file" },
            ],
          },
        ],
      },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Navbar.tsx", type: "file" },
          { name: "Footer.tsx", type: "file" },
        ],
      },
      {
        name: "hooks",
        type: "folder",
        children: [
          { name: "useAuth.ts", type: "file" },
          { name: "useFetch.ts", type: "file" },
        ],
      },
      {
        name: "lib",
        type: "folder",
        children: [
          { name: "api.ts", type: "file" },
          { name: "auth.ts", type: "file" },
        ],
      },
      {
        name: "styles",
        type: "folder",
        children: [
          { name: "globals.css", type: "file" },
          { name: "variables.css", type: "file" },
        ],
      },
      {
        name: "assets",
        type: "folder",
      },
      {
        name: "providers",
        type: "folder",
        children: [
          { name: "ThemeProvider.tsx", type: "file" },
          { name: "AuthProvider.tsx", type: "file" },
        ],
      },
      {
        name: "middleware.ts",
        type: "file",
      },
    ],
  },
  {
    name: "prisma",
    type: "folder",
    children: [
      { name: "schema.prisma", type: "file" },
      { name: "migrations", type: "folder" },
    ],
  },
  {
    name: "test",
    type: "folder",
    children: [
      { name: "__mocks__", type: "folder" },
      { name: "components", type: "folder" },
      { name: "pages", type: "folder" },
    ],
  },
  { name: ".env", type: "file" },
  { name: ".eslintrc.json", type: "file" },
  { name: ".prettierrc", type: "file" },
  { name: "next.config.js", type: "file" },
  { name: "tsconfig.json", type: "file" },
  { name: "package.json", type: "file" },
  { name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
  {
    title: "src/",
    icon: "folder",
    description:
      "This folder contains the main application logic, including routes, components, styles, and utilities. It is recommended for better project organization, ensuring a clear separation between source code and configuration files.",
  },
  {
    title: "src/app/",
    icon: "file",
    description:
      "This folder is a fundamental feature of Next.js 13+, where every folder inside it corresponds to a route. This directory follows the file-based routing system, meaning each folder and file structure reflects the application's URL paths.",
  },
  {
    title: "app/layout.tsx",
    icon: "file",
    description:
      "A special file in the App Router that acts as the root layout for all pages inside app/.",
  },
  {
    title: "app/page.tsx",
    icon: "file",
    description:
      "This file represents the main entry point of the application, typically corresponding to the home page (/).",
  },
  {
    title: "app/loading.tsx",
    icon: "file",
    description:
      "This file is a special feature in Next.js App Router that allows you to create a custom loading screen while a page or component is fetching data.",
  },
  {
    title: "app/error.tsx",
    icon: "file",
    description: "This file is used to handle errors at the route level.",
  },
  {
    title: "src/components",
    icon: "folder",
    description:
      "This folder is used to store reusable UI components that can be used across multiple pages and layouts.",
  },
  {
    title: "components/Navbar.tsx",
    icon: "file",
    description:
      "This file is typically included inside the layout.tsx file to provide consistent navigation across all pages.",
  },
  {
    title: "components/Footer.tsx",
    icon: "file",
    description:
      "This file is used to display important information such as copyright details, links, and contact information at the bottom of every page.",
  },
  {
    title: "src/styles",
    icon: "folder",
    description:
      "This folder contains global stylesheets that apply consistent styling across the entire application.",
  },
  {
    title: "styles/globals.css",
    icon: "file",
    description:
      "This file contains CSS rules that apply to all pages and components.",
  },
  {
    title: "styles/variables.css",
    icon: "file",
    description:
      "This file defines custom CSS variables for things like colors, fonts, spacing, and themes.",
  },
  {
    title: "next.config.js",
    icon: "file",
    description:
      "This file is used to configure Next.js settings, such as custom redirects, rewrites, environment variables, and image optimizations.",
  },
  {
    title: "package.json",
    icon: "file",
    description:
      "This file contains metadata about the project, such as project name, version, dependencies, and scripts.",
  },
  {
    title: "Readme.md",
    icon: "file",
    description:
      "This file serves as project documentation, providing instructions on how to set up and run the application.",
  },
];

const intermediateExplanations: ExplanationItem[] = [
  {
    title: "src/",
    icon: "folder",
    description:
      "This folder contains the main application logic, including routes, components, styles, and utilities. It is recommended for better project organization, ensuring a clear separation between source code and configuration files.",
  },
  {
    title: "src/app/",
    icon: "file",
    description:
      "This folder is a fundamental feature of Next.js 13+, where every folder inside it corresponds to a route. This directory follows the file-based routing system, meaning each folder and file structure reflects the application's URL paths.",
  },
  {
    title: "app/layout.tsx",
    icon: "file",
    description:
      "A special file in the App Router that acts as the root layout for all pages inside app/.",
  },
  {
    title: "app/page.tsx",
    icon: "file",
    description:
      "This file represents the main entry point of the application, typically corresponding to the home page (/).",
  },
  {
    title: "app/loading.tsx",
    icon: "file",
    description:
      "This file is a special feature in Next.js App Router that allows you to create a custom loading screen while a page or component is fetching data.",
  },
  {
    title: "app/error.tsx",
    icon: "file",
    description: "This file is used to handle errors at the route level.",
  },
  {
    title: "app/dashboard",
    icon: "folder",
    description: "This folder represents a nested route (/dashboard).",
  },
  {
    title: "src/components",
    icon: "folder",
    description:
      "This folder is used to store reusable UI components that can be used across multiple pages and layouts.",
  },
  {
    title: "components/Navbar.tsx",
    icon: "file",
    description:
      "This file is typically included inside the layout.tsx file to provide consistent navigation across all pages.",
  },
  {
    title: "components/Footer.tsx",
    icon: "file",
    description:
      "This file is used to display important information such as copyright details, links, and contact information at the bottom of every page.",
  },
  {
    title: "src/hooks",
    icon: "folder",
    description:
      "This file is used to store custom React hooks, which encapsulate logic that can be reused across components.",
  },
  {
    title: "hooks/useAuth.ts",
    icon: "file",
    description: "This hook manages user authentication",
  },
  {
    title: "hooks/useFetch.ts",
    icon: "file",
    description:
      "A reusable data fetching hook that helps manage API requests efficiently.",
  },
  {
    title: "src/lib",
    icon: "folder",
    description:
      "This folder contains helper functions, API utilities, and configuration files.",
  },
  {
    title: "lib/api.ts",
    icon: "file",
    description: "Handles API requests to backend services.",
  },
  {
    title: "lib/auth.ts",
    icon: "file",
    description:
      "Manages authentication logic, including token management and user sessions.",
  },
  {
    title: "styles/globals.css",
    icon: "file",
    description:
      "This file contains CSS rules that apply to all pages and components.",
  },
  {
    title: "styles/variables.css",
    icon: "file",
    description:
      "This file defines custom CSS variables for things like colors, fonts, spacing, and themes.",
  },
  {
    title: "src/middleware.ts",
    icon: "file",
    description:
      "This file is used to define middleware logic for authentication, security, and redirects.",
  },
  {
    title: "next.config.js",
    icon: "file",
    description:
      "This file is used to configure Next.js settings, such as custom redirects, rewrites, environment variables, and image optimizations.",
  },
  {
    title: "package.json",
    icon: "file",
    description:
      "This file contains metadata about the project, such as project name, version, dependencies, and scripts.",
  },
  {
    title: "Readme.md",
    icon: "file",
    description:
      "This file serves as project documentation, providing instructions on how to set up and run the application.",
  },
];

const advancedExplanations: ExplanationItem[] = [
  {
    title: "src/",
    icon: "folder",
    description:
      "This folder contains the main application logic, including routes, components, styles, and utilities. It is recommended for better project organization, ensuring a clear separation between source code and configuration files.",
  },
  {
    title: "src/app/",
    icon: "file",
    description:
      "This folder is a fundamental feature of Next.js 13+, where every folder inside it corresponds to a route. This directory follows the file-based routing system, meaning each folder and file structure reflects the application's URL paths.",
  },
  {
    title: "app/layout.tsx",
    icon: "file",
    description:
      "A special file in the App Router that acts as the root layout for all pages inside app/.",
  },
  {
    title: "app/page.tsx",
    icon: "file",
    description:
      "This file represents the main entry point of the application, typically corresponding to the home page (/).",
  },
  {
    title: "app/loading.tsx",
    icon: "file",
    description:
      "This file is a special feature in Next.js App Router that allows you to create a custom loading screen while a page or component is fetching data.",
  },
  {
    title: "app/error.tsx",
    icon: "file",
    description: "This file is used to handle errors at the route level.",
  },
  {
    title: "app/dashboard",
    icon: "folder",
    description: "This folder represents a nested route (/dashboard).",
  },
  {
    title: "src/components",
    icon: "folder",
    description:
      "This folder is used to store reusable UI components that can be used across multiple pages and layouts.",
  },
  {
    title: "components/Navbar.tsx",
    icon: "file",
    description:
      "This file is typically included inside the layout.tsx file to provide consistent navigation across all pages.",
  },
  {
    title: "components/Footer.tsx",
    icon: "file",
    description:
      "This file is used to display important information such as copyright details, links, and contact information at the bottom of every page.",
  },
  {
    title: "src/hooks",
    icon: "folder",
    description:
      "This file is used to store custom React hooks, which encapsulate logic that can be reused across components.",
  },
  {
    title: "hooks/useAuth.ts",
    icon: "file",
    description: "This hook manages user authentication",
  },
  {
    title: "hooks/useFetch.ts",
    icon: "file",
    description:
      "A reusable data fetching hook that helps manage API requests efficiently.",
  },
  {
    title: "src/lib",
    icon: "folder",
    description:
      "This folder contains helper functions, API utilities, and configuration files.",
  },
  {
    title: "lib/api.ts",
    icon: "file",
    description: "Handles API requests to backend services.",
  },
  {
    title: "lib/auth.ts",
    icon: "file",
    description:
      "Manages authentication logic, including token management and user sessions.",
  },
  {
    title: "styles/globals.css",
    icon: "file",
    description:
      "This file contains CSS rules that apply to all pages and components.",
  },
  {
    title: "styles/variables.css",
    icon: "file",
    description:
      "This file defines custom CSS variables for things like colors, fonts, spacing, and themes.",
  },
  {
    title: "src/assets",
    icon: "folder",
    description: "This folder contains images, fonts, and other static assets.",
  },
  {
    title: "src/providers",
    icon: "folder",
    description:
      "This folder contains React context providers (e.g., ThemeProvider, AuthProvider) that manage global state and data.",
  },
  {
    title: "src/middleware.ts",
    icon: "file",
    description:
      "This file is used to define middleware logic for authentication, security, and redirects.",
  },
  {
    title: "src/prisma",
    icon: "folder",
    description:
      "This folder contains Prisma ORM schema and database migration files for database management.",
  },
  {
    title: "tests",
    icon: "folder",
    description:
      "This folder contains unit tests, integration tests, and mock data for testing the application.",
  },
  {
    title: "tests/__mocks__/",
    icon: "file",
    description:
      "This file contains mock data and utilities for testing purposes.",
  },
  {
    title: "tests/components/",
    icon: "folder",
    description:
      "This folder contains unit tests for React components and UI elements.",
  },
  {
    title: "tests/pages/",
    icon: "folder",
    description:
      "This folder contains integration tests for Next.js pages and routes.",
  },
  {
    title: "next.config.js",
    icon: "file",
    description:
      "This file is used to configure Next.js settings, such as custom redirects, rewrites, environment variables, and image optimizations.",
  },
  {
    title: "package.json",
    icon: "file",
    description:
      "This file contains metadata about the project, such as project name, version, dependencies, and scripts.",
  },
  {
    title: "Readme.md",
    icon: "file",
    description:
      "This file serves as project documentation, providing instructions on how to set up and run the application.",
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
  { label: "Next.js", href: "/structures/next-js" },
] as const;

export default function NextJsStructurePage() {
  const title = "Next.js Project Structure";
  const description =
    "Learn how to structure your Next.js project for scalability and maintainability.";
  const baseUrl = "http://filetr.ee"; // Ensure full URL
  const imageUrl = `${baseUrl}/images/og-next.png`;
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
          content="Next.js Project Structure Overview"
        />
        <meta property="og:site_name" content="yourwebsite.com" />
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
      <StructureTemplate
        title="Next.js Project Structure"
        description="A scalable and maintainable folder structure for Next.js applications"
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
