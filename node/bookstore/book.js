const db = require("./db");

module.exports = class Book {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  getAll() {
    return db.query("SELECT * FROM books");
  }

  save() {
    return db.query("INSERT INTO books (id,title, content) VALUES (?,?,?)", [
      this.id,
      this.title,
      this.content
    ]);
  }
};
