/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : true,
    experimental :{
        appDir : true,
    },
    images: {
        domains :['github.com','linkedin.com', "cdn.sanity.io"],
    }

};

export default nextConfig;
