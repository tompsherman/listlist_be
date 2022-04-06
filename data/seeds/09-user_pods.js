/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("user_pods").insert([
    { user_pod_id: 1, user_id: 1, pod_id: 1 },
    { user_pod_id: 2, user_id: 1, pod_id: 2 },
    { user_pod_id: 3, user_id: 2, pod_id: 1 },
    { user_pod_id: 4, user_id: 2, pod_id: 3 },
    { user_pod_id: 5, user_id: 3, pod_id: 1 },
    { user_pod_id: 6, user_id: 3, pod_id: 4 },
  ]);
};
