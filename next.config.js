const path = require('path');
const {withSentryConfig} = require('@sentry/nextjs');

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material',
]);

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  env: {
    APP_URL: process.env.APP_URL,
    APP_API_URL: process.env.APP_API_URL,
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
  webpack: config => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.resolve.alias['@assets'] = path.join(__dirname, 'public/assets');
    config.resolve.alias['@mui/styled-engine'] = '@mui/styled-engine-sc';
    return config;
  },
});

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = nextConfig;

// module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
