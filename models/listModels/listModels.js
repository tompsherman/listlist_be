const db = require("../../data/db-config");

module.exports = {
  //function names:
  find,
  getCurrentList,
};

//functions:
function find() {
  return db("lists");
}

function getCurrentList(list_id) {
  console.log("model", list_id);
  return db("lists as l")
    .select("i.name", "l.type", "li.desired_amount")
    .join("list_items AS li", "l.list_id", "li.list_id")
    .join("items AS i", "i.item_id", "li.item_id")
    .where("l.list_id", "=", list_id);
}
