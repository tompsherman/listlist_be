const router = require("express").Router();

const Item = require("./itemModels");

const currentTime = new Date().toDateString();

// @desc		Test end is working
// @route		GET /test
router.get("/test", (req, res) => {
  res.status(202).json({ message: "the server is running at " + currentTime });
});
// @desc		Get all Items
// @route		GET /
router.get("/", (req, res) => {
  Item.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) =>
      res.status(500).json({ message: `${error.message}; ${error.stack}` })
    );
});
// @desc		Get a Item by id
// @route		GET /:id
router.get("/:id", (req, res) => {});
// @desc		Add a new Item
// @route		POST /
router.post("/", (req, res) => {});
// @desc		Update a Item by id
// @route		PUT /:id
router.put("/:id", (req, res) => {});
// @desc		Remove a Item by id
// @route		DELETE /:id
router.delete("/:id", (req, res) => {});

module.exports = router;
