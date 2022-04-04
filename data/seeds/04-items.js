/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("items").insert([
    {
      item_id: 1,
      name: "stew beef",
      purchase_unit: "1 lb package",
      use_unit: "1 lb package",
      category: "meat",
      perishable: true,
      time_to_expire: "5 days",
      priority: 2,
      cost: 5.0,
      storage_space: "freezer",
    },
    {
      item_id: 2,
      name: "onion",
      purchase_unit: "3 lb bag",
      use_unit: "1 bulb",
      category: "vegetable",
      perishable: true,
      time_to_expire: "1 month",
      priority: 2,
      cost: 2.19,
      storage_space: "counter",
    },
    {
      item_id: 3,
      name: "garlic",
      purchase_unit: "3 bulbs",
      use_unit: "1/16 bulb",
      category: "vegetable",
      perishable: true,
      time_to_expire: "2 months",
      priority: 2,
      cost: 4.5,
      storage_space: "counter",
    },
  ]);
};
