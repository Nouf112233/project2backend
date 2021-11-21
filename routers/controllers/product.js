const productModel = require("./../../db/models/productSchema");

const addProduct = (req, res) => {
  const newProduct = new userModel({
    kind: req.body.kind,
    name: req.body.name,
    specifications: req.body.specifications,
    Notice: req.body.Notice,
    price: req.body.price,
    image: req.body.image
  });
  newProduct
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// const allProduct = (req, res) => {
//   const { email } = req.body;
//   userModel
//     .findOne({ email: email })
//     .then((result) => {
//       res.send(result);
//       console.log("user exit");
//     })
//     .catch((err) => {
//       res.send(err);
//       console.log("user not found");
//     });
// };

// const addCart = (req, res) => {
//   const { email, id } = req.body;
//   userModel
//     .findOneAndUpdate({ email: email }, { $addToSet: { cart: id } })
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };

// const removeCart = (req, res) => {
//   const { email, id } = req.body;
//   userModel
//     .findOneAndUpdate({ email: email }, { $pull: { cart: id } })
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };

module.exports = { addProduct };
