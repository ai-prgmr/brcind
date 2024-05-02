/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/brcind",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
