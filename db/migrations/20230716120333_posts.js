/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id');
    table.string('title').notNullable();
    table.string('content').notNullable();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.boolean('is_verified').defaultTo('false');
    table.integer('verified_by').references('id').inTable('users').onDelete('SET NULL');
    table.timestamps(true, true);
    table.boolean('is_deleted').defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('posts');
};