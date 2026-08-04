import BlogCard from "@/components/BlogCard";
import { getBlogPostsByCategory } from "@/lib/wordpress";
import Link from "next/link";

type CategoryBlogListProps = {
    category: string;
    title?: string;
    description?: string;
    limit?: number;
};

export default async function CategoryBlogList({
    category,
    title,
    description,
    limit = 20,
}: CategoryBlogListProps) {
    const posts = await getBlogPostsByCategory(category, limit);

    if (!posts.length) {
        return (
            <section className="py-16">
                {title && (
                    <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
                        Blog
                    </h2>
                )}

                {description && (
                    <p className="mb-12 max-w-3xl text-lg text-neutral-500 dark:text-neutral-400">
                        {description}
                    </p>
                )}

                <p className="text-neutral-500">No blog posts found.</p>
            </section>
        );
    }

    return (
        <section className="py-16">
            {title && (
                <h2 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
                    Blog
                </h2>
            )}

            {description && (
                <p className="mb-12 max-w-3xl text-lg text-neutral-500 dark:text-neutral-400">
                    {description}
                </p>
            )}

            <div className="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-neutral-200 dark:border-neutral-800">
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="flex justify-between gap-6 py-6"
                    >
                        <div>
                            <Link href={`/blog/${post.slug}`}>
                                <h3 className="text-lg font-semibold cursor-pointer">
                                    {post.title}
                                </h3>
                            </Link>

                            <div className="mt-2 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                                <time>
                                    {new Date(post.date).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        },
                                    )}
                                </time>

                                <span>•</span>

                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <Link
                            href={`/blog/${post.slug}`}
                            className="shrink-0 text-sm font-medium cursor-pointer"
                        >
                            Read more →
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
