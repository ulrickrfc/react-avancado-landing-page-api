module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'reactavancado'),
        username: env('DATABASE_USERNAME', 'reactavancado'),
        password: env('DATABASE_PASSWORD', 'raapi32'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
