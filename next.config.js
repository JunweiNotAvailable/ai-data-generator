/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    geminiApiKey: process.env.GEMINI_API_KEY,
  },
}

module.exports = nextConfig
