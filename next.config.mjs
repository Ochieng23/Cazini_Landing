/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "https://cazinilandingpage.azurewebsites.net/",
          },
        ],
        destination: "https://cazini.co.ke/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
