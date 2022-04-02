/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  return knex("users").insert([
    { id: 1, email: "mainTESTemail@gmail.com" },
    { id: 2, email: "TESTEMAIL2@gmail.com" },
    { id: 3, email: "testemail3@gmail.com" },
  ]);
};
