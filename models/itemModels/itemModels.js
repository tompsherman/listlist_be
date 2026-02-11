const db = require("../../data/db-config");

module.exports = {
  //function names:
  find,
  findById,
  addItem,
  updateItem,
};

//functions:
function find() {
  console.log("get items MODEL db", db("items"));
  return db("items");
}

function addItem(item) {
  // console.log("ITEM model: item", item);
  return db("items").insert(item);
}

function findById(id) {
  return db("items").where({ item_id: id }).first();
}

function updateItem(id, changes) {
  return db("items")
    .where({ item_id: id })
    .update(changes)
    .then(() => findById(id));
}
