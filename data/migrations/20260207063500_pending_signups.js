/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pending_signups", (table) => {
    table.increments("signup_id");
    table.string("pod_name", 128).notNullable();
    table.string("primary_email", 128).notNullable();
    table.string("invite_email_1", 128);
    table.string("invite_email_2", 128);
    table.string("status", 32).notNullable().defaultTo("pending"); // pending, approved, rejected
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("processed_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("pending_signups");
};
