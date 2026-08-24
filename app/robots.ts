import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://filetr.ee";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // Signed-in and API-only routes, nothing worth indexing.
            // Public profiles under /u/ are deliberately left crawlable.
            disallow: ["/api/", "/login", "/profile", "/templates/"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
