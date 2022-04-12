/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("step_items").insert([
    { step_item_id: 1, step_id: 1, item_id: 4 },
    { step_item_id: 2, step_id: 2, item_id: 3 },
    { step_item_id: 3, step_id: 1, item_id: 2 },
    { step_item_id: 4, step_id: 2, item_id: 1 },
  ]);
};
