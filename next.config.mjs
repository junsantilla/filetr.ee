/** @type {import('next').NextConfig} */
const wordpressImageHost = process.env.WORDPRESS_IMAGE_HOST;

const nextConfig = {
    images: {
        remotePatterns: [
            // Only added when the host is configured. An entry with an
            // undefined hostname fails Next's config validation.
            ...(wordpressImageHost
                ? [
                      {
                          protocol: "https",
                          hostname: wordpressImageHost,
                          pathname: "/wp-content/uploads/**",
                      },
                  ]
                : []),
            {
                protocol: "https",
                hostname: "*.wp.com",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
        ],
    },
};

export default nextConfig;
