/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("lists").insert([
    {
      list_id: 1,
      created_timestamp: "March 4",
      list_open: false,
      type: "grocery",
      purchased_timestamp: "March 5",
    },
    {
      list_id: 2,
      created_timestamp: "April 2",
      list_open: true,
      type: "grocery",
      purchased_timestamp: null,
    },
  ]);
};
