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

// const ckeckuser = (req, res) =>{
//     const {email}=req.body;
//     someModel
//       .find({})
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => {
//         res.send(err);
//       });
//   });

module.exports = { addNewUser };