//import express from "express";
const express = require("express");

const router = express.Router();
router.get("/add-product", (req, res, next) => {
  res.send("<h1>I am good</h1>");
});

router.use(res => {
  res.statusCode(404).send("<h1>Page not Found</h1>");
});
module.exports = router;
