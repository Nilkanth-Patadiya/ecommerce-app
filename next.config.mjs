/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: false, // Set to true if you want a permanent redirect (308)
      },
    ]
  },
}

export default nextConfig
