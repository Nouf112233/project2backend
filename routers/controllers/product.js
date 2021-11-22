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

// const searchProduct = (req, res) => {
//   const {name}=req.body;
//   productModel
//     .find({ $text: { $search: name } } )
//     .exec()
//     .then((result) => {
//       res.send(result);
//       console.log("search seccesful");
//     })
//     .catch((err) => {
//       console.log("err",err);
//       res.send(err);
//     });
// };

const ProductId = (req, res) => {
  const {id}=req.params;
  productModel
    .findById(id)
    .then((result) => {
      res.send(result);
      console.log("search seccesful");
    })
    .catch((err) => {
      res.send(err);
      console.log("err");
    });
};

const productNew = (req, res) => {
  const newe =req.body.newe;
  const id =req.body.id;
  productModel
  .updateOne({_id:id},{$set:{newe:newe}})
    .exec()
    .then((result) => {
      res.send(result);
      console.log("new seccesful");
    })
    .catch((err) => {
      res.send(err);
      console.log("err");
    });
};

// const productNew = (req, res) => {
//   const newe =req.body.newe;
//   const id =req.body.id;
//   productModel
//   .updateOne({_id:id},{$set:{newe:newe}})
//     .exec()
//     .then((result) => {
//       res.send(result);
//       console.log("new seccesful");
//     })
//     .catch((err) => {
//       res.send(err);
//       console.log("err");
//     });
// };

const productDiscound = (req, res) => {
  const discound =req.body.discound;
  const id =req.body.id;
  productModel
  .updateOne({_id:id},{$set:{discound:discound}})
    .exec()
    .then((result) => {
      res.send(result);
      console.log("discound seccesful");
    })
    .catch((err) => {
      res.send(err);
      console.log("err");
    });
};

const addNotice = (req, res) => {
  const { Notice } = req.body;
  const id = req.body.id;
  productModel
    .findOneAndUpdate({ _id: id }, { $push: {Notice: Notice } },{new:true})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

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

module.exports = { addProduct,allProduct ,kindProduct,ProductId,productNew,productDiscound,addNotice};
