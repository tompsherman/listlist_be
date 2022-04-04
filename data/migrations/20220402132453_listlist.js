/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("user_id");
      table.string("email", 128).notNullable();
      table.boolean("paid_user").notNullable();
    })
    .createTable("lists", (table) => {
      table.increments("list_id");
      table.string("created_timestamp", 128).notNullable();
      table.boolean("list_open").notNullable();
      table.string("type", 128).notNullable();
      table.string("purchased_timestamp", 128);
    })
    .createTable("items", (table) => {
      table.increments("item_id");
      table.string("name", 128).notNullable();
      table.string("purchase_unit", 128).notNullable();
      table.string("use_unit", 128).notNullable();
      table.string("category", 128).notNullable();
      table.boolean("perishable").notNullable();
      table.string("time_to_expire").notNullable();
      table.integer("priority").notNullable();
      table.decimal("cost").notNullable();
      table.string("storage_space", 128).notNullable();
    })
    .createTable("list_items", (table) => {
      table.increments("list_item_id");
      table
        .integer("list_id")
        .notNullable()
        .references("list_id")
        .inTable("lists")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("item_id")
        .notNullable()
        .references("item_id")
        .inTable("items")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("desired_amount").notNullable();
      table.integer("acquired_amount");
      table.decimal("amount_left");
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.string("action", 128).notNullable();
    })
    .createTable("list_steps", (table) => {
      table.increments("list_step_id");
      table
        .integer("list_id")
        .notNullable()
        .references("list_id")
        .inTable("lists")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("step_id")
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("list_steps")
    .dropTableIfExists("steps")
    .dropTableIfExists("list_items")
    .dropTableIfExists("items")
    .dropTableIfExists("lists")
    .dropTableIfExists("users");
};
