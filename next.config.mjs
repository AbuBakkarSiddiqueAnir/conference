/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.react-finland.fi",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
