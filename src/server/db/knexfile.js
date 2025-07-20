require('dotenv').config({ path: require('find-config')('.env') });

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOST ,
    port: process.env.POSTGRES_PORT_INTERNAL,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD 
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations'
  }
};