import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/wordpress";
import BlogCard from "@/components/BlogCard";

export const revalidate = 0;

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Discover coding tutorials, web development guides, JavaScript, TypeScript, React, Next.js tips, project organization strategies, and developer best practices.",
};

export default async function BlogPage() {
    const blogPosts = await getBlogPosts(20);

    if (!blogPosts || blogPosts.length === 0) {
        return (
            <main className="flex flex-col items-center pt-32">
                <section>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                        Blog
                    </h1>
                    <p className="mb-12 max-w-3xl text-lg text-neutral-500 dark:text-neutral-400">
                        Explore practical guides, tutorials, best practices, and
                        development insights for modern web development. From
                        project architecture and folder structures to
                        frameworks, tools, and coding tips, our blog helps you
                        build better software.
                    </p>
                </section>
            </main>
        );
    }

    const featuredPosts = blogPosts.slice(0, 2);
    const regularPosts = blogPosts;

    return (
        <main className="py-16 w-full max-w-7xl px-6 mx-auto">
            {/* Hero Section */}
            <section>
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                    Blog
                </h1>
                <p className="mb-12 max-w-3xl text-lg text-neutral-500 dark:text-neutral-400">
                    Explore practical guides, tutorials, best practices, and
                    development insights for modern web development. From
                    project architecture and folder structures to frameworks,
                    tools, and coding tips, our blog helps you build better
                    software.
                </p>
            </section>

            {/* All Posts */}
            <section>
                <h2 className="text-2xl font-bold text-white mb-8">
                    All Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} showReadTime />
                    ))}
                </div>
            </section>
        </main>
    );
}
