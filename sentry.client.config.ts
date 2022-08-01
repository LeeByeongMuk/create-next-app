import * as Sentry from '@sentry/nextjs';

const { SENTRY_DSN } = process.env;

Sentry.init({
  dsn: SENTRY_DSN,
  enabled: process.env.NODE_ENV === 'production',
  environment:
    process.env.APP_URL === '' ? 'production' : 'development',
  tracesSampleRate: 1.0,
});
