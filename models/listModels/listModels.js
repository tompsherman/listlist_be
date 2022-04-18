const db = require("../../data/db-config");

module.exports = {
  //function names:
  find,
  newList,
  getCurrentList,
};

//functions:
function find() {
  return db("lists");
}

function newList(newList) {
  console.log("POST NEW LIST IN MODEL:", newList);
  return db("lists").insert(newList);
}

function getCurrentList(list_id) {
  console.log("LIST model", list_id);
  return db("lists as l")
    .select(
      "l.list_id",
      "i.item_id",
      "i.name",
      "i.purchase_unit",
      "i.category",
      "l.type",
      "i.priority",
      "i.cost",
      "li.list_item_id",
      "li.desired_amount",
      "li.acquired_amount",
      "li.purchase_date",
      "l.list_open"
    )
    .join("list_items AS li", "l.list_id", "li.list_id")
    .join("items AS i", "i.item_id", "li.item_id")
    .where("l.list_id", "=", list_id);
}
