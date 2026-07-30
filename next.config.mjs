/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: process.env.WORDPRESS_IMAGE_HOST,
                pathname: "/wp-content/uploads/**",
            },
            {
                protocol: "https",
                hostname: "*.wp.com",
            },
        ],
    },
};

export default nextConfig;
