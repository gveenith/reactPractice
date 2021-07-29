const Pool = require("pg").Pool;
const pool = new Pool({
  user: "vgovindarajalu",
  host: "localhost",
  database: "vgovindarajalu",
  password: "test",
  port: 5434
});

module.exports = pool;
