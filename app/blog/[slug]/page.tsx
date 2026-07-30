import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/wordpress";
import Image from "next/image";

export const revalidate = 60; // Revalidate this page every 60 seconds

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt.substring(0, 160),
        openGraph: {
            title: post.title,
            description: post.excerpt.substring(0, 160),
            images: post.featuredImage ? [post.featuredImage] : [],
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="flex flex-col items-center py-16">
            {/* Background gradient effect */}

            <div className="w-full max-w-4xl px-6">
                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                {/* Article */}
                <article className="bg-white/5 backdrop-blur-sm  border border-white/10 overflow-hidden">
                    {/* Featured Image */}
                    {post.featuredImage && (
                        <div className="relative w-full h-[400px] bg-gradient-to-br from-zinc-800 to-zinc-900">
                            <Image
                                src={post.featuredImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <div className="p-8 md:p-12">
                        {/* Article Header */}
                        <header className="mb-10">
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-4 text-sm text-zinc-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <time dateTime={post.date}>
                                            {new Date(
                                                post.date,
                                            ).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </time>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-zinc-600" />
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        {post.readTime}
                                    </div>
                                </div>
                            </div>

                            <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                                {post.title}
                            </h1>

                            {/* <div className="flex items-center gap-3 text-zinc-400">
                                <User className="h-5 w-5" />
                                <span className="text-base">
                                    By{" "}
                                    <span className="text-white font-medium">
                                        {post.author}
                                    </span>
                                </span>
                            </div> */}
                        </header>

                        {/* Article Content */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <div
                                className="article-content text-zinc-300 leading-relaxed
                                    [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-white [&>h1]:mt-12 [&>h1]:mb-6 [&>h1]:leading-tight
                                    [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-5 [&>h2]:leading-tight
                                    [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-4
                                    [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:text-white [&>h4]:mt-6 [&>h4]:mb-3
                                    [&>p]:text-lg [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-zinc-300
                                    [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6 [&>ul]:space-y-2
                                    [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6 [&>ol]:space-y-2
                                    [&>li]:text-lg [&>li]:text-zinc-300 [&>li]:leading-relaxed
                                    [&>a]:text-blue-400 [&>a]:hover:text-blue-300 [&>a]:underline [&>a]:transition-colors
                                    [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500/50 [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-6 [&>blockquote]:italic [&>blockquote]:text-zinc-400
                                    [&>pre]:bg-zinc-900/50 [&>pre]:border [&>pre]:border-white/10 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:my-6 [&>pre]:overflow-x-auto
                                    [&>code]:text-blue-300 [&>code]:bg-zinc-900/50 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm
                                    [&>img]:rounded-xl [&>img]:my-8 [&>img]:shadow-2xl [&>img]:border [&>img]:border-white/10
                                    [&>hr]:border-white/10 [&>hr]:my-10
                                    [&>table]:w-full [&>table]:my-6 [&>table]:border-collapse
                                    [&>table>thead>tr>th]:bg-white/5 [&>table>thead>tr>th]:border [&>table>thead>tr>th]:border-white/10 [&>table>thead>tr>th]:p-3 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-semibold
                                    [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-white/10 [&>table>tbody>tr>td]:p-3
                                    [&_strong]:text-white [&_strong]:font-semibold
                                    [&_em]:italic [&_em]:text-zinc-400"
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            />
                        </div>
                    </div>

                    {/* Article Footer */}
                    <footer className="px-8 md:px-12 pb-8 pt-8 border-t border-white/10">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                            >
                                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                Back to all posts
                            </Link>

                            <div className="text-sm text-zinc-500">
                                #
                                {post.category
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}
                            </div>
                        </div>
                    </footer>
                </article>
            </div>
        </main>
    );
}
