/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/talent/new",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
