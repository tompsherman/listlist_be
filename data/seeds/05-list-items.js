/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("list_items").insert([
    {
      list_item_id: 1,
      list_id: 1,
      item_id: 1,
      desired_amount: 5,
      acquired_amount: null,
      amount_left: null,
    },
    {
      list_item_id: 2,
      list_id: 1,
      item_id: 2,
      desired_amount: 1,
      acquired_amount: null,
      amount_left: null,
    },
    {
      list_item_id: 3,
      list_id: 1,
      item_id: 3,
      desired_amount: 1,
      acquired_amount: null,
      amount_left: null,
    },
    {
      list_item_id: 4,
      list_id: 2,
      item_id: 1,
      desired_amount: 5,
      acquired_amount: null,
      amount_left: null,
    },
  ]);
};
