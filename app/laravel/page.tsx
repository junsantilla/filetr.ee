import type { Metadata } from "next";
import { StructureTemplate } from "@/components/structure-template";
import { Badge } from "@/components/ui/badge";
import { Folder, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Laravel Project Structure",
  description:
    "A scalable and maintainable folder structure for Laravel applications",
  openGraph: {
    title: "Laravel Project Structure",
    description:
      "Learn how to structure your Laravel project for scalability and maintainability.",
    images: [
      {
        url: "/opengraph-image/laravel",
        width: 1200,
        height: 630,
        alt: "Laravel Project Structure Overview",
      },
    ],
    url: "/laravel",
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
    name: "app",
    type: "folder",
    children: [
      { name: "Http", type: "folder" },
      { name: "Models", type: "folder" },
      { name: "Providers", type: "folder" },
    ],
  },
  { name: "bootstrap", type: "folder" },
  { name: "config", type: "folder" },
  { name: "database", type: "folder" },
  { name: "public", type: "folder" },
  { name: "resources", type: "folder" },
  { name: "routes", type: "folder" },
  { name: "storage", type: "folder" },
  { name: "tests", type: "folder" },
  { name: "vendor", type: "folder" },
  { name: ".env", type: "file" },
  { name: "composer.json", type: "file" },
  { name: "README.md", type: "file" },
];

const intermediateStructure: FileTreeItem[] = [
  {
    name: "app",
    type: "folder",
    children: [
      {
        name: "Http",
        type: "folder",
        children: [
          { name: "Controllers", type: "folder" },
          { name: "Middleware", type: "folder" },
        ],
      },
      { name: "Models", type: "folder" },
      { name: "Providers", type: "folder" },
    ],
  },
  { name: "bootstrap", type: "folder" },
  { name: "config", type: "folder" },
  {
    name: "database",
    type: "folder",
    children: [
      { name: "migrations", type: "folder" },
      { name: "seeders", type: "folder" },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "css", type: "folder" },
      { name: "js", type: "folder" },
      { name: "images", type: "folder" },
    ],
  },
  {
    name: "resources",
    type: "folder",
    children: [
      { name: "views", type: "folder" },
      { name: "lang", type: "folder" },
      { name: "sass", type: "folder" },
    ],
  },
  {
    name: "routes",
    type: "folder",
    children: [
      { name: "web.php", type: "file" },
      { name: "api.php", type: "file" },
    ],
  },
  { name: "storage", type: "folder" },
  { name: "tests", type: "folder" },
  { name: "vendor", type: "folder" },
  { name: ".env", type: "file" },
  { name: "composer.json", type: "file" },
  { name: "README.md", type: "file" },
];

const advancedStructure: FileTreeItem[] = [
  {
    name: "app",
    type: "folder",
    children: [
      {
        name: "Http",
        type: "folder",
        children: [
          { name: "Controllers", type: "folder" },
          { name: "Middleware", type: "folder" },
          { name: "Requests", type: "folder" },
        ],
      },
      { name: "Models", type: "folder" },
      { name: "Providers", type: "folder" },
      { name: "Events", type: "folder" },
      { name: "Listeners", type: "folder" },
      { name: "Jobs", type: "folder" },
      { name: "Notifications", type: "folder" },
    ],
  },
  { name: "bootstrap", type: "folder" },
  { name: "config", type: "folder" },
  {
    name: "database",
    type: "folder",
    children: [
      { name: "migrations", type: "folder" },
      { name: "seeders", type: "folder" },
      { name: "factories", type: "folder" },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "css", type: "folder" },
      { name: "js", type: "folder" },
      { name: "images", type: "folder" },
    ],
  },
  {
    name: "resources",
    type: "folder",
    children: [
      { name: "views", type: "folder" },
      { name: "lang", type: "folder" },
      { name: "sass", type: "folder" },
      { name: "js", type: "folder" },
    ],
  },
  {
    name: "routes",
    type: "folder",
    children: [
      { name: "web.php", type: "file" },
      { name: "api.php", type: "file" },
      { name: "console.php", type: "file" },
    ],
  },
  { name: "storage", type: "folder" },
  {
    name: "tests",
    type: "folder",
    children: [
      { name: "Feature", type: "folder" },
      { name: "Unit", type: "folder" },
    ],
  },
  { name: "vendor", type: "folder" },
  { name: ".env", type: "file" },
  { name: "composer.json", type: "file" },
  { name: "README.md", type: "file" },
];

const basicExplanations: ExplanationItem[] = [
  {
    title: "app/",
    icon: "folder",
    description:
      "The main application folder containing all the core logic of the Laravel application.",
  },
  {
    title: "app/Http/",
    icon: "folder",
    description:
      "Contains controllers, middleware, and other HTTP-related logic.",
  },
  {
    title: "app/Models/",
    icon: "folder",
    description: "Contains Eloquent models for database interaction.",
  },
  {
    title: "app/Providers/",
    icon: "folder",
    description:
      "Contains service providers for bootstrapping the application.",
  },
  {
    title: "bootstrap/",
    icon: "folder",
    description:
      "Contains the app.php file which bootstraps the framework and handles autoloading.",
  },
  {
    title: "config/",
    icon: "folder",
    description: "Contains configuration files for the Laravel application.",
  },
  {
    title: "database/",
    icon: "folder",
    description:
      "Contains database migrations, seeders, and factories for managing the database schema and data.",
  },
  {
    title: "public/",
    icon: "folder",
    description:
      "Contains the entry point (index.php) and assets like CSS, JavaScript, and images.",
  },
  {
    title: "resources/",
    icon: "folder",
    description:
      "Contains views, language files, and raw assets like Sass and JavaScript.",
  },
  {
    title: "routes/",
    icon: "folder",
    description: "Contains all the route definitions for the application.",
  },
  {
    title: "storage/",
    icon: "folder",
    description:
      "Contains logs, compiled Blade templates, file uploads, and other generated files.",
  },
  {
    title: "tests/",
    icon: "folder",
    description: "Contains automated tests for the application.",
  },
  {
    title: "vendor/",
    icon: "folder",
    description:
      "Contains Composer dependencies installed for the Laravel project.",
  },
  {
    title: ".env",
    icon: "file",
    description:
      "Stores environment-specific configuration like database credentials.",
  },
  {
    title: "composer.json",
    icon: "file",
    description: "Defines the project dependencies and scripts for Composer.",
  },
  {
    title: "README.md",
    icon: "file",
    description:
      "Documentation file providing an overview and instructions for the project.",
  },
];

const intermediateExplanations: ExplanationItem[] = [
  {
    title: "app/Http/Controllers/",
    icon: "folder",
    description:
      "Contains controllers that handle HTTP requests and return responses.",
  },
  {
    title: "app/Http/Middleware/",
    icon: "folder",
    description:
      "Contains middleware for filtering HTTP requests entering the application.",
  },
  {
    title: "database/migrations/",
    icon: "folder",
    description:
      "Contains migration files for creating and modifying database tables.",
  },
  {
    title: "database/seeders/",
    icon: "folder",
    description:
      "Contains seeders for populating the database with test or default data.",
  },
  {
    title: "public/css/",
    icon: "folder",
    description: "Contains CSS files for styling the application.",
  },
  {
    title: "public/js/",
    icon: "folder",
    description: "Contains JavaScript files for client-side functionality.",
  },
  {
    title: "public/images/",
    icon: "folder",
    description: "Contains image files used in the application.",
  },
  {
    title: "resources/views/",
    icon: "folder",
    description: "Contains Blade templates for rendering HTML views.",
  },
  {
    title: "resources/lang/",
    icon: "folder",
    description: "Contains language files for localization and translation.",
  },
  {
    title: "resources/sass/",
    icon: "folder",
    description: "Contains Sass files for styling the application.",
  },
  {
    title: "routes/web.php",
    icon: "file",
    description: "Defines routes for the web interface.",
  },
  {
    title: "routes/api.php",
    icon: "file",
    description: "Defines routes for the API interface.",
  },
];

const advancedExplanations: ExplanationItem[] = [
  {
    title: "app/Http/Requests/",
    icon: "folder",
    description:
      "Contains form request classes for validating incoming HTTP requests.",
  },
  {
    title: "app/Events/",
    icon: "folder",
    description: "Contains event classes for triggering application events.",
  },
  {
    title: "app/Listeners/",
    icon: "folder",
    description: "Contains listener classes that handle triggered events.",
  },
  {
    title: "app/Jobs/",
    icon: "folder",
    description:
      "Contains job classes for queueing tasks to be processed asynchronously.",
  },
  {
    title: "app/Notifications/",
    icon: "folder",
    description:
      "Contains notification classes for sending notifications to users.",
  },
  {
    title: "database/factories/",
    icon: "folder",
    description:
      "Contains factory classes for generating fake data for testing.",
  },
  {
    title: "resources/js/",
    icon: "folder",
    description:
      "Contains JavaScript files for client-side functionality, often used with tools like Vue.js or React.",
  },
  {
    title: "routes/console.php",
    icon: "file",
    description: "Defines Artisan commands for the application.",
  },
  {
    title: "tests/Feature/",
    icon: "folder",
    description: "Contains feature tests for testing application behavior.",
  },
  {
    title: "tests/Unit/",
    icon: "folder",
    description: "Contains unit tests for testing individual components.",
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
  { label: "Laravel", href: "/laravel" },
] as const;

export default function LaravelStructurePage() {
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
        title="Laravel Project Structure"
        description="A scalable and maintainable folder structure for Laravel applications"
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
