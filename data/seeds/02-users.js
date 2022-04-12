/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("users").insert([
    { user_id: 1, name: "tom", email: "tom@gmail.com", paid_user: true },
    { user_id: 2, name: "klaire", email: "klaire@gmail.com", paid_user: false },
    { user_id: 3, name: "CDB", email: "house@gmail.com", paid_user: true },
  ]);
};
