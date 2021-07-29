const express = require("express");
const controller = require("./bookController");

const router = express.Router();
router.get("/book", controller.bookController);
router.post("/book", controller.postBook);

module.exports = router;
