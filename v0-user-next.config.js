/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:code",
        destination: "/api/redirect/:code",
      },
    ]
  },
}

module.exports = nextConfig

