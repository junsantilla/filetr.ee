import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { FileTreeComponent, type FileTreeItem } from "@/components/file-tree";

export const metadata: Metadata = {
    title: "Next.js SaaS Starter Project Structure (Production Ready Guide)",
    description:
        "A scalable folder structure for a production-ready Next.js SaaS starter.",
    openGraph: {
        title: "Next.js SaaS Starter Project Structure (Production Ready Guide)",
        description:
            "Learn how to structure a Next.js SaaS starter with auth, billing, and multi-tenant features.",
        images: [
            {
                url: "/opengraph-image/next-js",
                width: 1200,
                height: 630,
                alt: "Next.js SaaS Starter Project Structure (Production Ready Guide)",
            },
        ],
        url: "/next-js/next-js-saas-starter-project-structure",
    },
};

const BREADCRUMB_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Next.js", href: "/next-js" },
    {
        label: "Next.js SaaS Starter",
        href: "/next-js/next-js-saas-starter-project-structure",
    },
] as const;

const saasStructure: FileTreeItem[] = [
    {
        name: "src",
        type: "folder",
        children: [
            {
                name: "app",
                type: "folder",
                children: [
                    {
                        name: "(marketing)",
                        type: "folder",
                        children: [
                            { name: "layout.tsx", type: "file" },
                            { name: "page.tsx", type: "file" },
                        ],
                    },
                    {
                        name: "(app)",
                        type: "folder",
                        children: [
                            { name: "layout.tsx", type: "file" },
                            {
                                name: "dashboard",
                                type: "folder",
                                children: [{ name: "page.tsx", type: "file" }],
                            },
                            {
                                name: "settings",
                                type: "folder",
                                children: [{ name: "page.tsx", type: "file" }],
                            },
                        ],
                    },
                    {
                        name: "api",
                        type: "folder",
                        children: [
                            {
                                name: "auth",
                                type: "folder",
                                children: [{ name: "route.ts", type: "file" }],
                            },
                            {
                                name: "billing",
                                type: "folder",
                                children: [
                                    {
                                        name: "checkout",
                                        type: "folder",
                                        children: [
                                            { name: "route.ts", type: "file" },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "webhooks",
                                type: "folder",
                                children: [
                                    {
                                        name: "stripe",
                                        type: "folder",
                                        children: [
                                            { name: "route.ts", type: "file" },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
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
                    {
                        name: "ui",
                        type: "folder",
                        children: [
                            { name: "button.tsx", type: "file" },
                            { name: "card.tsx", type: "file" },
                            { name: "dialog.tsx", type: "file" },
                        ],
                    },
                    { name: "app-shell.tsx", type: "file" },
                    { name: "site-header.tsx", type: "file" },
                    { name: "pricing-table.tsx", type: "file" },
                ],
            },
            {
                name: "features",
                type: "folder",
                children: [
                    {
                        name: "auth",
                        type: "folder",
                        children: [
                            { name: "actions.ts", type: "file" },
                            { name: "schemas.ts", type: "file" },
                            { name: "providers.ts", type: "file" },
                        ],
                    },
                    {
                        name: "billing",
                        type: "folder",
                        children: [
                            { name: "plans.ts", type: "file" },
                            { name: "actions.ts", type: "file" },
                        ],
                    },
                    {
                        name: "organizations",
                        type: "folder",
                        children: [
                            { name: "access.ts", type: "file" },
                            { name: "members.ts", type: "file" },
                        ],
                    },
                ],
            },
            {
                name: "lib",
                type: "folder",
                children: [
                    { name: "auth.ts", type: "file" },
                    { name: "billing.ts", type: "file" },
                    { name: "db.ts", type: "file" },
                    { name: "env.ts", type: "file" },
                    { name: "stripe.ts", type: "file" },
                    { name: "analytics.ts", type: "file" },
                ],
            },
            {
                name: "db",
                type: "folder",
                children: [
                    { name: "schema.ts", type: "file" },
                    { name: "migrations", type: "folder" },
                ],
            },
            {
                name: "emails",
                type: "folder",
                children: [
                    {
                        name: "templates",
                        type: "folder",
                        children: [
                            { name: "welcome.tsx", type: "file" },
                            { name: "trial-ending.tsx", type: "file" },
                        ],
                    },
                ],
            },
            {
                name: "styles",
                type: "folder",
                children: [{ name: "globals.css", type: "file" }],
            },
            { name: "middleware.ts", type: "file" },
        ],
    },
    { name: "public", type: "folder" },
    {
        name: "prisma",
        type: "folder",
        children: [{ name: "schema.prisma", type: "file" }],
    },
    { name: ".env", type: "file" },
    { name: ".env.example", type: "file" },
    { name: "next.config.mjs", type: "file" },
    { name: "package.json", type: "file" },
    { name: "tsconfig.json", type: "file" },
    { name: "README.md", type: "file" },
];

export default function NextJsSaasStarterProjectStructurePage() {
    return (
        <>
            <div className="border-b dark:border-neutral-800 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
                <div className="mx-auto max-w-7xl">
                    <div className="flex h-14 items-center justify-between overflow-x-auto scrollbar-hide px-4">
                        <Breadcrumb items={[...BREADCRUMB_ITEMS]} />
                    </div>
                </div>
            </div>

            <main className="mx-auto max-w-7xl px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">
                        Next.js SaaS Starter Project Structure (Production Ready
                        Guide)
                    </h1>
                    <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
                        A production-ready folder structure for SaaS apps with
                        authentication, billing, teams, and webhooks.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr,2fr]">
                    <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
                        <h3 className="mb-4 font-medium">File Structure</h3>
                        <div className="pt-1">
                            <FileTreeComponent items={saasStructure} />
                        </div>
                    </div>

                    <div className="space-y-10 text-neutral-500 text-base dark:text-neutral-400">
                        <section className="space-y-4">
                            {/* <h2 className="text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                                Next.js SaaS Starter Project Structure (Production Ready Guide)
                                (Production Ready Guide)
                            </h2> */}
                            <p>
                                Building a SaaS application is not just about
                                writing features. A strong project structure is
                                what keeps your app scalable, maintainable, and
                                easy to extend as your product grows.
                            </p>
                            <p>
                                This guide breaks down a production-ready
                                Next.js SaaS folder structure with
                                authentication, billing, teams, webhooks, and
                                modular architecture.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                                Why this structure matters
                            </h3>
                            <p>
                                A SaaS app usually grows fast. Without
                                structure, things quickly become messy:
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Authentication logic gets scattered.</li>
                                <li>Billing code becomes hard to manage.</li>
                                <li>API routes turn into a dumping ground.</li>
                                <li>UI components get duplicated.</li>
                            </ul>
                            <p>
                                This structure solves that by separating
                                concerns clearly and grouping features by
                                domain.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                                Project overview
                            </h3>
                            <p>At a high level, the project is divided into:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>App routes (Next.js App Router).</li>
                                <li>Feature modules.</li>
                                <li>Shared UI components.</li>
                                <li>Business logic layer.</li>
                                <li>Database and infrastructure.</li>
                                <li>Email templates and automation.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                                Folder Structure Breakdown
                            </h3>

                            <div className="space-y-3">
                                <h4 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                                    src/app (Routes and Pages)
                                </h4>
                                <p>
                                    This is the main Next.js App Router entry.
                                </p>

                                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                    Marketing pages
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>(marketing) layout.tsx</li>
                                    <li>(marketing) page.tsx</li>
                                </ul>
                                <p>Used for public-facing pages like:</p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Landing page.</li>
                                    <li>Pricing page.</li>
                                    <li>Features page.</li>
                                </ul>
                                <p>
                                    These routes are separate so marketing stays
                                    independent from the app logic.
                                </p>

                                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                    Application pages
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>(app) layout.tsx</li>
                                    <li>(app) dashboard/page.tsx</li>
                                    <li>(app) settings/page.tsx</li>
                                </ul>
                                <p>This is your authenticated SaaS area.</p>
                                <p>Typical pages:</p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Dashboard.</li>
                                    <li>User settings.</li>
                                    <li>Billing overview.</li>
                                    <li>Team management.</li>
                                </ul>
                                <p>
                                    The (app) group keeps authenticated UI
                                    isolated from marketing pages.
                                </p>

                                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                    API routes
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>api/auth/route.ts</li>
                                    <li>api/billing/checkout/route.ts</li>
                                    <li>api/webhooks/stripe/route.ts</li>
                                </ul>
                                <p>Handles backend logic inside Next.js:</p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Authentication endpoints.</li>
                                    <li>Stripe checkout sessions.</li>
                                    <li>Stripe webhooks.</li>
                                </ul>
                                <p>
                                    This avoids needing a separate backend
                                    service for most SaaS MVPs.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                                    components (Reusable UI)
                                </h4>
                                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                    UI primitives
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>components/ui/button.tsx</li>
                                    <li>components/ui/card.tsx</li>
                                    <li>components/ui/dialog.tsx</li>
                                </ul>
                                <p>
                                    These are your design system building
                                    blocks. They should be:
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Reusable.</li>
                                    <li>Stateless.</li>
                                    <li>Style-consistent.</li>
                                </ul>

                                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                    App-level components
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>app-shell.tsx</li>
                                    <li>site-header.tsx</li>
                                    <li>pricing-table.tsx</li>
                                </ul>
                                <p>
                                    These are composed components used across
                                    pages:
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>
                                        Layout wrapper for authenticated pages.
                                    </li>
                                    <li>Navigation header.</li>
                                    <li>Pricing section.</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                                    features (Feature-specific UI)
                                </h4>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>features/auth</li>
                                    <li>features/billing</li>
                                    <li>features/organizations</li>
                                </ul>
                                <p>Each feature owns its logic:</p>
                                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                    Auth
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Login logic.</li>
                                    <li>Validation schemas.</li>
                                    <li>Providers.</li>
                                </ul>
                                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                    Billing
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Stripe plans.</li>
                                    <li>Subscription logic.</li>
                                    <li>Billing actions.</li>
                                </ul>
                                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                    Organizations
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Team access control.</li>
                                    <li>Members management.</li>
                                    <li>Permissions system.</li>
                                </ul>
                                <p>
                                    This is one of the most important parts of
                                    the structure.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                                    lib (Core Business Logic)
                                </h4>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>lib/auth.ts</li>
                                    <li>lib/billing.ts</li>
                                    <li>lib/db.ts</li>
                                    <li>lib/env.ts</li>
                                    <li>lib/stripe.ts</li>
                                    <li>lib/analytics.ts</li>
                                </ul>
                                <p>
                                    This is where the real SaaS logic lives.
                                    Examples:
                                </p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>auth.ts: session handling.</li>
                                    <li>billing.ts: subscription rules.</li>
                                    <li>db.ts: database connection.</li>
                                    <li>stripe.ts: Stripe SDK setup.</li>
                                    <li>analytics.ts: event tracking.</li>
                                </ul>
                                <p>
                                    Keep this layer framework-agnostic when
                                    possible.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                                    db (Database Layer)
                                </h4>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>db/schema.ts</li>
                                    <li>db/migrations</li>
                                </ul>
                                <p>If using Prisma:</p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>prisma/schema.prisma</li>
                                </ul>
                                <p>This is where your data model lives:</p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Users.</li>
                                    <li>Organizations.</li>
                                    <li>Subscriptions.</li>
                                    <li>Usage tracking.</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                                    emails (Transactional Emails)
                                </h4>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>emails/templates/welcome.tsx</li>
                                    <li>emails/templates/trial-ending.tsx</li>
                                </ul>
                                <p>Used for SaaS communication:</p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Welcome emails.</li>
                                    <li>Billing reminders.</li>
                                    <li>Trial expiration alerts.</li>
                                </ul>
                                <p>
                                    Keeping emails isolated makes them easier to
                                    manage and test.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                                    middleware.ts (Route Protection)
                                </h4>
                                <p>Used for:</p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Authentication checks.</li>
                                    <li>Redirecting unauthenticated users.</li>
                                    <li>Protecting dashboard routes.</li>
                                </ul>
                                <p>This is critical for SaaS security.</p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                                    public (Static Assets)
                                </h4>
                                <p>Used for:</p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Images.</li>
                                    <li>Logos.</li>
                                    <li>Icons.</li>
                                    <li>Static files.</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-base font-semibold text-neutral-950 dark:text-neutral-50">
                                    Configuration files
                                </h4>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>.env</li>
                                    <li>.env.example</li>
                                    <li>next.config.mjs</li>
                                    <li>package.json</li>
                                    <li>tsconfig.json</li>
                                </ul>
                                <p>These handle:</p>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Environment variables.</li>
                                    <li>Next.js configuration.</li>
                                    <li>TypeScript setup.</li>
                                    <li>Dependencies.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                                How this structure scales
                            </h3>
                            <p>This architecture supports:</p>
                            <ol className="list-decimal space-y-1 pl-5">
                                <li>
                                    Multi-tenant SaaS: Organizations handle
                                    teams and permissions.
                                </li>
                                <li>
                                    Payments and subscriptions: Billing module
                                    is isolated and reusable.
                                </li>
                                <li>
                                    API growth: Route handlers stay clean and
                                    separated.
                                </li>
                                <li>
                                    Feature expansion: New features can be added
                                    without touching core logic.
                                </li>
                            </ol>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                                Key design principles
                            </h3>
                            <p>This structure follows four rules:</p>
                            <ol className="list-decimal space-y-1 pl-5">
                                <li>
                                    Feature-based organization: Everything
                                    related to a feature stays together.
                                </li>
                                <li>
                                    Separation of concerns: UI, logic, and data
                                    are not mixed.
                                </li>
                                <li>
                                    Scalability first: Easy to extend without
                                    refactoring core structure.
                                </li>
                                <li>
                                    Minimal coupling: Modules should not depend
                                    heavily on each other.
                                </li>
                            </ol>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                                Final thoughts
                            </h3>
                            <p>
                                A SaaS project is not defined by how fast you
                                build it, but how easily you can scale it later.
                            </p>
                            <p>
                                This structure gives you a solid foundation for
                                MVP launch, team collaboration, long-term
                                scaling, and clean architecture.
                            </p>
                            <p>
                                If you build on top of this, you will avoid most
                                of the common SaaS scaling problems early.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}
