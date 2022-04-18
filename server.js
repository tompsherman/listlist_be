const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("colors");

const userRouter = require("./models/userModels/userRouter");
const listRouter = require("./models/listModels/listRouter");
const itemRouter = require("./models/itemModels/itemRouter");
const listItemRouter = require("./models/listItemModels/listItemRouter");

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

console.log("SERVER GOT PINGED");

server.use("/api/users", userRouter);
server.use("/api/lists", listRouter);
server.use("/api/items", itemRouter);
server.use("/api/list_items", listItemRouter);

module.exports = server;
