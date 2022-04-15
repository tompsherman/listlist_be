const router = require("express").Router();

const List = require("./listModels");

const currentTime = new Date().toDateString();

// @desc		Test end is working
// @route		GET /test
router.get("/test", (req, res) => {
  res.status(202).json({ message: "the server is running at " + currentTime });
});
// @desc		Get all Lists
// @route		GET /
router.get("/", (req, res) => {
  List.find()
    .then((lists) => {
      res.status(200).json(lists);
    })
    .catch((error) =>
      res.status(500).json({ message: `${error.message}; ${error.stack}` })
    );
});
// @desc		Get a List by id
// @route		GET /:id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log("List router,", id);
  List.getCurrentList(id)
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
// @desc		Add a new List
// @route		POST /
router.post("/", (req, res) => {
  const listInfo = req.body;
  List.newList(listInfo)
    .then((list) => {
      res.status(201).json(list);
    })
    .catch((error) =>
      res.status(500).json({ message: `${error.message}; ${error.stack}` })
    );
});
// @desc		Update a List by id
// @route		PUT /:id
router.put("/:id", (req, res) => {});
// @desc		Remove a List by id
// @route		DELETE /:id
router.delete("/:id", (req, res) => {});

module.exports = router;
