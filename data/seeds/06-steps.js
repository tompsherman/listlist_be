/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("steps").insert([
    { step_id: 1, action: "cook" },
    { step_id: 2, action: "chop" },
    { step_id: 3, action: "add" },
    { step_id: 4, action: "stir" },
    { step_id: 5, action: "simmer" },
    { step_id: 6, action: "remove" },
    { step_id: 7, action: "tear" },
    { step_id: 8, action: "serve" },
  ]);
};
