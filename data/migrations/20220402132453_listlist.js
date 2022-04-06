/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("user_id");
      table.string("name", 128).notNullable();
      table.string("email", 128).notNullable();
      table.boolean("paid_user").notNullable();
    })
    .createTable("pods", (table) => {
      table.increments("pod_id");
      table.string("pod_name", 128).notNullable();
      table
        .integer("pod_neutron_id", 128)
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("user_pods", (table) => {
      table.increments("user_pod_id");
      table
        .integer("user_id")
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("pod_id")
        .notNullable()
        .references("pod_id")
        .inTable("pods")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("lists", (table) => {
      table.increments("list_id");
      table.string("created_timestamp", 128).notNullable();
      table.boolean("list_open").notNullable();
      table.string("type", 128).notNullable();
      table.string("purchased_timestamp", 128);
      table.string("starred_list", 1);
    })
    .createTable("pod_lists", (table) => {
      table.increments("pod_list_id");
      table
        .integer("pod_id")
        .notNullable()
        .references("pod_id")
        .inTable("pods")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("list_id")
        .notNullable()
        .references("list_id")
        .inTable("lists")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("items", (table) => {
      table.increments("item_id");
      table.string("name", 128).unique().notNullable();
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
    })
    .createTable("step_items", (table) => {
      table.increments("step_item_id");
      table
        .integer("step_id")
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("item_id")
        .notNullable()
        .references("item_id")
        .inTable("items")
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
    .dropTableIfExists("step_items") //done
    .dropTableIfExists("list_steps") //done
    .dropTableIfExists("steps") //done
    .dropTableIfExists("list_items") //done
    .dropTableIfExists("items") //done
    .dropTableIfExists("pod_lists")
    .dropTableIfExists("lists") //done
    .dropTableIfExists("user_pods")
    .dropTableIfExists("pods")
    .dropTableIfExists("users"); //done
};
