/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  env: {
    geminiApiKey: process.env.GEMINI_API_KEY,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    accessToken: process.env.ACCESS_TOKEN
  },
}

module.exports = nextConfig
