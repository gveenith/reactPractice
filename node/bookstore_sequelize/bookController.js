const bookModel = require("./book");
const UserModel = require("./user");

exports.findAll = (req, res, next) => {
  bookModel
    .findAll()
    .then(result => res.status(200).json(result))
    .catch(error => console.log(error));
};

exports.findAllUser = (req, res, next) => {
  UserModel.findAll()
    .then(result => res.status(200).json(result))
    .catch(error => console.log(error));
};

exports.findByPk = (req, res, next) => {
  bookModel
    .findByPk(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(error => console.log(error));
};

exports.create = (req, res, next) => {
  bookModel
    .create({ title: req.body.title, author: req.body.author })
    .then(result => res.status(201).json(result))
    .catch(error => console.log(error));
};

exports.createUser = (req, res, next) => {
  UserModel.create({ name: req.body.name, email: req.body.email })
    .then(result => res.status(201).json(result))
    .catch(error => console.log(error));
};

exports.update = (req, res) => {
  bookModel
    .update(
      { title: req.body.title, author: req.body.author },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(result => res.status(200).json("Updated Successfully"))
    .catch(error => console.log(error));
};

exports.delete = (req, res) => {
  bookModel
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(result => res.status(200).json("Deleted Successfully"))
    .catch(error => console.log(error));
};

//   const book = new bookModel();
//   book
//     .getAll()
//     .then(result => res.status(200).json(result.rows))
//     .catch(error => console.log(error));
// };

// exports.postBook = (req, res, next) => {
//   res.status(201).json({
//     book: [{ title: req.body.title, content: req.body.content }]
//   });

// module.exports = bookController;
