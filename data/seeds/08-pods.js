/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("pods").insert([
    { pod_id: 1, pod_name: "cedar beach", pod_neutron_id: 1 },
    { pod_id: 2, pod_name: `tom's`, pod_neutron_id: 1 },
    { pod_id: 3, pod_name: `klaire's`, pod_neutron_id: 2 },
    { pod_id: 4, pod_name: `house's`, pod_neutron_id: 3 },
  ]);
};
