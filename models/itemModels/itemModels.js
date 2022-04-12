const db = require("../../data/db-config");

module.exports = {
  //function names:
  find,
  addItem,
};

//functions:
function find() {
  return db("items");
}

function addItem(item) {
  // console.log("ITEM model: item", item);
  return db("items").insert(item);
}
