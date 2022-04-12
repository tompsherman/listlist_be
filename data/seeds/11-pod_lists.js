/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("pod_lists").insert([
    { pod_list_id: 1, pod_id: 1, list_id: 1 },
    { pod_list_id: 2, pod_id: 1, list_id: 2 },
    { pod_list_id: 3, pod_id: 1, list_id: 3 },
  ]);
};
