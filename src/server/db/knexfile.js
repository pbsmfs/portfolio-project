require('dotenv').config({ path: require('find-config')('.env') });

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT_INTERNAL || 5432,
    user: process.env.POSTGRES_USER || 'postgres',
    database: process.env.POSTGRES_DB || 'postgres_web',
    password: process.env.POSTGRES_PASSWORD || 'password'
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations'
  }
};