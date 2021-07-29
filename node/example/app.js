//import express from "express";
const express = require("express");
//import router from "./router";
const router = require("./router");

const app = express();
app.use(router);
// app.use("/app", (req, res, next) => {
//   console.log("out");
// });
// app.use("/", (req, res, next) => {
//   console.log("in use");
// });

app.listen(3000);
