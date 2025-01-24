import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL'),
    pool: {
      min: 0,
      max: 5,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 50000,
      idleTimeoutMillis: 300000,
      reapIntervalMillis: 10000,
      createRetryIntervalMillis: 2000,
      propagateCreateError: false
    },
    debug: false,
  },
});
