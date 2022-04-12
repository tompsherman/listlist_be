/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("list_steps").insert([
    { list_step_id: 1, list_id: 1, step_id: 1 },
    { list_step_id: 2, list_id: 1, step_id: 4 },
    { list_step_id: 3, list_id: 2, step_id: 8 },
    { list_step_id: 4, list_id: 2, step_id: 3 },
    { list_step_id: 5, list_id: 2, step_id: 5 },
  ]);
};
