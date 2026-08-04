// WordPress.com sites use the public API endpoint
const WORDPRESS_API_URL =
    "https://public-api.wordpress.com/wp/v2/sites/filetreeblog.wordpress.com";

export interface WordPressPost {
    id: number;
    date: string;
    modified: string;
    slug: string;
    status: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    author: number;
    featured_media: number;
    categories: number[];
    tags: number[];
    _embedded?: {
        author?: Array<{
            name: string;
        }>;
        "wp:featuredmedia"?: Array<{
            source_url: string;
        }>;
        "wp:term"?: Array<
            Array<{
                id: number;
                name: string;
                slug: string;
            }>
        >;
    };
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    slug: string;
    author: string;
    category: string;
    readTime: string;
    featuredImage?: string;
}

// Calculate estimated reading time based on content
function calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, ""); // Strip HTML tags
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
}

// Transform WordPress post to our BlogPost format
function transformPost(post: WordPressPost): BlogPost {
    const category =
        post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";
    const author = post._embedded?.author?.[0]?.name || "GTA VI Mods Team";
    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    // Decode HTML entities in title and excerpt
    const decodeHTMLEntities = (text: string): string => {
        const textArea =
            typeof document !== "undefined"
                ? document.createElement("textarea")
                : null;

        if (textArea) {
            textArea.innerHTML = text;
            return textArea.value;
        }

        // Server-side fallback - decode common HTML entities
        return text
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&#8217;/g, "'")
            .replace(/&#8216;/g, "'")
            .replace(/&#8220;/g, '"')
            .replace(/&#8221;/g, '"')
            .replace(/&#8211;/g, "–")
            .replace(/&#8212;/g, "—")
            .replace(/&hellip;/g, "…")
            .replace(/&nbsp;/g, " ");
    };

    return {
        id: post.id,
        title: decodeHTMLEntities(post.title.rendered),
        excerpt: decodeHTMLEntities(
            post.excerpt.rendered.replace(/<[^>]*>/g, "").trim(),
        ),
        content: post.content.rendered,
        date: post.date,
        slug: post.slug,
        author,
        category,
        readTime: calculateReadTime(post.content.rendered),
        featuredImage,
    };
}

// Fetch all blog posts
export async function getBlogPosts(
    limit: number = 10,
): Promise<BlogPost[] | null> {
    try {
        const response = await fetch(
            `${WORDPRESS_API_URL}/posts?_embed&per_page=${limit}&orderby=date&order=desc`,
            {
                next: { revalidate: 60 }, // Revalidate every 60 seconds (1 minute)
            },
        );

        if (!response.ok) {
            console.error(
                `Failed to fetch posts: ${response.status} ${response.statusText}`,
            );
            return null;
        }

        const posts: WordPressPost[] = await response.json();
        return posts.map(transformPost);
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return null;
    }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(
    slug: string,
): Promise<BlogPost | null> {
    try {
        const url = `${WORDPRESS_API_URL}/posts?_embed&slug=${slug}`;
        console.log(`Fetching post from: ${url}`);

        const response = await fetch(url, {
            next: { revalidate: 60 }, // Revalidate every 60 seconds (1 minute)
        });

        console.log(
            `Response status: ${response.status} ${response.statusText}`,
        );

        if (!response.ok) {
            console.error(
                `Failed to fetch post: ${response.status} ${response.statusText}`,
            );
            return null;
        }

        const posts: WordPressPost[] = await response.json();
        console.log(`Found ${posts.length} post(s) for slug: ${slug}`);

        if (posts.length > 0) {
            console.log(`Post title: ${posts[0].title.rendered}`);
        }

        if (posts.length === 0) {
            return null;
        }

        return transformPost(posts[0]);
    } catch (error) {
        console.error(`Error fetching blog post with slug ${slug}:`, error);
        return null;
    }
}

// Fetch featured posts (you can customize the criteria)
export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
    const posts = await getBlogPosts(limit);
    return posts || [];
}

export async function getBlogPostsByCategory(
    categorySlug: string,
    limit = 20,
): Promise<BlogPost[]> {
    try {
        // Get category ID from slug
        const categoryRes = await fetch(
            `${WORDPRESS_API_URL}/categories?slug=${categorySlug}`,
            {
                next: {
                    revalidate: 60,
                },
            },
        );

        if (!categoryRes.ok) {
            console.error("Failed to fetch category");
            return [];
        }

        const categories = await categoryRes.json();

        if (!categories.length) {
            return [];
        }

        const categoryId = categories[0].id;

        // Get posts from category
        const postsRes = await fetch(
            `${WORDPRESS_API_URL}/posts?_embed&categories=${categoryId}&per_page=${limit}&orderby=date&order=desc`,
            {
                next: {
                    revalidate: 60,
                },
            },
        );

        if (!postsRes.ok) {
            console.error("Failed to fetch category posts");
            return [];
        }

        const posts: WordPressPost[] = await postsRes.json();

        return posts.map(transformPost);
    } catch (error) {
        console.error(
            `Error fetching posts for category ${categorySlug}:`,
            error,
        );
        return [];
    }
}
