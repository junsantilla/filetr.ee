import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/wordpress";

interface BlogCardProps {
    post: BlogPost;
    showReadTime?: boolean;
}

export default function BlogCard({
    post,
    showReadTime = false,
}: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group rounded-lg border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 flex flex-col"
        >
            {post.featuredImage && (
                <div className="relative w-full h-48 bg-gradient-to-br from-zinc-800 to-zinc-900">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-sm">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white">
                        {post.category}
                    </span>
                    {showReadTime && (
                        <div className="flex items-center gap-2 text-zinc-400">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                        </div>
                    )}
                </div>
                <div className="flex-1">
                    <h3 className="text-md font-semibold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-sm text-zinc-400 line-clamp-3">
                        {post.excerpt}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </time>
                    </div>
                    <div className="flex items-center text-sm text-white font-medium group-hover:gap-2 transition-all">
                        Read more
                        <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
