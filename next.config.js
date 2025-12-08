/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure Node.js runtime is used (default for App Router)
  experimental: {
    // Enable any experimental features if needed
  },
  // Optimize for Cloudflare Workers
  output: 'standalone'
}

module.exports = nextConfig
