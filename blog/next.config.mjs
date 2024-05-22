/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : true,
    experimental :{
        appDir : true,
    },
    images: {
        domains :['github.com','linkedin.com'],
    }

};

export default nextConfig;
