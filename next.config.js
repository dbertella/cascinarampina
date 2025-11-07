/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Turbopack config (empty for now - webpack will be used for GraphQL)
  turbopack: {},
  webpack(config, { dir }) {
    // Add GraphQL loader
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      include: [dir],
      exclude: /node_modules/,
      use: [
        {
          loader: "graphql-tag/loader",
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;

