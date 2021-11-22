const productModel = require("./../../db/models/productSchema");

const addProduct = (req, res) => {
  const newProduct = new productModel({
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

const allProduct = (req, res) => {
  productModel
    .find({})
    .then((result) => {
      res.send(result);
      console.log("get seccesful");
    })
    .catch((err) => {
      res.send(err);
      console.log("no product");
    });
};

const kindProduct = (req, res) => {
  const {kind}=req.params;
  productModel
    .find({kind:kind})
    .then((result) => {
      res.send(result);
      console.log("get seccesful");
    })
    .catch((err) => {
      res.send(err);
      console.log("err");
    });
};

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

module.exports = { addProduct,allProduct ,kindProduct};
