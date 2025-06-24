module.exports = {
  client: 'pg',
  connection: {
    host: 'db', 
    port: 5432,         
    user: 'postgres',
    database: 'postgres_web',
    password: 'password'
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations'
  }
};