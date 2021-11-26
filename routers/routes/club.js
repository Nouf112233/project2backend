const express = require("express");

const { kindClub,addTitle,addComment} = require("./../controllers/club");

const clubRouter = express.Router();

clubRouter.get("/", kindClub);
clubRouter.post("/", addTitle);
clubRouter.put("/", addComment);


module.exports = clubRouter;