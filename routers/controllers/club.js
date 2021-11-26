const clubModel = require("./../../db/models/clubSchema");

const kindClub = (req, res) => {
    const {kind}=req.body;
    clubModel
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

  const addTitle = (req, res) => {
    const newTitle = new clubModel({
      kind: req.body.kind,
      username: req.body.username,
      title: req.body.title,
    });
    newTitle
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }; 

  const addComment = (req, res) => {
    const { comment } = req.body;
    const id = req.body.id;
    clubModel
      .findOneAndUpdate({ _id: id }, { $push: {comment: comment } },{new:true})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };

module.exports = {kindClub,addTitle,addComment};