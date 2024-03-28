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
    accessToken: process.env.ACCESS_TOKEN,

    postgresUrl: process.env.POSTGRES_URL,
    postgresPrismaUrl: process.env.POSTGRES_PRISMA_URL,
    postgresUrlNoSSL: process.env.POSTGRES_URL_NO_SSL,
    postgresUrlNonPooling: process.env.POSTGRES_URL_NON_POOLING,
    postgresPostgresUser: process.env.POSTGRES_USER,
    postgresPostgresHost: process.env.POSTGRES_HOST,
    postgresPostgresPassword: process.env.POSTGRES_PASSWORD,
    postgresPostgresDatabase: process.env.POSTGRES_DATABASE,
  },
}

module.exports = nextConfig
