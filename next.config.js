const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add any other Next.js config options here
};

const sentryWebpackPluginOptions = {
  // Sentry organization and project from environment or hardcoded
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  
  // Auth token for uploading source maps
  authToken: process.env.SENTRY_AUTH_TOKEN,
  
  // Suppresses source map uploading logs during build
  silent: true,
  
  // Disable webpack plugin if no auth token (local dev)
  disableServerWebpackPlugin: !process.env.SENTRY_AUTH_TOKEN,
  disableClientWebpackPlugin: !process.env.SENTRY_AUTH_TOKEN,
};

const sentryOptions = {
  // Tunnel route to bypass ad-blockers
  tunnelRoute: '/_sentry-tunnel',
  
  // Hides source maps from generated client bundles
  hideSourceMaps: true,
  
  // Disables Sentry CLI logs
  disableLogger: true,
};

module.exports = withSentryConfig(
  nextConfig,
  sentryWebpackPluginOptions,
  sentryOptions
);
