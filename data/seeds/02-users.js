/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("users").insert([
    { user_id: 1, email: "mainTESTemail@gmail.com", paid_user: true },
    { user_id: 2, email: "TESTEMAIL2@gmail.com", paid_user: false },
    { user_id: 3, email: "testemail3@gmail.com", paid_user: true },
  ]);
};
