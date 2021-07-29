const express = require("express");
const controller = require("./bookController");

const router = express.Router();
router.get("/book", controller.findAll);
router.post("/book", controller.create);
router.get("/book/:id", controller.findByPk);
router.patch("/book/:id", controller.update);
router.delete("/book/:id", controller.delete);
router.get("/User", controller.createUser);

module.exports = router;
