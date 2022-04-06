const router = require("express").Router();

const ListItem = require("./listItemModels");

const currentTime = new Date().toDateString();

// @desc		Test end is working
// @route		GET /test
router.get("/test", (req, res) => {
  res.status(202).json({ message: "the server is running at " + currentTime });
});
// @desc		Get all ListItems
// @route		GET /
router.get("/", (req, res) => {
  ListItem.find()
    .then((listItems) => {
      res.status(200).json(listItems);
    })
    .catch((error) =>
      res.status(500).json({ message: `${error.message}; ${error.stack}` })
    );
});
// @desc		Get a ListItem by list_id
// @route		GET /:id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  ListItem.getCurrentList(id)
    .then((list) => {
      if (list) {
        res.status(200).json(list);
      } else {
        res.status(404).json({ message: `cannot find article no. ${id}` });
      }
    })
    .catch((error) =>
      res.status(500).json({ message: `${error.message}; ${error.stack}` })
    );
});
// @desc		Add a new ListItem
// @route		POST /
router.post("/", (req, res) => {
  const listItemData = req.body;
  console.log("LIST ITEM router: listItemData", listItemData);
  ListItem.addListItem(listItemData)
    .then((listItem) => {
      res.status(201).json(listItem);
    })
    .catch((error) =>
      res.status(500).json({ message: `${error.message}; ${error.stack}` })
    );
});
// @desc		Update a ListItem by id
// @route		PUT /:id
router.put("/:id", (req, res) => {});
// @desc		Remove a ListItem by id
// @route		DELETE /:id
router.delete("/:id", (req, res) => {});

module.exports = router;
