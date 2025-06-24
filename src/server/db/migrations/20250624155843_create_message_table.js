exports.up = function up(knex) {
    return knex.schema
      .createTable('messages', function (table) {
        table.increments('id');
        table.string('email', 255).notNullable();
        table.string('name', 255).notNullable();
        table.string('subject', 255).notNullable();
        table.string('message').defaultTo(0)
        table.string('date').notNullable()
      });
  }
  
  exports.down = function down(knex) {
    return knex.schema
      .dropTable('messages');
  }