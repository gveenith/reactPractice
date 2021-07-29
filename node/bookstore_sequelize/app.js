const express = require("express");
const router = require("./router");
const sequelize = require("./db");

const app = express();
sequelize.sync({ force: true });

app.use(express.json());
app.use(router);

app.listen(3010);
