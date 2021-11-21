const userModel = require("./../../db/models/userSchema");

const addNewUser = (req, res) => {
  const { username, email, password, phonNumber,city,address } = req.body;
  const newUser = new userModel({
    username,
  email,
  password,
  phonNumber,
  city,
  address,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const checkUser = (req, res) =>{
    const {email}=req.body;
    userModel
      .findOne ({email:email})
      .then((result) => {
        res.send(result);
        console.log("user exit")
      })
      .catch((err) => {
        res.send(err);
        console.log("user not found")
      });
  };

const addCart = (req, res) =>{
    const {email ,id}=req.body;
    userModel
      .findOneAndUpdate ({email:email},{$addToSet:{cart:id}})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };

  const removeCart = (req, res) =>{
    const {email ,id}=req.body;
    userModel
      .findOneAndUpdate ({email:email},{$pull:{cart:id}})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };





  

module.exports = { addNewUser ,addCart,removeCart,checkUser };