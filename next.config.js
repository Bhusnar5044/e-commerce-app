/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['i.dummyjson.com', 'tailwindui.com', 'res.cloudinary.com'],
    },
};

module.exports = nextConfig;
