const bookModel = require("./book");

exports.bookController = (req, res, next) => {
  const book = new bookModel();
  book
    .getAll()
    .then(result => res.status(200).json(result.rows))
    .catch(error => console.log(error));
};

exports.postBook = (req, res, next) => {
  res.status(201).json({
    book: [{ title: req.body.title, content: req.body.content }]
  });
};
// module.exports = bookController;
