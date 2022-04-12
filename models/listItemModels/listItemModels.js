const db = require("../../data/db-config");

module.exports = {
  //function names:
  find,
  addListItem,
  getCurrentList,
  addBulkListItem,
};

//functions:
function find() {
  return db("list_items");
}

function addListItem(listItem) {
  console.log("listItem Model:", listItem);
  return db("list_items").insert(listItem);
}

function getCurrentList(list_id) {
  return db("list as l")
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
      "li.desired_amount"
    )
    .join("list_items AS li", "l.list_id", "li.list_id")
    .join("items AS i", "li.item_id", "li.item_id")
    .where("l.list_id", "=", list_id)
    .first();
}

function addBulkListItem(bulkList) {
  // console.log("listItem Model:", bulkList);
  const insertList = bulkList.map((element) => ({
    list_id: element.list_id,
    item_id: element.item_id,
    desired_amount: element.desired_amount,
    acquired_amount: element.acquired_amount,
    amount_left: element.amount_left,
    purchase_date: element.purchase_date,
  }));
  console.log("models", insertList);
  return db("list_items").insert(insertList);
}
