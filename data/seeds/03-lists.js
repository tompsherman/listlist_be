/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("lists").insert([
    {
      list_id: 1,
      created_timestamp: "March 4",
      list_open: true,
      type: "grocery",
      purchased_timestamp: "",
      starred_list: "*",
    },
    {
      list_id: 2,
      created_timestamp: "",
      list_open: true,
      type: "pantry",
      purchased_timestamp: "",
      starred_list: "",
    },
  ]);
};
